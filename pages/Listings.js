import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Parallax, Background } from 'react-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Header from "../src/app/components/Header.js";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "left",
  justifyContent: "center"
};

const insideStyles1 = {
  background: `linear-gradient(to bottom, #FF0000, #a70000)`,
  width: "100%",
  height: "100%",
  padding: 20,
  position: "right",
  top: "50%",
  left: "50%",
  transform: "translate(50%,0%)"
};

const image1 = "/static/guclass.jpg";
const image2 = "/static/guwelcome.jpg";
const image4 = "/static/forexanalysis.png";
const image5 = "/static/patrexpro.png";
const image6 = "/static/godloveuniversity.jpg";
const image7 = "/static/gugodlove4.png";

const logo = "/static/GU_logo.png";

const Listings = (props) => {

  const canonicalUrl = `https://thecsrnexus.com/Listings`;


  useEffect(() => {
    document.title = 'Property Listings';
  }, []);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = image1;
    imageLoader.onload = () => {
      // When the first image is loaded, set the imagesLoaded to true.
      setImagesLoaded(true);
    };
  }, []);

  return (
    <div style={styles}>
      <Header />
      <Head>
        {/* Add the canonical link tag to the <head> section */}
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Parallax bgImage={image1} strength={50}>
        <div className="col-md-6 align-self-center text-left" style={{ height: '600px', marginLeft: "30px" }}>
          <Container style={{ paddingTop: "200px" }}>
            <div className='flex-wrap' style={{ backgroundColor: "red", borderColor: "red", color: "white", alignContent: "space-between", padding: "30px", opacity: 0.75 }}>
              <h1>OUR EXCLUSIVE TRADING ECOSYSTEM</h1>
              Explore our comprehensive trading ecosystem featuring structured forex education, live mentorship, and automated trading bots.
  Tailored for traders at every level, our systems are designed for flexibility, scalability, and real-world market conditions.
  Rest assured, every strategy and tool is rigorously tested and refined to ensure reliability, discipline, and long-term performance.
</div>
            <div>
              <Button style={{ backgroundColor: "darkblue", borderColor: "darkblue", marginTop: 20 }} href="/ContactPage">SPEAK TO AN SALESMAN</Button>
            </div>
          </Container>
        </div>
      </Parallax>


      <Parallax bgImage={image2} strength={-100}>
      <div style={{ height: '100%', width: '100%', zIndex: 1, display: 'grid' }}>
        <div style={insideStyles1}>

          <Row className="flex-wrap">
            <Col xs={6} sm={6} md={6} className="flex-wrap">
                <h2 style={{ color: "white" }}>WELCOME TO THE FAMILY</h2>
                <p
    className='flex-wrap'
    style={{ color: "white", alignContent: "top", marginTop: "0px" }}
  >
    We pride ourselves on a dedicated team of professional mentors who guide you through every stage of your trading journey. From foundational learning to live market execution, we support you every step of the way.
  </p>
  <p className="text-white">
    As a valued trader, gain access to our exclusive Trader Dashboard, including performance tracking, bot controls, market updates, and ongoing educational resources to support your growth.
  </p>
  <p className="text-white">
    We provide the tools, structure, and support needed to make your trading journey efficient and rewarding. Reach out today and take the next step toward confident, disciplined trading.
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
              backgroundColor: "white",
            }}
          />
        </Background>
       <div className="text-center" style={{ color: "blue", backgroundColor: "black" }}>
  <br />
  <h3 style={{ color: "blue", backgroundColor: "black" }}>EXECUTIVE TRADING SUITE</h3>
  <br />
  <p
    style={{
      color: "white",
      backgroundColor: "black",
      marginLeft: 10,
      marginRight: 10
    }}
  >
    Godlove University sets the standard for premium forex education and trading solutions. Built on years of market experience, we stand as a trusted authority in professional trading mentorship and automation. We don’t just teach trading — we build systems that empower consistency, confidence, and control.
  </p>
  <br />
  <br />
</div>

      </Parallax>

      {/* The Listing Grid */}
      {imagesLoaded && (
        <Row className="g-4">
          <Col>
            <Card>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'white', backgroundColor: 'red' }}>
                <Card.Img variant="top" src={image5} style={{ width: '200px', height: '200px' }} />
              </div>
              <Card.Body style={{ color: 'white', backgroundColor: 'red' }}>
                <Card.Title>PATREX PRO</Card.Title>
                <Card.Text>
                 FROM $199/MONTH
                </Card.Text>
                <Button href="/ContactPage" style={{ backgroundColor: "green", borderColor: "green" }}>Enquire</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'white', backgroundColor: 'red' }}>
                <Card.Img variant="top" src={image6} style={{ width: '200px', height: '200px' }} />
              </div>
              <Card.Body style={{ color: 'white', backgroundColor: 'red' }}>
                <Card.Title>A - Z FOREX COURSE</Card.Title>
                <Card.Text>
                 FROM $125/MONTH
                </Card.Text>
                <Button href="/ContactPage" style={{ backgroundColor: "green", borderColor: "green" }}>Enquire</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'white', backgroundColor: 'red' }}>
                <Card.Img variant="top" src={image7} style={{ width: '200px', height: '200px' }} />
              </div>
              <Card.Body style={{ color: 'white', backgroundColor: 'red' }}>
                <Card.Title>ONE-ON-ONE MENTORSHIP</Card.Title>
                <Card.Text>
                $999 ONCE OFF - PLUS MANY EXTRAS
                </Card.Text>
                <Button href="/ContactPage" style={{ backgroundColor: "green", borderColor: "green"}}>Enquire</Button>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      )}

      <br></br>
      <Row className="g-4">
       
       
       
       
      </Row>
      <br></br>

      <Parallax
        bgImage={image4}
        strength={200}
        renderLayer={(percentage) => (
          <div id="parallelogram" >
            <div
              style={{
                position: "absolute",
                background: `linear-gradient(to bottom, #FF0000, #a70000)`,
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
                  <h2 style={{ color: "white" }}>START YOUR TRADING JOURNEY TODAY</h2>
                  <p style={{ color: "white" }}>    Our professional mentors are ready to guide you through onboarding, education, and system setup. Begin your journey with clarity, structure, and expert support from day one.
</p>
                </div>
              </div>
            </div>
          </div>
        )}
      >
        <div style={{ height: 750 }}></div>
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
          <Col xs={12} sm={6} md={4}>
            <h5>CONTACT US</h5>
            <p>100 Main Rd, Johannesburg, 2000</p>
            <p>+27 82 000 0000</p>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <h5>LINKS</h5>
            <p>Privacy Policy</p>
            <p>Accessibility Policy</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Listings;
