import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';


class AddContact extends Component {

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.AddContact({
      id: uuidv4(),
      name: this.refs.name.value,
      contactMethod: this.refs.contactMethod.value
    })

  }



  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>

          <input type="text" ref="name" placeholder="Name"></input>
          <input type="text" ref="contactMethod" placeholder="Contact Method"></input>
          <button>Submit</button>

        </form>

      </>
    )
  }
}

export default AddContact
