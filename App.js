import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import NewPostScreen from './screens/NewPostScreen';

export default function App() {
  return (
    <>
      {/* <StatusBar style="auto" /> */}
      {/* <HomeScreen /> */}
      <NewPostScreen/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
