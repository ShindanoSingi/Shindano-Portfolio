import React, {Component} from 'react';
import './App.css';
import reactScrollToComponent from 'react-scroll-to-component';

class Portfolio extends React.Component {
     componentDidMount() {
          scrollToComponent(this.Blue, {
               offset: 0,
               align: 'middle',
               duration: 500,
               ease: 'inCirc'
          });
     }

     render() {
          <div></div>
     }
}
