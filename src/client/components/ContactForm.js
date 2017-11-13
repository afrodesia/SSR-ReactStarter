import React from 'react'

const ContactForm = () => {
 
  return(
    <div>
      <form>
        <div className="form-element">
          <label htmlFor="name">Name</label>
          <input name="name"  type="text" />
        </div>
        <div className="form-element">
          <label htmlFor="email">Email</label>
          <input name="email"  type="email" />
        </div>

        <textarea name="message">
       
        </textarea>

        <button>Submit</button>
       </form>
    </div>
  )
}

export default ContactForm