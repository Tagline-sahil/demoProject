import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
  FlatList,
} from 'react-native';
import { TextInput, Text } from 'react-native-paper';

const PaperStyleDropdown = ({
  label,
  value,
  options,
  onSelect,
  placeholder = 'Select',
}) => {
  const [open, setOpen] = useState(false);
  const height = useState(new Animated.Value(0))[0];

  const toggle = () => {
    setOpen(!open);
    Animated.timing(height, {
      toValue: open ? 0 : 150,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={{ marginBottom: 20 }}>
      {/* Paper Input */}
      <TouchableOpacity activeOpacity={0.9} onPress={toggle}>
        <TextInput
          label={label}
          value={value ? value : ''}
          placeholder={placeholder}
          mode="outlined"
          editable={false} // 👈 make it act like a dropdown
          right={<TextInput.Icon icon={open ? 'chevron-up' : 'chevron-down'} />}
        />
      </TouchableOpacity>

      {/* Dropdown List */}
      <Animated.View style={[styles.dropdown, { height }]}>
        <FlatList
          data={options}
          keyExtractor={item => item.value}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                onSelect(item.label);
                toggle();
              }}
            >
              <Text style={styles.itemText}>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    overflow: 'hidden',
    // borderWidth: 1,
    // borderColor: '#999',
    // borderRadius: 8,
    backgroundColor: '#fff',
    marginTop: 4,
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  itemText: {
    fontSize: 16,
    color: '#000',
  },
});

export default PaperStyleDropdown;
