import { StatusBar } from "expo-status-bar";
import React from "react";
// import { StyleSheet, Text, View, SafeAreaView } from "react-native";
// import HomeScreen from "./screens/HomeScreen";
// import NewPostScreen from './screens/NewPostScreen';
// import SignedInStack from './navigation';
import AuthNavigation from "./AuthNavigation";

export default function App() {
  return (
    <>
      <AuthNavigation />
    </>
  );
}
