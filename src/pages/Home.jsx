import React from 'react'
import '../styles/home.css'
import { Container,Row,Col } from 'reactstrap'
import worldImg from '../assets/images/world.png'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import experienceImg from '../assets/images/experience.png'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'

const Home = () => {
  return (
    <>
    <Container>
      <Row>
        <Col  lg="6">
        <div className="hero__content">
          <div className="hero__subtitle d-flex align-items-center">
            <Subtitle subtitle={'Rovel'}/>
            <a href="#" class="button">Start Exploring the World!</a>
            <img src={worldImg} alt="" />
          </div>
          <h1>Travel far enough to meet <span className="highlight">
            yourself</span></h1>
            <p>Traveling the world can be an enriching experience that helps you understand the world and the people in it. It can also help you develop confidence, independence, and problem-solving skills.</p>
        </div>
        </Col>
        <Col lg="2">
        <div className="hero__img-box">
          <img src={heroImg} alt="Hero__img-box" className="slide-in"/>
        </div>
        </Col>
        <Col lg="2">
        <div className="hero__img-box mt-4">
          <video src={heroVideo} alt="Hero Video" controls classNAme="slide-in-delay"/>
        </div>
        </Col>
        <Col lg="2">
        <div className="hero__img-box mt-5">
          <img src={heroImg02} alt="Hero Image 2" className="slide-in" />
        </div>
        </Col>
        <SearchBar/>
      </Row>
    </Container>
    <section>
      <Container>
        <Row>
          <Col lg="3">
          <h5 className="services__subtitle">What we tend to</h5>
          <h2 className='services__title'>We offer our best services</h2>
          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>
  

    <section>
      <Container>
        <Row>
          <Col lg ='12' className="mb-5">
          <Subtitle subtitle={'Roam'}/>
          <h2 className="featured__tour-title"></h2>
          <a href="#" class="button">Our featured Excursions</a>
          </Col>
          <FeaturedTourList/>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='6'>
          <div className="experience__countent">
          <Subtitle subtitle={''}/> 
          <a href="#" class="button">Experience</a>
        <h2 >With our all experience <br/> we will serve you </h2>
        <p>A tour is a journey that involves traveling to multiple places, often with a group and a guide. 

          <br />
         </p>
           <div className="counter__wrapper d-flex align-items-center gap-5">
            <div className="counter__box">
              <span>12K+</span>
              <h6>Accomplished Tour</h6>
              
            </div>
            <div className="counter__box">
              <span>2K+</span>
              <h6>Regular clients</h6>
            </div>
            <div className="counter__box">
              <span>15</span>
              <h6>Years experience</h6>
            </div>
           </div>
          </div>
          </Col>
          
          <Col lg='6'>
        <div className="experience__img">
          <img src={experienceImg} alt="" />
        </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='12'>
          <Subtitle subtitle={""}/>
          <a href="#" class="button">GALLERY</a>
          
          <h2 className="gallery__title">Visit our customers tour gallery</h2>
          </Col>
          <Col lg='12'>
          <MasonryImagesGallery/>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12'>
          <Subtitle subtitle={''}/>
          <a href="#" class="button">FAN LOVE</a>
          <h2 className="testimonial__title">What our clients say about us</h2>
          </Col>
          <Col lg="12">
          <Testimonials/>
          </Col>
        </Row>
      </Container>
    </section>
    
    <Newsletter/>
    
    </>
 
  )

}


export default Home

