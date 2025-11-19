import React from 'react';
import DropdownList from './src/component/dropdownList/DropdownList';
import SocketIO from './src/component/SocketIO';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import CustomTextInput from './src/component/CustomTextInput';
import BottomNavExample from './src/component/BottomNavExample';
import { Provider as PaperProvider } from 'react-native-paper';
import AnimatedTest from './src/component/animation/AnimatedTest';
import ReanimatedTest from './src/component/animation/ReanimatedTest';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import UserDetailsScreen from './src/screen/UserDetailsScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <PaperProvider>
          <Provider store={store}>
            {/* <DropdownList /> */}
            {/* <SocketIO /> */}
            {/* <CustomTextInput /> */}
            {/* <BottomNavExample /> */}
            {/* <AnimatedTest /> */}
            {/* <ReanimatedTest /> */}
            <UserDetailsScreen />
          </Provider>
        </PaperProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
