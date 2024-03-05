import React from 'react'
import { useState, useEffect } from 'react';
import './app.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from 'semantic-ui-react'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import PinDropIcon from '@mui/icons-material/PinDrop';


// import { icons } from 'react-icons';

const App = () => {

  const [dn, setdn] = useState();
  const [city, setcity] = useState("%city%");

useEffect(() => {
  var cd=new Date();
  setdn( cd.getHours()>17?(cd.getHours()<5?true:false):false);
  
},[])

  Date.prototype.today = function () { 

    

    return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
}

// For the time now
Date.prototype.timeNow = function () {
  let hrs=(this.getHours()>12)?(this.getHours()-12):this.getHours()
     return ((hrs < 10)?"0":"") + hrs +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +(
       (this.getHours()>11)?" PM":" AM"
     )
}

var newDate = new Date();
var datetime = newDate.today() +"  " + newDate.timeNow();

  return (
    <div className='main'>
      <div className='img'>
      {dn?<WbSunnyIcon sx={{fontSize:150, color:'#FFDF22'}}/>:<Brightness2Icon sx={{fontSize:150, color:'#b4b1b8'}} />}

      {/* <FontAwesomeIcon icon="fa-solid fa-sun" /> */}
      
      {/* <Icon name='home'/> */}
      
      </div>

      <div className="loc">
        <PinDropIcon sx={{fontSize:50, color:'whitesmoke'}} />
        <span>{city}, India</span>

      </div>

      <div className="time">
      {datetime}

      </div>

      <div className="ctemp">
        <p>%ctemp% ℃</p>
      </div>

      <div className="minmax">
      Min: %tempmin% ℃ | Max: %tempmax% ℃
      </div>
       
    </div>
  )
}

export default App