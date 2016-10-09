import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';

var App = React.createClass({
   render() {
      return (
         <div>
            <Header />
                <h1> {this.props.children}</h1>
            <Footer />
         </div>
      );
   }
});

export default App;