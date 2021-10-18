/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const Task = (props) =>{
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity onPress={()=>props.updateTask()}>
                    <Icon name={props.data.done ? "checkbox-outline" : "square-outline" } type='ionicon'/>
                </TouchableOpacity>
                <Text style={styles.itemText}>{props.data.title}</Text>
            </View>
            <View>
                <Icon  name="md-close" type='ionicon' onPress={()=>props.delete()}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item:{
        backgroundColor:'#fff' ,
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
    },
    square:{
        width:24,
        height:24,
        borderRadius:5,
        backgroundColor:'#55bcf6',
        marginRight:15,
    },
    itemText:{
        marginLeft:5,
        maxWidth: '80%',
        color:'black',
    },
    circular:{
        width:12,
        height:12,
        borderWidth:2,
        borderColor:'#55bcf6',
        borderRadius:5,
    },
});

export default Task;
