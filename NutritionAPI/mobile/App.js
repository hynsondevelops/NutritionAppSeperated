import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FoodRowHeader from './FoodRowHeader'
import FoodRowData from './FoodRowData'

const sampleData = {name: "Blueberries", quantity: 2, serving_size: 1, calories: 100}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FoodRowHeader />
        <FoodRowData name={sampleData.name} quantity={sampleData.quantity} serving_size={sampleData.serving_size} calories={sampleData.calories} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


