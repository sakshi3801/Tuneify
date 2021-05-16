import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import am from '../../Images/am.webp'
import we from '../../Images/we.webp'
import wav from '../../Images/wav2.webp'
import my from '../../Images/my3.webp'
import flu from '../../Images/flu.webp'
import './Ambience.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'


const Ambience = ()=>{

    return(
        <div className='card'>
        <CardDeck>
        <Row className='cardRow' >
        <Col md={4} className='cardCol'>
            <Card className="focus mt-2 mb-2">
            
            <Link to='/am'><Card.Img variant="top" src={am} className='cardImg'/></Link>
            <Card.Body className='cardBody'>
                <Card.Title className="title text-center  card-title">Ambience</Card.Title>
            </Card.Body>
            </Card>
        </Col>

        <Col md={4} className='cardCol'>
            <Card className="focus mt-2 mb-2">
            <Link to='/we'><Card.Img variant="top" src={we} className='cardImg'/></Link>
            <Card.Body className='cardBody'>
                <Card.Title className="title text-center  card-title">Weather</Card.Title>
            </Card.Body>
            </Card>
        </Col>
        <Col md={4} className='cardCol'>
            <Card className="focus mt-2 mb-2">
            <Card.Img variant="top" src={wav} className='cardImg' />
            <Card.Body className='cardBody'>
                <Card.Title className="title text-center  card-title">Waves</Card.Title>
            </Card.Body>
            </Card>
        </Col>
        </Row>
        <Row className='cardRow'>
        <Col md={4} className='cardCol'>
            <Card className="focus mt-2 mb-2">
            
            <Link to='/my'><Card.Img variant="top" src={my} className='cardImg'/></Link>
            <Card.Body className='cardBody'>
                <Card.Title className="title text-center  card-title">Mythology</Card.Title>
            </Card.Body>
            </Card>
        </Col>
        <Col md={4} className='cardCol'>
            <Card className="focus mt-2 mb-2">
            <Link to='/flu'><Card.Img variant="top" src={flu} className='cardImg'/></Link>
            <Card.Body className='cardBody'>
                <Card.Title className="title text-center  card-title">Flute</Card.Title>
            </Card.Body>
            </Card>
        </Col>
        <Col md={4} className='cardCol'>
            <Card className="focus mt-2 mb-2">
            <Card.Img variant="top" src={wav} className='cardImg' />
            <Card.Body className='cardBody'>
                <Card.Title className="title text-center  card-title">Waves</Card.Title>
            </Card.Body>
            </Card>
        </Col>
        </Row>
        </CardDeck>
        </div>
    )
};

export default Ambience