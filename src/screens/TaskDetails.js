/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const TaskDetails = (props)=>{
    return (
      <View style={styles.container}>
          <Text>Task Details</Text>
      </View>
  );
};
export default TaskDetails;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e8eaed',
    },
});
