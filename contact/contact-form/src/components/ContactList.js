import React, { Component } from 'react';
import ContactItems from './ContactItems';

class ContactList extends Component {
  render() {

    let contactItem = this.props.contacts.map((contactObj) => {
        return <ContactItems key={contactObj.id} contact={contactObj} onDelecte={this.props.onDelete}/>
    })
    return (

      <ul>
        {contactItem}
      </ul>
    )
  }
}

export default ContactList
