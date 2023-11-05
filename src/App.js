 
import React,{useState} from 'react';
import Postcode from './component/Postcode.js';
import LocationInfo from './component/LocationInfo.js';
import Navbar from './component/Navbar.js';
import './App.css';

let  App=()=> {
let [location,setlocation]=useState(null);

let handlelocationfetch=(data)=>{
  console.log(data)
 setlocation({
  country: data.country,
  state: data.places[0]['state'],
  name: data.places[0]['place name'],
  longitude: data.places[0]['longitude'],
  latitude: data.places[0]['latitude']
 })
}

let clearlocation=()=>{
  setlocation(null)
  

}
  return (
    <>
    <Navbar/>
    <div className="App">
      <h1 className='fs-5 my-2 zip'>  Zip Code Information App - React !</h1>
      <Postcode onlocationfetch={handlelocationfetch} />
      <LocationInfo location={location} clearlocation={clearlocation}/>
    </div>
    </>
  );
}

export default App;
