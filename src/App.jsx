import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
const http = require('http')
let pingApp;

const App = () => {
  const [state, setState] = useState({jbops: 'not pinged yet', connect4riends: 'not pinged yet'})

  useEffect(() => {
    pingApp("http://jbops.herokuapp.com", "jbops")
    pingApp("http://connect4riends.herokuapp.com", "connect4riends")
  }, [])

  pingApp = (url, project) => {
    const date = new Date()
    const hour = date.getUTCHours()


    // pings app every 30 min from 6am EST to 9:59 pm EST
    if ([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1].includes(hour)) {
      try {
        http.get(url, {mode: 'no-cors'})
      }
      catch(err) {
      }
      setState( prevState => ({...prevState, [project]:hour}) )

      
      console.log(`pinged ${project}`)
      console.log(state[project])
    } else {
      console.log("not 8 am - 9 pm EST")
    }

    return;
  }

  return (
    <div>
      <p className="react-component">jbops last pinged at {state.jbops}</p>
      <p className="react-component">connect4riends last pinged at {state.connect4riends}</p>
    </div>
  );
}


setInterval(() => {
  pingApp("http://jbops.herokuapp.com", "jbops")
  pingApp("http://connect4riends.herokuapp.com", "connect4riends")
}, 1800000)

setInterval(function () {
  http.get("http://keeper-upper.herokuapp.com");
}, 1500000); // every 15 minutes (300000)

export default App;