import React, { useRef } from 'react'
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from '@emailjs/browser';

function Contact() {

  const [formData, setFormData] = useState(
    {
      user_name:"",
      user_email: "",
      message: ""
    }
  );
  const form = useRef();

      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ojq1yus', 'template_fabrau3', form.current, 'tGsabjETAhCNlgMcP')
          .then((result) => {
              console.log(result.text);
              console.log("Message sent")
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
            <Col size={12} md={6}>
                <img src={contactImg} alt="Contact Us"/>
            </Col>
            <Col>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="Name" name='user_name' />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" placeholder="Email Address" name='user_email'/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" placeholder="Message" name='message'></textarea>
                      <button type='submit' value="Send" className='form_button'>Send</button>
                    </Col>
                    
                  </Row>
                </form>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
