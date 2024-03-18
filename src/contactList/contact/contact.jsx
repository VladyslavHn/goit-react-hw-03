

const Contact = ({contacts}) => {
  return (
    <div>
          {contacts.map((contact) => {
            <div key={contact.id}>
                <p>{contact.name}</p>
                <p>{contact.number}</p>
                <button type="button">Delete</button>
            </div>
      })}
    </div>
  )
}

export default Contact
