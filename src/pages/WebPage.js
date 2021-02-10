import React, { useState } from 'react';
import { WebView } from 'react-native-webview'


function WebPage({ route, navigation }) {

  const url = route.params;

  return (
    <WebView
      source={{ uri: url }}
    />
  )
}

export default WebPage;