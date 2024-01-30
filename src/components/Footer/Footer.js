import React from 'react';
import SocialIcons from '../SocialIcons/SocialIcons';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialIconsContainer } from './FooterStyles';

const Footer = () => { 
  return (
    <FooterWrapper>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialIcons />
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;