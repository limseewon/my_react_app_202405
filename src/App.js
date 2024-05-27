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
  render(){
      return (
    <div className="App">
      <Myheader title="React1" desc="Single Page Application1"/>
      
      <Mynav/>
      <Myarticle title="HTML" desc="Hypertext markup language"/>
    </div>
  );
  }
}
//rcc 누르면 더 쉽게 생성 가능
export default App;
