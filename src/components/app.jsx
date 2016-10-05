import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';

class App extends React.Component {
   render() {
      return (
         <div>
            <Header />
                <h1> {this.props.children}</h1>
            <Footer />
         </div>
      );
   }
}

export default App;