import React from 'react';
import DropdownList from './src/component/dropdownList/DropdownList';
import SocketIO from './src/component/SocketIO';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import CustomTextInput from './src/component/CustomTextInput';
import BottomNavExample from './src/component/BottomNavExample';
import { Provider as PaperProvider } from 'react-native-paper';
import AnimatedTest from './src/component/animation/AnimatedTest';
import ReanimatedTest from './src/component/animation/ReanimatedTest';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <PaperProvider> */}
        {/* <DropdownList /> */}
        {/* <SocketIO /> */}
        {/* <CustomTextInput /> */}
        {/* <BottomNavExample /> */}
        {/* <AnimatedTest /> */}
        <ReanimatedTest />
        {/* </PaperProvider> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
