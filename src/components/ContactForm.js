import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    productId: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again.');
    }
  };

  return (
    <Container>
      <Row>
        <Col md={6} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formProductId">
              <Form.Label>Product ID</Form.Label>
              <Form.Control
                type="text"
                name="productId"
                value={formData.productId}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <div style={{width: "100%", display:"flex",margin:"20px",alignItems: "Center"}}>
              <Button variant="primary" type="submit">
              Submit
            </Button></div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;