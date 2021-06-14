import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Service = () => {
  const services = [
    { title : "CAFÉ EN GRANO", desc : "café mexicano de calidad 100% arábiga y seleccionado cuidadosamente de las mejores plantaciones en las distintas zonas cafetaleras del país. Es procesado bajo altos estándares para cumplir con el cuerpo acidez, aroma y sabor de una gran taza de café." },
    { title : "CAFÉ MOLIDO REGIÓN VERACRUZ", desc : "Esta selección que proviene de la zona montañosa de Veracruz se caracteriza por presentar una taza con aroma penetrante, que destaca por su pureza. Su cuerpo es amable y suave con una acidez balanceada y un sabor fuerte que no es amargo." },
    { title : "CAFÉ MOLIDO REGIÓN CHIAPAS", desc : "Esta selección que proviene de la zona sur del país se caracteriza por presentar una taza con un aroma notorio y fresco que nos brinda una fragancia fina agradable y penetrante su cuerpo se distingue por estar en un rango de medio a completo sin caer en la exageración, presentando una acidez agradable, brillante y con un balance perfecto." },
    { title : "CAFÉ MOLIDO REGIÓN OAXACA", desc : "Esta selección que proviene de este gran estado mexicano se caracteriza por presentar una taza con un aroma pronunciado donde destacan notas únicas de la región. De buen cuerpo y con acidez agradable." },
    { title : "EXTRAKTO PREMIUM", desc : "Disfruta toda la riqueza de un café arábiga 100% mexicano, también en la práctica modalidad de café liofilizado, proceso que mantiene los componentes de aroma, sabor y acidez de nuestro café con la practicidad de un soluble." },
    { title : "CAFÉ SOLUBLE LIOFILIZADO VAINILLA", desc : "Disfruta toda la riqueza de un café arábiga 100% mexicano, también en la práctica modalidad de café liofilizado sabor Vainilla, proceso que mantiene los componentes de aroma, sabor y acidez de nuestro café con la practicidad de un soluble." },
  ]
  
  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Productos</span></h3>
              <p className="text-muted">UNA EMPRESA 100% MEXICANA fundada hace màs de 50 años y estamos enfocados en el desarrollo de toda la industria alrededor del café. Con más de 50 productos en el mercado.</p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            services.map((service, key) =>
              <Col key={key} lg={4} md={6}>
                <div>
                  <div className="mb-5">
                      <i className={service.icon}></i>
                  </div>
                  <h5 className="text-dark font-weight-normal pt-1 mb-4">{service.title}</h5>
                  <p className="text-muted mb-4">{service.desc}</p>
                </div>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  );
}
export default Service;