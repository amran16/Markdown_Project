import React from 'react';
//import React, { Component } from 'react';

const Markdown = (props) => {

    return (
      <div className='col-md-6'>
       <h3 className='headers'>Markdown</h3>
        <textarea
          className = "input"
          value = {props.inputText}
          onChange = {props.handleInput}>
        </textarea>
      </div>
    );

};

export default Markdown;
