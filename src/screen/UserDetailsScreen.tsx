import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../redux/store';
import {
  deleteUser,
  setUser,
  updateUser,
} from '../redux/slice/userDetailsSlice';
import uuid from 'react-native-uuid';

interface User {
  id: string;
  name: string;
  email: string;
  age: string;
  mobile: string;
}

const UserDetailsScreen = () => {
  const { width } = Dimensions.get('window');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');
  const [selectValue, setSelectValue] = useState(false);
  const [selectValueId, setSelectValueId] = useState('');
  const inputRef = useRef(null);

  const dispatch = useAppDispatch();
  const allUser = useAppSelector(state => state.userDetails.users);

  const submitData = () => {
    dispatch(
      setUser({
        id: uuid.v4().toString(),
        name: name,
        email: email,
        age: age,
        mobile: mobile,
      }),
    );
    inputRef.current?.focus();
    setName('');
    setEmail('');
    setAge('');
    setMobile('');
  };

  const selectUserData = (item: User) => {
    setSelectValue(true);
    setSelectValueId(item.id);
    setName(item.name);
    setEmail(item.email);
    setAge(item.age);
    setMobile(item.mobile);
  };

  const updateUserDetails = () => {
    dispatch(
      updateUser({
        id: selectValueId,
        name: name,
        email: email,
        age: age,
        mobile: mobile,
      }),
    );
    inputRef.current?.focus();
    setSelectValue(false);
    setSelectValueId('');
    setName('');
    setEmail('');
    setAge('');
    setMobile('');
  };
  return (
    <View style={{ flex: 1, backgroundColor: 'lightgray' }}>
      <TextInput
        ref={inputRef}
        label={'Name'}
        mode="outlined"
        placeholder="Enter name"
        value={name}
        onChangeText={setName}
        style={{ marginHorizontal: 20, marginTop: 10 }}
        inputMode="text"
      />
      <TextInput
        label={'Email'}
        mode="outlined"
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
        style={{ marginHorizontal: 20, marginTop: 20 }}
        inputMode="email"
      />
      <TextInput
        label={'Age'}
        mode="outlined"
        placeholder="Enter age"
        value={age}
        onChangeText={setAge}
        style={{ marginHorizontal: 20, marginTop: 20 }}
        inputMode="numeric"
      />
      <TextInput
        label={'Mobile'}
        mode="outlined"
        placeholder="Enter mobile"
        value={mobile}
        onChangeText={setMobile}
        style={{ marginHorizontal: 20, marginTop: 20 }}
        inputMode="numeric"
      />
      {selectValue ? (
        <Button
          mode="contained"
          style={{ marginTop: 15, marginHorizontal: 20, marginBottom: 20 }}
          onPress={updateUserDetails}
        >
          Update
        </Button>
      ) : (
        <Button
          mode="contained"
          style={{ marginTop: 15, marginHorizontal: 20, marginBottom: 20 }}
          onPress={submitData}
        >
          Submit
        </Button>
      )}

      <FlatList
        data={allUser}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={
          <Text
            style={{
              textAlign: 'center',
              marginTop: 20,
              fontSize: 18,
              opacity: 0.6,
            }}
          >
            No users added yet
          </Text>
        }
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 10,
              marginBottom: 5,
              elevation: 10,
              shadowColor: 'black',
            }}
          >
            <Text style={{ fontSize: 18 }}>Name:- {item.name}</Text>
            <Text style={{ fontSize: 18 }}>Email:- {item.email}</Text>
            <Text style={{ fontSize: 18 }}>Age:- {item.age}</Text>
            <Text style={{ fontSize: 18 }}>Mobile:- {item.mobile}</Text>
            <View
              style={{
                // backgroundColor: 'red',
                height: 50,
                width: width - 30,
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 10,
              }}
            >
              <Button mode="contained" onPress={() => selectUserData(item)}>
                {selectValue && item.id === selectValueId
                  ? 'selected'
                  : 'Update'}
              </Button>
              <Button
                mode="contained"
                onPress={() => dispatch(deleteUser(item.id))}
              >
                Delete
              </Button>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default UserDetailsScreen;

const styles = StyleSheet.create({});
