import { Box, Text, TextButton, IconButton } from "@/components";
import { FlatList, KeyboardAvoidingView, TextInput } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { processRequests } from "@/api/ai/generatePostArgs";
import { CreatePostArgs } from "@/api/lens/mutate/CreatePostArgs";
import { LogDescription } from "ethers/lib/utils";
import {
  useChatGPTCompletion,
  fetchCompletion,
} from "@/api/ai/useChatGPTCompletion";
import { useCreatePost } from "@/api/lens/mutate/useCreatePost";
import * as ImagePicker from "expo-image-picker";
import Avatar from "@/components/Avatar";
import HorizontalStackedAvatars from "@/components/AvatarGroup";

type ChatMessage = {
  sender: "user" | "ai";
  text: string | CreatePostArgs | undefined;
};

export default function ComposeScreen() {
  // State for the user's message input
  const [message, setMessage] = useState("");

  const { mutateAsync: createPost } = useCreatePost();

  // State for the chat history
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

  const showCompletion = async () => {
    const reply = await fetchCompletion(message);
    if (reply) {
      // Add the AI's response to the chat history
      setChatHistory((prev) => [...prev, { sender: "ai", text: reply }]);
    }
  };

  // Function to handle sending a message
  const sendMessage = async () => {
    // Add the user's message to the chat history
    setChatHistory((prev) => [...prev, { sender: "user", text: message }]);
    setMessage("");
  };

  const [selectedImage, setSelectedImage] = useState<
    ImagePicker.ImagePickerAsset[]
  >([]);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage((prev) => [...prev, ...result.assets]);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <>
      <Stack screenOptions={{ headerShown: true }} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={chatHistory}
        renderItem={({ item }) => (
          <Box
            backgroundColor={
              item.sender === "user"
                ? "cardBackground"
                : "cardBackgroundHighlighted"
            }
            borderRadius={"m"}
            marginVertical={"s"}
            marginHorizontal={"m"}
          >
            <Text margin={"m"}>
              {item.sender === "user" ? "You" : "AI"}:{item.text}
            </Text>
          </Box>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Box
        flexDirection={"row"}
        gap={"m"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        marginHorizontal={"m"}
        marginBottom={"m"}
      >
        <Box flex={1}>
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={200}
            value={message}
            onChangeText={(text) => setMessage(text)}
            placeholder="Type your message..."
            style={{
              backgroundColor: "#F8F9F9",
              alignSelf: "stretch",
              borderRadius: 20,
              paddingLeft: 10,
              paddingTop: 10,
              borderWidth: 1,
              textAlign: "left",
              textAlignVertical: "top",
              minHeight: 50,
            }}
          />
          <Box flexDirection={"row"} gap={"m"}>
            <IconButton icon="image-outline" onPress={pickImageAsync} />
            <HorizontalStackedAvatars
              urls={selectedImage.flatMap((item) => item.uri)}
            />
          </Box>
        </Box>

        <Box>
          <TextButton
            label="Ask AI"
            onPress={() => {
              sendMessage();
              showCompletion();
            }}
          />

          <TextButton
            label="Send Post"
            onPress={async () => {
              const response = await fetch(selectedImage[0].uri);
              const blob = await response.blob();
              const file = new File([blob], "filename", { type: blob.type });
              createPost({
                image: file,
                title: message,
                description: message,
                content: message,
              });
            }}
          />
        </Box>
      </Box>
    </>
  );
}
