import React, { Component } from 'react';





class Choice extends Component {
  constructor (props) {
    super(props);

    this.state = {dummy: "save data?"};

  }


  render() {
    return (
      <div className="choice-container">
        <h3>Person's Name</h3>
        <img src={this.props.catPhoto}/>
      </div>



    );
  }
}





export default Choice;