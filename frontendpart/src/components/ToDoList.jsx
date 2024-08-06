import React,{useState, useEffect} from 'react';
import axios from 'axios';

const ToDoList=()=>{
    const [lists, setLists]=useState([]);
    const fetchAllLists =async()=>{
        try{
            const response = await axios.get('http://localhost:1234/api/List');
            setLists(response.data);
        }catch(error){
            console.error(error);
        }
        useEffect(()=>{
            fetchAllLists();
        },[])
    }
}

export default ToDoList;