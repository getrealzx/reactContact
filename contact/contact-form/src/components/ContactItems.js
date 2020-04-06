import React, { Component } from 'react';

class ContactItems extends Component {
  render() {
    return (
      <li>
        {this.props.contact.name} contact info:
        {this.props.contact.contactMethod}
        <button onClick={() => { this.props.onDelete(this.props.contact.id) }}>X </button>

      </li>
    )
  }
}

export default ContactItems
