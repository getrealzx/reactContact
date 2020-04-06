import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddContact from "./AddContact";
import ContactList from "./ContactList";

class contacts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contacts: []
        }
    }

    componentWillMount() {
        this.setState({
            contacts: [
                {
                    id: uuidv4(),
                    name: "Richard",
                    contactMethod: " 555-555-5555"
                },
                {
                    id: uuidv4(),
                    name: "Alex",
                    contactMethod: " alex@amail.com"
                },
                {
                    id: uuidv4(),
                    name: "Daniel ",
                    contactMethod: " 5555 Awesome city drive"
                }
            ]
        })
    }

    handleAddContact = (newContact) => {
        let oldContacts = [...this.state.contacts];
        oldContacts.push(newContact);
        console.log("state after push: ", this.state.contacts);


        this.setState({
            contacts: oldContacts
        }
            , () => { console.log(this.state.contacts) }
        )
    }


    handleDeleteContact = (id) => {
        let oldContacts = [...this.state.contacts];

        let index = oldContacts.findIndex((cObj) => {
            return cObj === id
        })

        oldContacts.splice(index,1);

        this.setState({
            contacts: oldContacts
        })
    }




    render() {
        return (
            <>
                <AddContact addContact={(contact) => { this.handleAddContact(contact) }} />

                <div>Contacts List</div>

                <ContactList contacts = {this.state.projects} onDelete = {(id)=>{this.handleDeleteContact(id)}} />
                



            </>
        )
    }
}

export default contacts
