import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
 
export default class FoodRowData extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <View style={styles.rowView}>
       <View style={styles.columnView}>
           <Text>{this.props.name}</Text>
       </View>
       <View style={styles.columnView}>
           <Text>{this.props.quantity}</Text>         
       </View>
       <View style={styles.columnView}>
           <Text>{this.props.serving_size}</Text>
       </View>
       <View style={styles.columnView}>
          <Text>{this.props.calories}</Text>
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
    flexDirection: 'column' ,
    width: "25%" 
  }
}