import { Box, Text, TextButton, IconButton } from "@/components";
import { FlatList, KeyboardAvoidingView, TextInput } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
type ChatMessage = {
  sender: "user" | "ai";
  text: string;
};

export default function ComposeScreen() {
  // State for the user's message input
  const [message, setMessage] = useState("");

  // State for the chat history
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

  // State to track whether the TextInput is focused or not
  const [isInputFocused, setInputFocused] = useState(false);

  // Function to handle sending a message
  const sendMessage = async () => {
    // Add the user's message to the chat history
    setChatHistory((prev) => [...prev, { sender: "user", text: message }]);
    setMessage("");

    // Send message to your server here
    // Your server should then send the message to the OpenAI API
    const response = await fetch("YOUR_SERVER_URL", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();

    // Add the AI's response to the chat history
    setChatHistory((prev) => [...prev, { sender: "ai", text: data.message }]);

    // Clear the input field
    setMessage("");
  };

  const [layoutHeight, setHeight] = useState(100);

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
              {item.sender === "user" ? "You" : "AI"}: {item.text}
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
            onFocus={() => setInputFocused(true)}
            style={{
              backgroundColor: "#F8F9F9",
              alignSelf: "stretch",
              borderRadius: 20,
              paddingLeft: 10,
              paddingTop:10,
              borderWidth: 1,
              textAlign: "left",
              textAlignVertical: "top",
              minHeight: 50,
            }}
          />
        </Box>

        <TextButton label="Send" onPress={sendMessage} />
      </Box>
    </>
  );
}
