import { Button, FlatList, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { SafeAreaView } from 'react-native-safe-area-context';

const SERVER_URL = Platform.OS === "android" ? "http://10.0.2.2:3000" : "http://localhost:3000";

const SocketIO = () => {
  const socketRef = useRef(null);
  const [room] = useState("demo-room");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const socket = io(SERVER_URL, { transports: ["websocket"] });
    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("✅ Connected:", socket.id);
      socket.emit("join_room", room);
    });

    socket.on("receive_message", (data) => {
      console.log("📩 Message received:", data);
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receive_message");
      socket.disconnect();
      console.log("🔌 Socket disconnected");
    };
  }, [room]);

  const sendMessage = () => {
    const socket = socketRef.current;
    if (socket && message.trim()) {
      const data = { room, message };
      socket.emit("send_message", data);
      setMessages((prev) => [...prev, { id: socket.id, text: message }]);
      setMessage("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>💬 Socket.IO Chat Demo</Text>
      <FlatList
        data={messages}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.msgContainer,
              item.id === socketRef.current?.id ? styles.myMsg : styles.otherMsg,
            ]}
          >
            <Text style={styles.msgText}>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputRow}>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Type message..."
          style={styles.input}
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </SafeAreaView>
  );
};

export default SocketIO;


const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  msgContainer: {
    marginVertical: 4,
    padding: 10,
    borderRadius: 8,
    maxWidth: "80%",
  },
  myMsg: {
    backgroundColor: "#DCF8C6",
    alignSelf: "flex-end",
  },
  otherMsg: {
    backgroundColor: "#EAEAEA",
    alignSelf: "flex-start",
  },
  msgText: { fontSize: 16 },
  inputRow: { flexDirection: "row", marginTop: 10 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
});
