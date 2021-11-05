/* eslint-disable prettier/prettier */
import React, {useState , useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView,KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import Task from '../components/task';
import AsyncStorage, {useAsyncStorage} from '@react-native-async-storage/async-storage';


export default function Home() {

const [ready,setReady] = useState(false);
const initialTasks = [

];

const [value, setValue] = useState(initialTasks);
const { getItem, setItem } = useAsyncStorage('storedData');



const readItemFromStorage = async () => {
  const jsonItem = await getItem();
  const item = JSON.parse(jsonItem);
  setValue(item);
  return await item;
};


const writeItemToStorage = async newValue => {
  const jsonValue = JSON.stringify(newValue);
  await setItem(jsonValue);
  setValue(jsonValue);
};


  const handleAddTask = () =>{
    Keyboard.dismiss();
    let data = {title:taskTitle,done:false};
    let newList = taskList;
    newList.push(data);
    setTaskList(newList);
    setTaskTitle('');
    writeItemToStorage(newList);
  };

  const handleDeleteTask = (index) =>{
    let itemsCopy = [...taskList];
    itemsCopy.splice(index,1);
    setTaskList(itemsCopy);
    writeItemToStorage(itemsCopy);
  };
  const handleUpdateTask = (index)=>{
    let newList = [...taskList];
    var isTrue = newList[index].done;
    console.log(isTrue);
    isTrue ? newList[index].done = false : newList[index].done = true;
    setTaskList(newList);
    setTaskTitle('');
    writeItemToStorage(newList);
  };

  useEffect(() => {
    readItemFromStorage();
  },);

  const [taskList,setTaskList] = useState(value);
  const [taskTitle,setTaskTitle] = useState('');

  const loadTask = () =>{
    AsyncStorage.getItem('storedData').then(data=>{
      if (data !== null){
        setTaskList(JSON.parse(data));
      }
    });
  };

  if (!ready){
    loadTask();
    setReady(true);
  }
    return (
      <View style={styles.container}>
        <ScrollView style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle} onPress={()=>console.log(value)}>Today's tasks</Text>
          <View style={styles.items} >
            {
              taskList.map(( item, index) => {
                return (
                  <Task updateTask={()=>handleUpdateTask(index)} key={index} data={item} delete={()=>handleDeleteTask(index)} />
                );
              })
            }
          </View>
        </ScrollView>
          <KeyboardAvoidingView style={styles.writeTasksWrapper} >
            <TextInput style={styles.input} placeholder={'Write a task'} value={taskTitle} onChangeText={value=>setTaskTitle(value)} />
            <TouchableOpacity onPress={()=> handleAddTask() } >
              <View style={styles.addWrapper}>
                  <Text style={styles.addText}>+</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>

      </View>
    );
  }

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
      color:'black',
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
