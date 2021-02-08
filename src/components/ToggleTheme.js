import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'

class toggleTheme extends Component {
    static contextType = ThemeContext; 

    render() { 
        const { toggleTheme } = this.context;
        return ( 
          <button onClick={toggleTheme}>Change Theme!</button>  
         );
    }
}
 
export default toggleTheme;