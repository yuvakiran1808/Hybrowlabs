import React, { useState } from 'react'
import './App.css';
import Axios from 'axios';
var random=1;
function App() {
  // lets declare a useState hook to maintain a state in functional component
  const [record,setRecord] = useState([]); 
  const getRecords= ()=>{

   //making a get request to fetch or retrieve data from the API
   //here by using the random value we are getting the each people record
   /*Here we also pass the random index value but in that case same records will be added repeatedly
   so while deleting the record all the same records will be deleted if the click on one record to overcome this we 
   can use uuid for unique id for each record
   */

     Axios.get(`https://swapi.dev/api/people/${random}`).then((response)=>{   

       //appending the each record into array 
      setRecord([...record,response.data.name]);   
      random++;  //incrementing the random value
    });
  };
  // function to delete particular record
  const deleteRecord = (currentName)=>{
    const filteredArray = record.filter((name)=>(name!==currentName))
    setRecord(filteredArray);
  }
  return (
    <div>
{/* button to add the record */}
      
      <button onClick={getRecords} className="recordadder-btn">Add Record</button> 
    
    <div className='wrapper'>
      <h1 className='header'>Name</h1>   
      {record.map((eachRecord) => {
            return (
              <div key={eachRecord} className="each-row">
                 {/*displaying the record*/}
                <h3>{eachRecord}</h3> 
                 {/*delete button to delete the record */}
                <button  onClick={()=>deleteRecord(eachRecord)} className="delete-btn">Delete</button>
              </div>
            );
          })}
    </div>
    </div>
  );
}

export default App;
