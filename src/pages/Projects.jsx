import React from 'react'
import { Container, Badge, Card, Row, Col } from 'react-bootstrap'

const Projects = () => {
  return (
    <div className='projects'>
      <Container>
        <h4 className='text-center mb-4'>My Projects</h4>
        <Row>
          <Col md="4">
            <Card>
              <Card.Img variant="top" src="/img/pekat.png" />
              <Card.Body>
                <Card.Title>PeKat</Card.Title>
                <Card.Text>
                  This is a public complaints website regarding road equipment facilities on the National Road in the BPTD Banten Region
                </Card.Text>
                <div className="info mb-1">
                    <Badge bg="primary me-1">CodeIgniter</Badge>
                    <Badge bg="primary me-1">Bootstrap</Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <Card.Img variant="top" src="/img/kelurahan.png" />
              <Card.Body>
                <Card.Title>Tamanbaru Web</Card.Title>
                <Card.Text>
                  This is the official website of Tamanbaru Banyuwangi Village. Includes company profile, information services, to MSME location.
                </Card.Text>
                <div className="info mb-1">
                  <Badge bg="primary me-1">PHP Native</Badge>
                  <Badge bg="primary me-1">Bootstrap</Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <Card.Img variant="top" src="/img/dtks.png" />
              <Card.Body>
                <Card.Title>SIM DTKS</Card.Title>
                <Card.Text>
                  This is a web-based application for processing existing Integrated Social Welfare Data in the Tamanbaru Banyuwangi sub-district environment.
                </Card.Text>
                <div className="info mb-1">
                  <Badge bg="primary me-1">PHP Native</Badge>
                  <Badge bg="primary me-1">Bootstrap</Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <Card.Img variant="top" src="/img/rentcar.png" />
              <Card.Body>
                <Card.Title>Rent Car</Card.Title>
                <Card.Text>
                  This is just a simple website for rent a car, simply show the owner's car and order it by phone.
                </Card.Text>
                <div className="info mb-1">
                  <Badge bg="primary me-1">CodeIgniter</Badge>
                  <Badge bg="primary me-1">Bootstrap</Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Projects