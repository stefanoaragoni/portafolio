import React, { useRef } from 'react'
import './contact.css'
import emailjs from 'emailjs-com'

function Contact() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_qp3yy0d', 'template_925ypwm', form.current, 'x3gFO8h54HeXg95vx')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })

        e.target.reset()
    }

    return (
        <section id="contact">
            <div className="contact">
                <h5>Lets Chat</h5>
                <h2>Contact Me</h2>

                <div className="c_contact">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="emal" placeholder="Email" required />
                        <textarea name="message" rows="7" placeholder="Message" required />
                        <button type="submit" className="boton boton-primary">Send</button>
                    </form>
                </div>
            </div>
        </section>

    )
}

export default Contact
