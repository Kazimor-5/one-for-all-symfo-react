// ! FILES
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaRegTrashAlt, FaRegCheckSquare } from 'react-icons/fa';

const url = 'http://localhost:8000/api/contacts/';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState();

  const showContactList = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      const data = response.data['hydra:member'];
      setContacts(data);
      setIsChecked(data[0].view);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      console.log(error.response);
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${url}${id}`);

      const newContacts = contacts.filter((contact) => contact.id !== id);
      setContacts(newContacts);
    } catch (error) {
      console.log(error);
      console.log(error.resposne);
    }
  };

  const handleCheck = async (id) => {
    try {
      const options = {
        headers: { 'Content-Type': 'application/merge-patch+json' },
      };
      setIsChecked(!isChecked);
      await axios.patch(`${url}${id}`, { view: !isChecked }, options);
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  };

  useEffect(() => {
    showContactList();
  }, []);

  if (isLoading) {
    return (
      <section className='loader'>
        <article className='loading'></article>
      </section>
    );
  }

  return (
    <section className='section-contactList'>
      <h1 className='title' id='contact-title'>
        Liste des messages
      </h1>
      {contacts.length >= 1 ? (
        contacts.map((contact) => {
          const { id, name, firstname, objet, message } = contact;

          return (
            <article
              key={id}
              className={isChecked ? 'contact striped' : 'contact'}
            >
              <p>
                Nom/Prénom: {name} {firstname}
              </p>
              <p>Objet: {objet}</p>
              <p>Message: {message}</p>
              <div className='btn-container'>
                <button
                  className={
                    isChecked ? 'btn btn-check-green' : 'btn btn-check'
                  }
                  onClick={() => handleCheck(id)}
                >
                  <FaRegCheckSquare />
                </button>
                <button
                  className='btn btn-trash'
                  onClick={() => handleDelete(id)}
                >
                  <FaRegTrashAlt />
                </button>
              </div>
            </article>
          );
        })
      ) : (
        <h3 className='title' id='no-message'>
          Il n'y a pas de messages
        </h3>
      )}
    </section>
  );
};

export default ContactList;