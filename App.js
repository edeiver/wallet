import React, { useState, useEffect } from 'react';
import Navigation from './src/navigation';
import * as Font from 'expo-font';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    loadFonts()
  }, [])

  const loadFonts = async () => {
    await Font.loadAsync({
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
      'Roboto-Italic': require('./assets/fonts/Roboto-Italic.ttf'), 
    })
    setFontLoaded(true)

  }

  if (fontLoaded === false) {
    return null
  }

  return (
    <Navigation/>
  );
}

