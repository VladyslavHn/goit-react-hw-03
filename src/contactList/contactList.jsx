import Contact from "./contact/contact"

const ContactList = ({contacts}) => {
  return (
    <div>
          <Contact contacts={contacts} />
    </div>
  )
}

export default ContactList
