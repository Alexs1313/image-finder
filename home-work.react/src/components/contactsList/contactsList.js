import React from "react";
import { List, Button } from "./contactsList.styled";

function Contacts({ contactsData, onDelete }) {
  return (
    <ul>
      {contactsData.map(({ name, number, id }) => (
        <List key={name}>
          {name} : {number}
          <Button onClick={() => onDelete(id)}>delete</Button>
        </List>
      ))}
    </ul>
  );
}

export default Contacts;
