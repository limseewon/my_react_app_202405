import { Component } from 'react';
class ReadArticle extends Component {
    render(){
        console.log("알티클 실행");
        return (
          <section>
                      <article>
              <h2>{this.props.title}</h2>
              <p>{this.props.desc}</p>
          </article>
          </section>
      );
    }
  }
  export default ReadArticle;