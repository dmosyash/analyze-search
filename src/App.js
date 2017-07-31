import React, { Component } from 'react';
import Obj from './searchStats.jsx'
import './App.css';

class App extends Component {

  getWords(arr) {
    let json = {};
    for (let i = 0; i < arr.length; i++) {
      if (json.hasOwnProperty(arr[i])) {
        json[arr[i]] += 1;
      } else {
        json[arr[i]] = 1;
      }
    }
    return JSON.stringify(json);
  }

  render() {
    let rows = Obj.map((v, i) => {
      return (<tr key={i}><td>{v.name}</td><td>{v.email}</td><td>{v.board}</td><td>{v.grade}</td>
        <td>{this.getWords(v.query)}</td><td>{this.getWords(v.keywords)}</td><td>{v.result.toString()}</td></tr>)
    });
    return (
      <div className="App">
        <table>
          <thead> 
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Board</td>
              <td>Grade</td>
              <td>Query</td>
              <td>Keywords</td>
              <td>Results</td>
            </tr>  
           </thead> 
           <tbody>{rows}</tbody> 
        </table>
      </div>
    );
  }
}

export default App;
