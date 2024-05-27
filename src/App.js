import { Component } from 'react';
import './App.css';
import Myheader from './components/Myheader';
import Mynav from './components/Mynav';
import Myarticle from './components/Myarticle';

// function App() {
//   return (
//     <div className="App">
//       Hello, World!
//     </div>
//   );
// }

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{
        title:'React',
        desc:'Single Page Application'
      },
      menus:[
        {id:1, title:'HTML', desc:'Hypertext markup language'},
        {id:2, title:'CSS', desc:'CSS is for design'},
   
      ]
    }
  }

  render(){
      return (
    <div className="App">
      <Myheader title={this.state.subject.title} desc={this.state.subject.desc}/>
      <Mynav data={this.state.menus}/>
      <Myarticle title="HTML" desc="Hypertext markup language"/>
    </div>
  );
  }
}
//rcc 누르면 더 쉽게 생성 가능
export default App;
