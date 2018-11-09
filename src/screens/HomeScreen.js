import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

export default class HomeScreen extends React.Component<*, *> {
  static navigationOptions = {
    header: null,
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>home</Text>
        <Button title="Press me !" onPress={() => navigate('Playground')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
