import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {


  const [char, setchar] = useState([])
  // const axios = require('axios').default;
  useEffect(()=>{
    
    axios.get('https://rickandmortyapi.com/api/character')
    .then(function (res) {
      // handle success
      setchar(res.data.results)
      console.log(res.data.results);
    })



    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
  )

  
  
  return (
    <div className="App d-flex flex-wrap container justify-content-between">
      {
      char.map((i)=>
      {
        return(

            <div className="main">
          <div className='box'>


            <div className="d-flex">
              <div className="image">
                <img src={i.image} alt="" />
                </div>
                <div className="content">

                <h3>{i.name}</h3>
                <h3>{i.status}</h3>
                <h4>{i.species}</h4>
                <h4>{i.gender}</h4>
                </div>
          </div>
          </div>
          </div>
        )
      })
    }
      
    </div>
  );
}

export default App;
