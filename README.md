# Branchl: A Specialized Social Media App

Branchl is a next-generation social media application created to facilitate users in effortlessly finding squad members for entertainment purposes. Built on the robust Lens protocol, Branchl is designed with a core focus on promoting eudaemonic well-being and empowering users through fostering meaningful social connections.

## Key Features

### Decentralization
Leveraging the power of decentralization, Branchl is built on the [Lens Protocol](https://www.lens.xyz/). This decentralized social network infrastructure ensures that control and data ownership remain in the hands of users, providing a more secure and transparent social media experience.

### AI-Powered Interactions
Branchl incorporates the cutting-edge technology of [TypeChat](https://github.com/microsoft/TypeChat). This tool harnesses the power of OpenAI's ChatGPT to generate formalized JSON outputs. This AI-powered feature simplifies user interactions, providing a more engaging and dynamic social media experience.

### Cross-Platform Compatibility
Developed using the latest version of [Expo](https://expo.dev/), Branchl supports cross-platform functionality. With the integration of React Native and React Native Web, Branchl can be seamlessly deployed across iOS, Android, and web platforms. This ensures that users can access Branchl's features anytime, anywhere, and on any device.

## Setup
for the scripts to run you need to create a .env (or copy the template cp .env.template .env) file with these variables:
```
EXPO_PUBLIC_LENS_API=https://api.lens.dev/
EXPO_PUBLIC_THIRDWEB_ACTIVE_CHAIN=mumbai
EXPO_PUBLIC_THIRDWEB_CLIENT_ID= 
```
Always make sure you `yarn install` beforehand.

look in the package.json file for the scripts section you see all the scripts you can run.