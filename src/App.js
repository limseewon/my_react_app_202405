import { Component } from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       Hello, World!
//     </div>
//   );
// }


class Myheader extends Component {
  render(){
      return (
        <header>
          <h1 class="logo">React</h1>
          <p>Single page Application</p>
        </header>
  );
  }
}

class Mynav extends Component {
  render(){
      return (
        <nav>
            <ul>
                <li><a href="">HTML</a></li>
                <li><a href="">CSS</a></li>
                <li><a href="">JavaScript</a></li>
            </ul>
        </nav>
  );
  }
}
class Myarticle extends Component {
  render(){
      return (
        <article>
            <h2>HTML</h2>
            <p>Hypertext markup language</p>
        </article>
  );
  }
}

class App extends Component {
  render(){
      return (
    <div className="App">
      <Myheader/>
      <Mynav/>
      <Myarticle/>
    </div>
  );
  }
}
//rcc 누르면 더 쉽게 생성 가능
export default App;
