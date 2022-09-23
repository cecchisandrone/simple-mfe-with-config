import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
  }

  handleChange = e => {
    const input = e.target;
    this.setState({
      [input.name]: input.value,
    });
  };

  render() {
    const { name } = this.state;
    return (
        <div>
          <h1>Simple MFE Configuration</h1>
          <div>
            <label htmlFor="name">Name </label>
            <input id="name" name="name" defaultValue={name} type="text" onChange={this.handleChange}  />
          </div>
        </div>
    );
  }
}

export default App;
