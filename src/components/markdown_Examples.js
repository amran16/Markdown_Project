//works perfect
render() {
  return (
      <div className='container'>
        <div className='col-md-6'>
           <h3 className='headers'>Markdown</h3>
            <textarea className='input'
                      value={this.state.inputText}
                      onChange={ this.handleInput}>
            </textarea>
        </div>
        <div className='col-md-6'>
          <h3 className='headers'>Previewer</h3>
           <div className="output" dangerouslySetInnerHTML={{__html: marked(this.state.inputText)}}></div>
        </div>
     </div>
  );
}

//Class version
class Previewer extends Component {
  render() {
    return (
      <div className='col-md-6'>
        <h3 className='headers'>Previewer</h3>
         <div className="output" dangerouslySetInnerHTML={{__html: marked(this.props.inputText)}}></div>
      </div>
    );
  }
};

//functional version
const Previewer = (props) => {
    return (
      <div className='col-md-6'>
        <h3 className='headers'>Previewer</h3>
         <div className="output" dangerouslySetInnerHTML={{__html: marked(props.inputText)}}></div>
      </div>
    );
};
