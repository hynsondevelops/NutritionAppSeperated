import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
 
export default class FoodRowHeader extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    const state = this.state;
    return (
      <View style={styles.rowView}>
       <View style={styles.columnView}>
           <Text>Name</Text>
       </View>
       <View style={styles.columnView}>
           <Text>Quantity</Text>         
       </View>
       <View style={styles.columnView}>
           <Text>Serving Size</Text>
       </View>
       <View style={styles.columnView}>
          <Text>Calories</Text>
       </View>
      </View>
    )
  }
}
 
const styles = {
  rowView: {
    borderWidth: 2,
    flexDirection: 'row',
    width: "100%"
  },
  columnView: {
    borderWidth: 2,
    flexDirection: 'column',
    width: "25%"  
  }
}