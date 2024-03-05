const http =require("http");
const fs=require("fs");
var requests = require("requests");
// import '../weather-app/src/App.jsx'
// import '../node/api2'
// import Api from '../node/api2';

const homeFile=fs.readFileSync("../weather-app/src/App.js", "utf-8");

const replaceval=(orgData, tempData)=>{
    // const t=tempData.main.temp-273.00;
    let temp=homeFile.replace("%ctemp%", (tempData.main.temp-273.00).toFixed(2))
    temp=temp.replace("%tempmax%", (tempData.main.temp_max-273.00).toFixed(2))
    temp=temp.replace("%tempmin%", (tempData.main.temp_min-273.00).toFixed(2))
    temp=temp.replace("%city%", (tempData.name))
    
    return temp;
// console.log(temp)
}
// let lat,lon;
// const api;
{/* <Api/> */}

// const locn=(data)=>{
// console.log("from index  ", data)
// }




// console.log(homeFile);
let apiurl='https://api.openweathermap.org/data/2.5/weather?lat='+28+'&lon='+77+'&appid=14384767d15208f1d970778e41aa01ba'

// ('https://api.openweathermap.org/geo/1.0/direct?q=jammu&limit=5&appid=2ea585a2a9feb9a03674aecd9302a2c2')

const server= http.createServer(async(req,res)=>{
if(req.url == "/"){


    await requests("https://api.openweathermap.org/geo/1.0/direct?q=bangalore&limit=5&appid=2ea585a2a9feb9a03674aecd9302a2c2")
    .on('data', await function (chunk) {
        console.log("inside 1   ", apiurl)
        const objdata=JSON.parse(chunk)
        const arrdata=  [objdata]
    
    //   console.log(arrdata[0].main.temp)
        const realData=arrdata.map((val)=>{
            apiurl="https://api.openweathermap.org/data/2.5/weather?lat="+val[0].lat+"&lon="+val[0].lon+"&appid=14384767d15208f1d970778e41aa01ba"
        });
    
        console.log("after mapping   ", apiurl)
        // fs.writeFileSync("../weather-app/src/App.jsx", realData)
    })
    .on('end', await function (err) {
      if (err) return console.log('connection closed due to errors', err);
     
      console.log('end 1');
    
    });
// var apiurl="https://api.openweathermap.org/data/2.5/weather?lat="+13+"&lon="+77+"&appid=14384767d15208f1d970778e41aa01ba";
// //GEOCODING
//  requests('https://api.openweathermap.org/geo/1.0/direct?q=jammu&limit=5&appid=2ea585a2a9feb9a03674aecd9302a2c2')
// .on('data', function (chunk) {
//   const od=JSON.parse(chunk)
//   const arr=[od];
  
//   const rd=arr.map((val)=>{
//     // latlon(val);
//     apiurl="https://api.openweathermap.org/data/2.5/weather?lat="+(val[0].lat).toFixed(2)+"&lon="+(val[0].lon).toFixed(2)+"&appid=14384767d15208f1d970778e41aa01ba"
//     console.log(apiurl,"\n",val)
//   })
// })
// .on('end', function (err) {
//   if (err) return console.log('connection closed due to errors', err);
 
//   console.log('end');
// });

 await setTimeout(()=>{console.log("in middle  ", apiurl)},0)
// let lat,lon;
// const latlon=(val)=>{
//     this.lat=(val[0].lat).toFixed(2);
//    this.lon=(val[0].lon).toFixed(2);
//    }
// console.log(lat+"   "+lon)
// console.log()
// const api="https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=14384767d15208f1d970778e41aa01ba";
//     console.log(api);


    requests(apiurl)
.on('data',await function (chunk) {
    console.log("inside main   ", apiurl)
    const objdata=JSON.parse(chunk)
    const arrdata=  [objdata]

//   console.log(arrdata[0].main.temp)
    const realData=arrdata.map((val)=>replaceval(homeFile, val)).join(" ");

    console.log("realData");
    fs.writeFileSync("../weather-app/src/App.jsx",realData);
//     console.log(realData);
res.write(realData);
    // fs.writeFileSync("../weather-app/src/App.jsx", realData)
})
.on('end', await function (err) {
  if (err) return console.log('connection closed due to errors', err);
 
  console.log('end main');

});
}
})

server.listen(8000, "127.0.0.1")





// serverg.listen(8000, "127.0.0.1

// export default locn;