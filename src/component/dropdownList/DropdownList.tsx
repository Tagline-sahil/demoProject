import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import PaperStyleDropdown from './PaperStyleDropdown';

const genderList = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
];
const DropdownList = () => {
  const [gender, setGender] = useState('');
  console.log('🚀 ~ DropdownList ~ gender:', gender);

  return (
    <View style={styles.container}>
      <PaperStyleDropdown
        label="Gender"
        value={gender}
        placeholder="Select Gender"
        options={genderList}
        onSelect={val => setGender(val)}
      />
    </View>
  );
};

export default DropdownList;

const styles = StyleSheet.create({
  container: { flex: 1, margin: 16 },
});
