import React from 'react';
import styled from 'styled-components';

import facebook from '../assets/images/facebook.png';
import messenger from '../assets/images/messenger.png';
import instagram from '../assets/images/instagram.png';
import pinterest from '../assets/images/pinterest.png';
import github from '../assets/images/github.png';

function Contacts() {
  return (
    <ContactsWrapper>
      <ImgWrapper>
        <a href="https://facebook.com">
          <SocialImg src={facebook} alt="Facebook Icon" />
        </a>
        <a href="https://messenger.com">
          <SocialImg src={messenger} alt="Messenger Icon" />
        </a>
        <a href="https://instagram.com">
          <SocialImg src={instagram} alt="Instagram Icon" />
        </a>
        <a href="https://pinterest.com">
          <SocialImg src={pinterest} alt="Pinterest Icon" />
        </a>
        <a href="https://github.com">
          <SocialImg src={github} alt="Github Icon" />
        </a>
      </ImgWrapper>
      <AdressContainer>
        <AdressPara>WeShop</AdressPara>
        <AdressPara>City Centre, Night City TX</AdressPara>
      </AdressContainer>
    </ContactsWrapper>
  );
}

const ContactsWrapper = styled.div`
  max-width: 100vw;
  min-height: calc(90vh - 50px);
  background-color: ${({ theme }) => theme.colors.gray.medium};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10vh;

  @media (max-width: 700px) {
    min-height: calc(80vh - 50px);
  }
`;

const ImgWrapper = styled.div`
  animation: appear-slowly 0.5s ease-in 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;

  @media (max-width: 400px) {
    width: 80%;
  }
`;

const SocialImg = styled.img`
  height: 70px;
  width: 70px;
  transition: ease-out 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 700px) {
    width: 45px;
    height: 45px;
  }

  @media (max-width: 400px) {
    width: 32px;
    height: 32px;
  }

  @media (max-width: 700px) {
    width: 35px;
    height: 35px;
  }
`;

const AdressContainer = styled.div`
  text-align: center;
`;

const AdressPara = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 1.3rem;

  @media (max-width: 700px) {
    font-size: 1.2rem;
  }
`;

export default Contacts;
