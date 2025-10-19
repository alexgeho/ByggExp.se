import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./Contacts.css";
import { TitleBadge } from "../../widgets/TitleBadge/TitleBadge";

export default function Contacts() {
    const [form, setForm] = useState({ email: "", phone: "", message: "", agree: false });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: отправка в твой бекенд / почту
        console.log("Contact form:", form);
        alert("Thanks! We’ll get back to you shortly.");
        setForm({ email: "", phone: "", message: "", agree: false });
    };

    return (
        <>
            <section className="ContactsHero HemPageDark">
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col lg={8}>
                            <TitleBadge text={'Let’s connect'}/>
                            <h1 className="ContactsTitle">Contact us</h1>
                            <p className="ContactsSubtitle">Get rid of chaos in reports and boring paperwork</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="ContactsBody">
                <Container>
                    <Row className="g-4 ContactsBodyBox">
                        <Col md={5} className="ContactsBodyCol">
                            <Card className="ContactCard ContactCard--blue p-4">
                                <div className="SectionContactsBadge small mb-3">Get in touch</div>
                                <h4 className="mb-2 text-white">Contact us via the details below</h4>
                                <p className="text-card-muted mb-4">Our managers are answering 24/7</p>

                                <ul className="ContactList">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                    </svg>
                                    <li>hello@bygghub.com</li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                    </svg>
                                    <li>Sundbyberg, Stockholm, Sweden</li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                                    </svg>
                                    <li>+46 (0) 723 456 888</li>
                                </ul>
                            </Card>
                        </Col>

                        <Col md={7} className="ContactsBodyCol">
                            <Card className="ContactCard p-4">
                                <h5 className="mb-3">Or fill out the form and we’ll contact you immediately</h5>

                                <Form onSubmit={handleSubmit}>
                                    <Row className="g-3">
                                        <Col sm={6}>
                                            <Form.Control
                                                type="email"
                                                placeholder="Email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Col>
                                        <Col sm={6}>
                                            <Form.Control
                                                type="tel"
                                                placeholder="Phone"
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                            />
                                        </Col>
                                        <Col xs={12}>
                                            <Form.Control
                                                as="textarea"
                                                rows={4}
                                                placeholder="Message"
                                                name="message"
                                                value={form.message}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Col>
                                        <Col xs={12}>
                                            <Form.Check
                                                type="checkbox"
                                                id="agree"
                                                name="agree"
                                                label={<>I accept the <a href="/legal/privacy">Privacy Policy</a></>}
                                                checked={form.agree}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Col>
                                        <Col xs={12}>
                                            <Button type="submit" variant="primary">Send message</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* MAP */}
            <section className="ContactsMapSection pb-5">
                <Container>
                    <div className="MapWrapper">
                        <iframe
                            title="ByggHub office map"
                            src="https://www.google.com/maps?q=Sundbyberg,Sweden&output=embed"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </Container>
            </section>
        </>
    );
}
