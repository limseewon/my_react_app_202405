import { Component } from 'react';

class ReadArticle extends Component {
    render() {
      console.log("Myarticle 실행"); 
      return (
        <section>
          <article>
            <h2>{this.props.title}</h2>
            <p>{this.props.desc}</p>
              { this.props.level &&
            <p>Level:{this.props.level}</p>
          }
          {/* (조건)? 참일때 할일 : 거짓일 떄 할일 
          조건 || 할일
          조건 && 할일*/}
          </article>
        </section>
      )
    }
  }
export default ReadArticle;