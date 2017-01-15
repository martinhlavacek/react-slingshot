import React from 'react';
import Progress from './common/Progress';
import Navigation from './common/Navigation';
import Footer from './common/Footer';
import TopHeader from './common/TopHeader';
import IboxTools from './common/IboxTools';
import { correctHeight, detectBody } from './common/Helpers';

class App extends React.Component {

  render() {

    let path = this.props.location.pathname;

    if(this.props.location.pathname == '/'){
      path = '/main';
    }
    let wrapperClass = "gray-bg " + path;
    return (
      <div id="wrapper">
        <Progress />
        <Navigation location={this.props.location}/>

        <div id="page-wrapper" className={wrapperClass}>

          <TopHeader />
          {this.props.children}
          <Footer />
        </div>
      </div>
    )
  }

  componentDidMount() {

    // Run correctHeight function on load and resize window event
    $(window).bind("load resize", function() {
      correctHeight();
      detectBody();
    });

    // Correct height of wrapper after metisMenu animation.
    $('.metismenu a').click(() => {
      setTimeout(() => {
        correctHeight();
      }, 300)
    });
  }
}

export default App
