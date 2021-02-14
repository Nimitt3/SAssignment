 import './App.css';
import React, {Component} from 'react';
import { UrlInfo } from './UrlInfo/UrlInfo';
import { get, set } from 'idb-keyval';

class App extends React.Component {
 
  constructor(){
    super();
    this.state = {
      items: []
    }

    this.url = 'https://jsonplaceholder.typicode.com/';
    // this.pingUrls = this.pingUrls.bind(this)
  }

  componentDidMount(){
    setTimeout(this.pingUrls, 5000);
  }

  pingUrls = () => {
      
      this.callApi('comments');
      this.callApi('photos');
      this.callApi('todos');
      this.callApi('posts');

  }


  callApi = (request) => {
   
    var startRequest = new Date();
    fetch(this.url+''+request)
    .then(response => response.json())
    .then(json => {
        // console.log(json);
        var endRequest = new Date();

        var startSave = new Date();

          set(request, json)
              .then(() => {
                var endSave = new Date();
                var localList = this.state.items;
                localList.push({startRequest: startRequest, 
                  endRequest:endRequest, 
                  startSave: startSave, 
                  endSave: endSave})
        
                  console.log(localList);  
                this.setState({items: localList});
               }
              )

        // get(request).then((val) => {
        //     console.log(val)
        // })

    })

  }


  render() {
    return (
      <div>
        
        <div align="center">
          <ul>{this.state.items.map((item,index) => <UrlInfo key={index} time={item} />)}</ul>
        </div>

        <div align="center">
          <button onClick={this.callApi.bind(this, 'comments')}>Button 1</button>
          <button onClick={this.callApi.bind(this, 'photos')}>Button 2</button>
          <button onClick={this.callApi.bind(this, 'todos')}>Button 3</button>
          <button onClick={this.callApi.bind(this, 'posts')}>Button 4</button>
        </div>

      </div>
    );
  }
  
}

export default App;
