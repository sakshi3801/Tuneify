import React from 'react'
import './About.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import img from '../../Images/img1.webp'

const About = ()=>{

    return(
        <div className='about'>
        <Container>
            <Row className="pt-3 pb-5 align-items-center">
                <Col xs={12} md={6}>
                    <Row className="justify-content-center mb-2 mr-2 ">
                    <Image className="img justify-content-end" alt="profile" src={img} />
                    </Row>
                </Col>
                <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                <p>Tuneify is a background noise generator designed to help you relax, focus, and tune out unpleasant sounds from your environment.
                <br />Background noise can be distracting, or it can be calming, it all depends on the type of sound. The gentle patter of rain against the window or the chirping of birds are sounds that many people find relaxing.
                While other types of noise like the hammering from the building site across the street, the stomping of the neighbors can be distracting and irritating.
                <br /><br />Tuneify helps you ignore bothersome noise by playing custom ambient sounds to suit your environment.
                </p>
              </Row>
            </Col>
            </Row>

        </Container>
        </div>
    )
};

export default About; 