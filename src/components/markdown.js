import React from 'react';

const Markdown = (props) => {

    return (
      <div>
       <h3 className='headers'>Markdown</h3>
       <form>
        <textarea
          className = "input"
          value = {props.inputText}
          onChange = {props.handleInput}>
        </textarea>
       </form>
      </div>
    );

};

export default Markdown;
