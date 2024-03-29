import React from 'react'
import { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import deepfake from "../assets/img/facial-recognition-w.png";
import sms from "../assets/img/school-logo.png";
import airbnb from "../assets/img/airbnb.svg";
import heart from "../assets/img/heart.png";
import reviews from "../assets/img/reviews.png";
import ProjCard from './ProjCard';
import ProjCardBack from './ProjCardBack';
import ReactFlipCard from 'reactjs-flip-card'


export const Projects = () => {

    const [isFlipped, setIsFlipped] = useState(false);
    const handleMouseEnter = () => {
        setIsFlipped(true);
      };
     
      const handleMouseLeave = () => {
        setIsFlipped(false);
      };

  return (
    <section className='project' id='projects' >
        <Container>
            <Row>
                <Col>
                    <h2>
                        Projects
                    </h2>
                    <p>
                            These are some projects i worked on for enhancing and improving my skills as a developer and as an Artificial Intelligence engineer, keep in mind that i can't provide you with code to the first two projects due to university policy because they were my senior and junior projects.
                    </p>
                    <Container className='card-container'>
                        <Row xl={3}>
                        <Col>
                        <ReactFlipCard
                            frontComponent={
                            <ProjCard 
                                img= {deepfake}
                            />
                            }

                            backComponent={
                            <ProjCardBack 
                                title="DeepFake Detection"
                                about="Two AI powered models. First model is a neural network trained for detecting fake human faces made by AI,
                                and the second model is for detecting fake articles made by AI"
                                
                                />
                            }
                        />
                        </Col>
                        
                        <Col>
                        <ReactFlipCard
                            frontComponent={
                            <ProjCard 
                                img= {sms}
                            />
                            }

                            backComponent={
                            <ProjCardBack 
                                title="School-Management-System"
                                about="A tool that simplifies the management of a school. Enhances the learning experience of students, parents keeping track of their kids and improves efficiancy of adminstrators"
                                />
                            }
                        />
                        </Col>

                        <Col>
                        <ReactFlipCard
                            frontComponent={
                            <ProjCard 
                                img= {airbnb}
                            />
                            }

                            backComponent={
                            <ProjCardBack 
                                title="Airbnb"
                                about="Airbnb clone website showcasing some react basic conceptes and hooks "
                                />
                            }
                        />
                        </Col>

                        <Col className='all-cards'>
                        <ReactFlipCard
                            frontComponent={
                            <ProjCard 
                                img= {heart}
                            />
                            }

                            backComponent={
                            <ProjCardBack 
                                title="Heart Failure"
                                about="A machine learning model designed to predict if a person has a heart disease or no based on his info."
                                />
                            }
                        />
                        </Col>

                        <Col className='all-cards'>
                        <ReactFlipCard
                            frontComponent={
                            <ProjCard 
                                img= {reviews}
                            />
                            }

                            backComponent={
                            <ProjCardBack 
                                title="Arabic Company Reviews"
                                about="Understand and clarify if a review is a positive or negative review based on it's word meanings using NLP methods with a lot of data pre-processing."
                                />
                            }
                        />
                        </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

