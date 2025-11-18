import { StyleSheet, useWindowDimensions, View } from 'react-native';
import React, { useState } from 'react';
import {
  TextInput,
  Button,
  Searchbar,
  Switch,
  Chip,
  List,
} from 'react-native-paper';

const CustomTextInput = () => {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  // const [onSubmit, setOnSubmit] = useState(false);
  const [visible, setVisible] = useState(false);
  const [direction, setDirection] = useState(false);

  const chips = ['All', 'Left', 'Right', 'Top', 'Bottom'];
  const [selected, setSelected] = useState('all');

  const [expanded, setExpanded] = React.useState(false);
  const handlePress = () => setExpanded(!expanded);

  const style = useStyles();
  return (
    <View style={style.container}>
      <Searchbar
        // mode="bar"
        placeholder="Search here..."
        style={style.searchTextContainer}
        iconColor="#007bff"
        inputStyle={style.searchText}
      />
      <TextInput
        label="Enter a value"
        value={text}
        onChangeText={setText}
        mode="outlined"
        style={style.textInputContainer}
        left={<TextInput.Icon icon={'account'} />}
      />
      <TextInput
        label={'Enter a password'}
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        style={style.textInputContainer}
        secureTextEntry={!visible}
        right={
          <TextInput.Icon
            icon={visible ? 'eye-off' : 'eye'}
            onPress={() => setVisible(!visible)}
          />
        }
        left={<TextInput.Icon icon={'lock'} />}
      />
      <Switch
        value={direction}
        onValueChange={() => setDirection(!direction)}
        color="#6200ee"
      />
      <Button
        mode="elevated"
        disabled={!text && !password}
        onPress={() => {
          setText(''), setPassword('');
        }}
        style={style.btnContainer}
        labelStyle={style.btnText}
      >
        Submit
      </Button>

      <View style={{ marginTop: 10, gap: 10 }}>
        {chips.map(label => (
          <Chip
            key={label}
            mode="flat"
            selected={selected === label}
            onPress={() => setSelected(label)}
            style={{
              backgroundColor: selected === label ? '#6200ee' : '#f2f2f2',
              height: 30,
              width: 100,
            }}
            textStyle={{
              color: selected === label ? 'white' : 'black',
            }}
          >
            {label}
          </Chip>
        ))}
      </View>
      <View style={{ backgroundColor: 'skyblue', marginTop: 40, width: 250 }}>
        <List.Section>
          <List.Accordion
            title="Click to Expand"
            left={prop => <List.Icon {...prop} icon={'folder'} />}
            expanded={expanded}
            onPress={handlePress}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
            <List.Item title="Third item" />
          </List.Accordion>
        </List.Section>
      </View>
    </View>
  );
};

export default CustomTextInput;

const useStyles = () => {
  const { width, height } = useWindowDimensions();
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 16,
      backgroundColor: 'white',
    },
    textInputContainer: {
      backgroundColor: 'lightgray',
      height: 50,
      width: width - 32,
    },
    btnContainer: {
      marginTop: 20,
      width: width - 50,
    },
    btnText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    enterText: {
      fontSize: 20,
    },
    searchTextContainer: {
      marginBottom: 40,
    },
    searchText: {
      fontSize: 18,
    },
  });
};
