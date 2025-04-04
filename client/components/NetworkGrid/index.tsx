"use client";
import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import axios from "axios";

const NetworkGrid = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getContacts = async () => {
      axios
        .get("http://localhost:5003/api/contacts")
        .then(function (response) {
          // handle success
          console.log("RESPONSE", response);
          setContacts(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          throw new Error("Issue fetching contacts");
        })
        .finally(function () {
          // always executed
        });
    };
    getContacts();
  }, []);

  return (
    <div className="text-black dark:text-white py-4 px-6 grid-cols-3 grid gap-2 w-full">
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default NetworkGrid;
