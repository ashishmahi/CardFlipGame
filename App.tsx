/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import Game from './src/Game/Game';

const App = () => {
  const backgroundStyle = {
    height: '100%',
    backgroundColor: 'grey',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Game title="Flip Card" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
