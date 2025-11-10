import React from "react";
import { View } from "react-native";
import DropdownList from "./src/component/DropdownList";
import SocketIO from "./src/component/SocketIO";

export default function App() {

  return (
    <View style={{ flex: 1 }}>
      {/* <DropdownList /> */}
      <SocketIO />
    </View>
  );
}

