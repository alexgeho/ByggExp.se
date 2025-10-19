import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import "./Login.css"; // можно использовать тот же стиль, что для Login

export default function Signup() {
    const [formData, setFormData]
        = useState({
        firstName: "",
        lastName: "",
        company: "",
        phone: "",
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:5050/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                console.log("✅ Registration successful:", data);
                alert("Registration successful!");
                // Очистим форму после успешной регистрации
                setFormData({
                    firstName: "",
                    lastName: "",
                    company: "",
                    phone: "",
                    email: "",
                    password: "",
                });
            } else {
                console.error("❌ Registration failed:", data);
                alert(data.error || "Registration failed. Please try again.");
            }
        } catch (error) {
            console.error("⚠️ Network error:", error);
            alert("Server is not responding. Please check your connection.");
        }
    };


    return (
        <div className="LoginPage d-flex align-items-center justify-content-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md={6} lg={5}>
                        <div className="LoginCard p-4 rounded">
                            <h2 className="mb-4 text-center text-white">Create your account</h2>

                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="formFirstName" className="mb-3">
                                            <Form.Control
                                                type="text"
                                                name="firstName"
                                                placeholder="First name"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formLastName" className="mb-3">
                                            <Form.Control
                                                type="text"
                                                name="lastName"
                                                placeholder="Last name"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group controlId="formCompany" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="company"
                                        placeholder="Company"
                                        value={formData.company}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formPhone" className="mb-3">
                                    <Form.Control
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formEmail" className="mb-3">
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Email*"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formPassword" className="mb-4">
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        placeholder="Password*"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Button type="submit" variant="primary" className="w-100">
                                    Sign up
                                </Button>

                                <p className="text-center text-secondary mt-3">
                                    Already have an account? <a href="/Login/Login">Login</a>
                                </p>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
