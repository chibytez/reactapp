  import React,{Component} from  'react';
  import ReactDOM from 'react-dom';

import JSON from './db.json';
// COMPONENTS
import Header from './components/header'
import NewsList from './components/news_list';
  class App extends Component{
      state= {
          news:JSON
      }
    render(){
        console.log(this.state.news)
      return (
      <div>
     < Header/>
     <NewsList news={this.state.news}>
     They news Are
     </NewsList>
      </div>
      )
  }
}
  ReactDOM.render(<App/>, document.querySelector('#root')); 