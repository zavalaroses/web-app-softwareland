import React from 'react';
import Image from "next/image";
import { Container, Row, Col } from 'reactstrap';
const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">Cafè las Tarascas</p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">El mejor cafè y con historia en <span className="text-primary font-weight-medium">Morelia</span></h1>
              <p className="text-muted mb-4 pb-2">Cafè las tarascas a estado en la industria del cafè desde 1970, siempre ofreciendo el mejor grano, pioneros en la industria del cafè en Mèxico y reconocido a nivel latinoamerica </p>
              <a href="#" className="btn btn-warning">
                Ver màs <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <Image src="/cafe1.png" width="1000" height="650" alt="Members" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;
