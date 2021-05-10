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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </Row>
            </Col>
            </Row>

        </Container>
        </div>
    )
};

export default About; 