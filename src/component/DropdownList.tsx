import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Dropdown } from "react-native-paper-dropdown";

const genderList = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];
const DropdownList = () => {
  const [gender, setGender] = useState("");
 return (
    <View style={styles.container}>
      <Dropdown
        label="Gender"
        placeholder="Select Gender"
        options={genderList}
        value={gender}
        onSelect={setGender}
      />
    </View>
  );
}

export default DropdownList

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", margin: 16 },
});
