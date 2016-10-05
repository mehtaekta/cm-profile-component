import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
            <ul>
               <li><Link to="/home">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/contact">Contact</Link></li>
            </ul>
         </div>
      );
   }
}

export default Header;