import React from 'react';
import { Button, View, SafeAreaView, Modal, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const Home = ({ navigation, screenProps }) => (
  <SafeAreaView>
    <Button
      title="Go to details"
      onPress={() => navigation.navigate('Details')}
    />
    <Button
      title="Go to modal"
      // onPress={() => null}
      onPress={() => screenProps.changeModalVisibility(true)}
    />
  </SafeAreaView>
);

const Details = ({ navigation, screenProps }) => (
  <SafeAreaView>
    <Button
      title="Go to modal"
      // onPress={() => null}
      onPress={() => screenProps.changeModalVisibility(true)}
    />
  </SafeAreaView>
);
