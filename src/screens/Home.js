/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import Task from '../components/task';

const Home = ({navigation}) =>{
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);
    const handleAddTask = () => {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task]);
      setTask(null);
    };
    const completeTask = (index)=>{
      let itemsCopy = [...taskItems];
      itemsCopy.splice(index,1);
      setTaskItems(itemsCopy);
    };
    return (
      <View style={styles.container}>
  
        <View style={styles.tasksWrapper}>
  
          <Text style={styles.sectionTitle}>Today's tasks</Text>
          <View style={styles.items} >
            {taskItems.map((item, index)=>{
              return <TouchableOpacity onPress={()=>  navigation.navigate('TaskDetails')} >
                <Task key={index} text={item} complete={()=>completeTask(index)} />
              </TouchableOpacity>;
            })}
          </View>
  
        </View>
  
          <KeyboardAvoidingView style={styles.writeTasksWrapper} >
            <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>
            <TouchableOpacity onPress={() => handleAddTask()} >
              <View style={styles.addWrapper}>
                  <Text style={styles.addText}>+</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>

      </View>
    );
  };

export default Home;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e8eaed',
    },
    tasksWrapper: {
      paddingTop: 50,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black',
    },
    items: {
      marginTop: 30,
    },
    writeTasksWrapper:{
      position:'absolute',
      bottom:37,
      width: '100%',
      flexDirection:'row',
      justifyContent:'space-around',
      paddingHorizontal:20,
      alignItems:'center',
    },
    input:{
      width:'70%',
      paddingVertical:15,
      borderRadius:30,
      backgroundColor:'#fff',
      textAlign:'center',
    },
    addWrapper:{
      width:60,
      height:60,
      borderRadius:45,
      backgroundColor:'#fff',
      justifyContent:'center',
      alignItems:'center',
    },
    addText:{
      color:'#e8eaed',
      fontSize:25,
    },
  });
  