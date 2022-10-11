// import logo from './logo.svg';
import './App.css';
import Table from './Table';
// import testData from './Data/Data'
import React, { useEffect, useState } from 'react';

function App() {
  const [values,setValues]=useState([]);
  useEffect(()=>{
    fetch(
    "https://localhost:7035/",{mode:"cors"})
                .then((res) => res.json())
                .then((json) => {
                    setValues(json)
                })
                .catch((error)=>{
                  console.log(error);
                })
    },[values])

//     var data=[
//     {
//         'key':0,
//         'name':"",
//         'manufacturedby':'',
//         'expiredate':'',
//         'catagory':'',
//         'effects':'',
//         
//     },
//     {
//         'key':1,
//         'name':"",
//         'manufacturedby':'',
//         'expiredate':'',
//         'catagory':'',
//         'effects':'',
//         
//     },
//     {
//         'key':2,
//         'name':"",
//         'manufacturedby':'',
//         'expiredate':'',
//         'catagory':'',
//         'effects':'',
//         
//     },
//     {
//         'key':3,
//         'name':"",
//         'manufacturedby':'',
//         'expiredate':'',
//         'catagory':'',
//         'effects':'',
//         
//     },
//     {
//         'key':4,
//         'name':"",
//         'manufacturedby':'',
//         'expiredate':'',
//         'catagory':'',
//         'effects':'',
//         
//     },
//     {
//         'key'5,
//         'name':"",
//         'manufacturedby':'',
//         'expiredate':'',
//         'catagory':'',
//         'effects':'',
//         
//     },
//
// ]

  return (
    <div className="App">
        <nav>
          Pharmacy Management
        </nav>
        <div className="table-heading">
          <p>Drug name</p>
          <p>Manufactured by</p>
          <p>Expiry Date</p>
          <p>catagory</p>
          <p>effects</p>

        </div>
        <div>

        {  
        values.map((element,i)=>{
        return <Table prop={element} key={i+1}/>
        })
      }
        </div>
    </div>

  );
}

export default App;
