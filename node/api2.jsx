import React, { useEffect, useState } from 'react'
import '../node/index.js'

const Api = () => {

    const [users , setUsers]=useState([]);
    const [loading, setloading]=useState(true);

    const getUsers=async ()=>{
        try {
            setloading(false)
            const response= await fetch('https://api.openweathermap.org/geo/1.0/direct?q=jammu&limit=5&appid=2ea585a2a9feb9a03674aecd9302a2c2');
            setUsers(await response.json());
            console.log(users);
        } catch (error) {
            setloading(false)
            console.log("Error is"+ error)
        }
       
       
    }

    useEffect(()=>{
            getUsers();
    },[])

    
    
 { return (
    <locn user={users}/>
  )}
}

export default Api