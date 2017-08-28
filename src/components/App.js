import React, { Component } from 'react';
import '../style/App.css';
import Markdown from './markdown'
import Previewer from './previewer'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      inputText: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\n**You can Edit this as you wish, feel free to Add, Edit, and Delete**\n\n *https://www.freecodecamp.com/challenges/build-a-markdown-previewer* '

    };

  }

   handleInput = (e) => {
     this.setState({ inputText: e.target.value });
   }

  render() {
    return (
        <div className='container'>
            <Markdown handleInput = {this.handleInput} inputText = {this.state.inputText} />
            <Previewer inputText = {this.state.inputText}/>
       </div>
    );
  }
}

export default App;
