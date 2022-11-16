import React, { useRef } from 'react'
import { Form, Button, Card, Container } from "react-bootstrap"

export default function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()

  return (
    <>
        <Container className="d-flex align-times-center justify-content-center" style={{ minHeight: "100vh" }}>
            
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Card className='body'>    
                    <Card.Body>
                        <h2 className='text-second text-center mb-4'>Sign Up</h2>
                        <Form>
                            <Form.Group id="email">
                                <Form.Label className='text-second'>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required/>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label className='text-second'>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required/>
                            </Form.Group>
                            <Form.Group id="password-confirm">
                                <Form.Label className='text-second'>Password Confirmation</Form.Label>
                                <Form.Control type="password" ref={passwordConfirmationRef} required/>
                            </Form.Group>
                            <Button className="body text-second btn btn-sm btn-outline-success w-100 mt-4" type="submit">Sign Up</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className='w100 text-second text-center mt-2'>
                    Already have and account? Log In
                </div>
            </div>
        </Container>


    </>
  )
}
