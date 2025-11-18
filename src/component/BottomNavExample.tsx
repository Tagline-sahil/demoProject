import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { BottomNavigation, Provider, Text } from 'react-native-paper';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

const MusicRoute = () => (
  <Text
    style={{
      flex: 1,
      textAlign: 'center',
      marginTop: 50,
    }}
  >
    🎵 Music Screen
  </Text>
);
const AlbumsRoute = () => (
  <Text style={{ flex: 1, textAlign: 'center', marginTop: 50 }}>
    💿 Albums Screen
  </Text>
);
const RecentsRoute = () => (
  <Text style={{ flex: 1, textAlign: 'center', marginTop: 50 }}>
    🕒 Recents Screen
  </Text>
);

const BottomNavExample = () => {
  const [index, setIndex] = useState(0);

  const routes = [
    { key: 'music', title: 'Music', icon: 'music' },
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ];

  const renderScreen = ({ route }) => {
    switch (route.key) {
      case 'music':
        return <MusicRoute />;
      case 'albums':
        return <AlbumsRoute />;
      case 'recents':
        return <RecentsRoute />;
      default:
        return null;
    }
  };
  return (
    <Provider>
      {renderScreen({ route: routes[index] })}
      <BottomNavigation.Bar
        navigationState={{ index, routes }}
        onTabPress={({ route }) => {
          const newIndex = routes.findIndex(r => r.key === route.key);
          if (newIndex !== -1) {
            setIndex(newIndex);
          }
        }}
        renderIcon={({ route, color }) => (
          <MaterialDesignIcons name={route.icon} size={24} color={color} />
        )}
        getLabelText={({ route }) => route.title}
        activeColor="black"
        inactiveColor="gray"
      />
    </Provider>
  );
};

export default BottomNavExample;

const styles = StyleSheet.create({});
