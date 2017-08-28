import React from 'react';
import marked from 'marked';

const Previewer = (props) => {
    return (
      <div className='col-md-6'>
        <h3 className='headers'>Previewer</h3>
         <div className="output" dangerouslySetInnerHTML={{__html: marked(props.inputText)}}></div>
      </div>
    );
};

export default Previewer;
