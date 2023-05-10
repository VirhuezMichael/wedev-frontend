import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import CodeIcon from '@mui/icons-material/Code';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import ComputerIcon from '@mui/icons-material/Computer';


const ServiceContainer = styled.div`
  padding: 100px 0;
  /* background-color:#63203d ; For browsers that do not support gradients */
  background-image: linear-gradient(to bottom right, #892e54, #63203d);
  text-align: center;
`;

const ServiceTitle = styled.h2`
  font-size: 48px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 50px;
`;

const ServiceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ServiceCard = styled.div`
  width: calc(33.33% - 20px);
  margin-bottom: 40px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ServiceIcon = styled.div`
  background-color:#ba1e4a  ;
  color: #fff;
  text-align: center;
  font-size: 40px;
  /* padding: 30px 0; */
`;

const ServiceInfo = styled.div`
  background-color: #ece3da;
  padding: 30px;
  text-align: center;
`;

const ServiceTitleCard = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #777;
`;

const ServiceDesc = styled.p`
  font-size: 18px;
  color: #777;
  margin-bottom: 20px;
`;

const ServiceButton = styled.button`
  background-color:   #ba1e4a ;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color:   #ba1e4a  ;
  }
`;

const Service = () => {
  return (
    <Element name="services" id="services">
      <ServiceContainer>
        <ServiceTitle>Nuestros Servicios</ServiceTitle>
        <ServiceWrapper>
          <ServiceCard>
            <ServiceIcon>
              <CodeIcon fontSize="large"/>
            </ServiceIcon>
            <ServiceInfo>
              <ServiceTitleCard>Desarrollo de Páginas y Aplicaciones Web</ServiceTitleCard>
              <ServiceDesc>
              Creamos sitios y aplicaciones que conectan con tu público, con el diseño y la funcionalidad que tu negocio necesita para sobresalir.
              </ServiceDesc>
              <ServiceButton>Ver más</ServiceButton>
            </ServiceInfo>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon>
              <MobileFriendlyIcon/>
            </ServiceIcon>
            <ServiceInfo>
              <ServiceTitleCard>Desarrollo de Aplicaciones Móviles</ServiceTitleCard>
              <ServiceDesc>
              Desarrollo de aplicaciones móviles: Apps para iOS y Android que potencian tu negocio y se adaptan a las necesidades de tus clientes.
              </ServiceDesc>
              <ServiceButton>Ver más</ServiceButton>
            </ServiceInfo>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon>
              <ComputerIcon/>
            </ServiceIcon>
            <ServiceInfo>
              <ServiceTitleCard>Desarrollo Personalizado de Software</ServiceTitleCard>
              <ServiceDesc>
              Desarrollo personalizado de software: Soluciones de software a medida que optimizan tus procesos y mejoran la eficiencia de tu negocio.
              </ServiceDesc>
              <ServiceButton>Ver más</ServiceButton>
            </ServiceInfo>
          </ServiceCard>
        </ServiceWrapper>
        <h3>* Sección en construcción, póngase en contacto dejándonos su mensaje</h3>
      </ServiceContainer>
     </Element>
  );
};

export default Service