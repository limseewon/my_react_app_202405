import { Component } from 'react';
class Myarticle extends Component {
    render(){
        console.log("알티클 실행");
        return (
          <article>
              <h2>{this.props.title}</h2>
              <p>{this.props.desc}</p>
          </article>
    );
    }
  }
  export default Myarticle;