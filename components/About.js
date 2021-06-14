import React from 'react';
import { Container, Row, Col } from "reactstrap";
const About = () => {
return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">Acerca de <span className="text-warning">Nosotros</span></h3>
              <p className="text-muted">Cafè las tarascas a estado en la industria del cafè desde 1970, siempre ofreciendo el mejor grano.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">Cafè las tarascas a estado en la industria del cafè desde 1970, siempre ofreciendo el mejor grano.</h2>
          </Col>
          <Col md={{ size:7, offset :1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Misiòn</h6>
                <p className="text-muted font-weight-light">La calidad en el café es nuestra única misión, desde la selección de granos, las condiciones de almacenamiento y tueste, hasta la selección del empaque donde entregamos a los clientes calidad, aroma y frescura del café. </p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Visiòn</h6>
                <p className="text-muted font-weight-light">La pasión por la innovación es nuestra guía para desarrollar la variedad de productos que nos caracterizan.
A través de la tecnología, las materias primas y el personal altamente calificado, desarrollamos productos que nos hacen sentir orgullosos de lo bien Hecho en México.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default About;