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
      <ScrollView style={backgroundStyle}>
        <Game />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
