import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Parallax, Background } from 'react-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../src/app/components/Header.js";
import 'react-toastify/dist/ReactToastify.min.css';
//import { generateToken } from "C:/Users/Camilla/Desktop/MERN/Projects/Vehicle Dealers PWA/src/firebaseNotification/firebase.js";
//import { getMessaging, onMessage } from 'firebase/messaging';
//import firebaseApp from 'C:/Users/Camilla/Desktop/MERN/Projects/Vehicle Dealers PWA/src/firebaseNotification/firebase.js';
import useFcmToken from "../utils/hooks/useFcmToken.js";






const styles = {
  fontFamily: "sans-serif",
  textAlign: "left",
  justifyContent: "center"
};

const insideStyles1 = {
  background: `linear-gradient(to bottom, #cc0000, #9d2f2f)`,
  width: "100%",
  height: "100%",
  padding: 20,
  paddingRight: 20,
  position: "right",
  top: "50%",
  left: "50%",
  transform: "translate(50%,0%)"

};



const image1 =
  "/static/guheader.png";
const image2 =
  "/static/forextrading1.jpg";
const image3 =
  "/static/gugodlove.jpg";
const image4 =
  "/static/forexanalysis.png";
const image5 =
  "/static/gugodlove2.jpg";
const logo =
  "/static/GU_logo.png";

    const Main = ({props}) => {

      const { fcmToken, notificationPermissionStatus } = useFcmToken();

        // Log token and permissions when they change
  useEffect(() => {
    console.log('FCM Token:', fcmToken);
    console.log('Notification Permission Status:', notificationPermissionStatus);
  }, [fcmToken, notificationPermissionStatus]);

  // Use fcmToken and notificationPermissionStatus as needed


    const canonicalUrl = `https://thecsrnexus.com`;

    
    useEffect(() => {
      document.title = 'Property Management Library';
    }, []);

 
    
  
  return (
  <div style={styles}>
    <Header />
    <Head>
        {/* Add the canonical link tag to the <head> section */}
        <link rel="canonical" href={canonicalUrl} />
      </Head>
    <Parallax bgImage={image1}
      strength={50}>
      <div className="col-md-6 align-self-center text-left" style={{ height: 600, marginLeft: "30px" }}>

        <Container style={{ paddingTop: "200px" }}>


          <div className='flex-wrap' style={{ backgroundColor: "red", borderColor: "red", color: "white", alignContent: "space-between", padding: "30px", opacity: 0.75 }}>
            <h1>FOREX EDUCATION & TRADING BOT EXPERTS</h1>
           Godlove University is a premier forex education and trading specialist, offering expert mentorship, professional training, and advanced trading bots to help traders succeed.</div>

          <div>
            <Button style={{ backgroundColor: "darkblue", borderColor: "darkblue", marginTop: 20 }} href="./Listings" >VISIT ONLINE STORE</Button>{' '}
          
          </div>

        </Container>
      </div>
    </Parallax>


    <Parallax bgImage={image2} strength={200}>
      <div style={{ height: '75%', width: '100%', zIndex: 1, display: 'grid' }}>

        <div style={insideStyles1}>

          <Row className="flex-wrap">
            <Col xs={6} sm={6} md={6} className="flex-wrap">
              <h2 style={{ color: "white" }}>ONLY THE BEST FOR OUR DISCERNING CLIENTS</h2>
             <p className="text-white">
You will discover unmatched excellence in forex education at Godlove University. Trust us for a structured and reliable learning journey, from beginner foundations to advanced trading mastery.
</p>

<p className="text-white">
We specialize in delivering high-quality trading education, professional mentorship, and proven trading systems designed for consistency, discipline, and long-term success.
</p>

<p className="text-white">
Our commitment to excellence ensures our strategies and trading bots are not only managed but optimized for performance, helping traders achieve sustainable results.
</p>

<p className="text-white">
Your success is our priority. At Godlove University, we pride ourselves on delivering a superior trading education experience built on years of market expertise and innovation.
</p>

<p className="text-white">
Trust us to provide an experience that prioritizes clarity, confidence, and peace of mind. It’s not just about trading forex — it’s about building a system you can trust.
</p>
            </Col>
            <Col xs={6} sm={6} md={6}>
              {/* Add any additional content or images here */}
            </Col>
          </Row>


        </div>
      </div>
    </Parallax>



    <Parallax strength={200} xs={12} sm={6} md={4}>
      <Background className="custom-bg">
        <div
          style={{
            height: 2000,
            width: 2000,
            backgroundColor: "black",
          }}
        />
      </Background>
      <div className="text-center">
        <br />

        <h3 style={{ color: "blue" }}>WHY CHOOSE GODLOVE UNIVERSITY?</h3>
        <br />
        <Container style={{ color: "white" }}>Our goal is to create an environment where every trader reflects on their journey with confidence and measurable growth. We go beyond theory to deliver real-world application.
</Container>
        <br />
        <br />

      </div>
    </Parallax>

    <Parallax
      bgImage={image3}
      strength={200}
      renderLayer={(percentage) => (
        <div id="parallelogram" >
          <div

            style={{
              position: "absolute",
              background: `linear-gradient(to bottom, #cc0000, #9d2f2f)`,
              left: `${percentage * 25}%`,
              bottom: `${percentage * 15}%`,
              transform: `skewY(-5deg)`,
              width: '50%',
              height: '75%',
              opacity: 0.75,
              display: 'grid',
              flexDirection: "column",
              justifyContent: "center", // Vertically center content
              alignItems: "center", // Horizontally center content
            }}
          >
            <div style={{ transform: `skewY(5deg)`, height: '80%', marginLeft: "10px", paddingRight: "10px", marginTop: "30px", marginBottom: '30px', paddingBottom: '10px', display: 'grid' }}>
              <br></br>
              <div >
                <h2 style={{ color: "white" }}>WE VALUE YOUR PEACE OF MIND</h2>
                <p style={{ color: "white" }}>From structured learning paths and live mentorship to automated trading bots and risk management tools, Godlove University equips traders to make informed decisions.
</p>
              </div>



            </div>
          </div>
        </div>
      )}
    >
      <div style={{ height: 750 }}>

      </div>
    </Parallax>



    <Parallax bgImage={image4} strength={200}>
      <div style={{ height: '100%', width: '100%', zIndex: 1, display: 'grid' }}>
        <div style={insideStyles1}>

          <Row className="flex-wrap">
            <Col xs={6} sm={6} md={6} className="flex-wrap">
            <h2 style={{ color: "white" }}>ENHANCING THE TRADING EXPERIENCE</h2>

<p className="text-white">
Our goal is to create an environment where every trader reflects on their journey with confidence and measurable growth. To achieve this, we go beyond basic education by delivering structured learning and real-world application.
</p>

<p className="text-white">
From clear, step-by-step training programs and live mentorship to automated trading tools, Godlove University ensures traders can make informed and confident decisions at every stage.
</p>

<p className="text-white">
We understand that the right environment, guidance, and tools can shape a trader’s success. Join Godlove University for an experience that goes beyond learning forex — it’s about building confidence, consistency, and long-term trading discipline.
</p>

            </Col>
            <Col xs={6} sm={6} md={6}>
              {/* Add any additional content or images here */}
            </Col>
          </Row>


        </div>
      </div>
    </Parallax>

    <Parallax strength={500}>
      <Background className="custom-bg">
        <div
          style={{
            height: 2000,
            width: 2000,
            backgroundColor: "black",
          }}
        />
      </Background>
      <div className="text-center">
        <br />

        <h3 style={{ color: "blue" }}>REVIEWS</h3>
        <br />
        <p style={{ color: "white" }}>“Godlove University exceeded my expectations. The mentorship, trading systems, and automation tools gave me confidence and consistency in the markets. Truly a complete trading solution.” – John Smith
</p>
        <br />
        <br />

      </div>
    </Parallax>

    <Parallax
      bgImage={image5}
      strength={50}
      renderLayer={(percentage) => (
        <div id="parallelogram" >
          <div

            style={{
              position: "absolute",
              background: `linear-gradient(to bottom, #cc0000, #9d2f2f)`,
              left: `${percentage * 25}%`,
              bottom: `${percentage * 15}%`,
              transform: `skewY(-5deg)`,
              width: '50%',
              height: '75%',
              opacity: 0.75,
              display: 'grid',
              flexDirection: "column",
              justifyContent: "center", // Vertically center content
              alignItems: "center", // Horizontally center content
            }}
          >
            <div style={{ transform: `skewY(5deg)`, height: '80%', marginLeft: "10px", paddingRight: "10px", marginTop: "30px", marginBottom: '30px', paddingBottom: '10px', display: 'grid' }}>
              <br></br>
             <div>
  <h2 style={{ color: "white" }}>FROM YOUR FIRST TRADE TO CONSISTENCY</h2>
  <p style={{ color: "white" }}>
  From your first trade to long-term profitability, Godlove University ensures a structured, transparent, and supportive trading journey.
  </p>
</div>



            </div>
          </div>
        </div>
      )}
    >
      <div style={{ height: 750 }}>

      </div>
    </Parallax>



    <Container fluid style={{ height: 'auto', color: "white", backgroundColor: "red", paddingTop: 50, paddingLeft: 100, paddingRight: 100 }}>
      <Row className="justify-content-center text-center">
        <Col xs={12} sm={6} md={4}>
          <img
            alt=""
            src={logo}
            width="200"
            height="200"
            className="d-inline-block align-center"
          />
        </Col>
        <Col xs={12} sm={6} md={4} className="d-inline-block align-center">
          <h5>CONTACT US</h5>
          <p>100 Main Rd, Randburg, 2000</p>
          <p>+27 82 000 0000</p>
        </Col>
        <Col xs={12} sm={6} md={4} className="d-inline-block align-center">
          <h5>LINKS</h5>
          <p>Privacy Policy</p>
          <p>Accessibility Policy</p>
        </Col>
      </Row>
    </Container>



  </div>


);

          }

export default Main;