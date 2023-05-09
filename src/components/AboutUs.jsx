import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(247, 249, 217, 0.8), rgba(247, 249, 217, 0.8)),
    url(/background-image.png) no-repeat;
    background-size: cover;
    font-family: 'Raleway', sans-serif;
  //background-color:  #ece3da ;
  transition: background-color 0.3s ease;
`;

const AboutContent = styled.div`
  max-width: 800px;
  text-align: center;
  padding: 3rem;
`;

const AboutTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #343a40;
`;

const AboutDescription = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #6c757d;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContent>
        <AboutTitle>Quiénes somos</AboutTitle>
        <AboutDescription>
        En We.dev, somos una empresa de soluciones web y de software dedicada a ayudar a nuestros clientes a impulsar su presencia en línea y a optimizar sus procesos de negocio a través de soluciones tecnológicas innovadoras y personalizadas. Trabajamos con profesionales y empresas de todos los tamaños y sectores, brindándoles un servicio integral que incluye desde el diseño y desarrollo de su sitio web hasta su mantenimiento y actualización continua.
        </AboutDescription>
      </AboutContent>
    </AboutSection>
  );
};

export default About;