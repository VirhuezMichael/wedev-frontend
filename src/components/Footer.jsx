import React from 'react';
import styled from 'styled-components';

import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const StyledFooter = styled.footer`
  background-color: #ba1e4a;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 8px;
  }
`;

const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 12px;
  }

  @media (max-width: 600px) {
    margin-top: 8px;
  }
`;

const StyledIconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #fff;
  color: #000;
  transition: all 0.3s;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const StyledCopyRight = styled.span`
  color: #ece3da;

  @media (max-width: 600px) {
    margin-top: 8px;
  }
`;

const Footer = () => {
    const wedev = "<We.Dev/>";
  return (
    <StyledFooter>
      <StyledSocialIcons>
        <StyledIconLink href="https://www.linkedin.com/in/we-dev-a29a3b277/" target="_blank">
          <LinkedInIcon />
        </StyledIconLink>
        <StyledIconLink href="https://www.instagram.com/we.dev.sj/" target="_blank">
          <InstagramIcon />
        </StyledIconLink>
        <StyledIconLink href="https://www.whatsapp.com/" target="_blank">
          <WhatsAppIcon />
        </StyledIconLink>
      </StyledSocialIcons>
      <StyledCopyRight>© 2023 {wedev}. Todos los derechos reservados.</StyledCopyRight>
    </StyledFooter>
  );
};

export default Footer;
