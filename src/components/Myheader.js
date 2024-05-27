import { Component } from 'react';

class Myheader extends Component {
    render(){
      console.log(this)
        return (
          <header>
            <h1 class="logo">{this.props.title}</h1>
            <p>{this.props.desc}</p>
          </header>
    );
    }
  }
  export default Myheader;