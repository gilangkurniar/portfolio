import React from 'react'
import { Container } from 'react-bootstrap'

const FooterComponent = () => {
    return (
        <div className='footer mb-4 mt-4'>
            <Container>
                <hr />
                <div className="copyright text-center">
                    &copy; Copyright <strong><span>2023</span></strong>. All Rights Reserved
                </div>
            </Container>
        </div>
    )
}

export default FooterComponent