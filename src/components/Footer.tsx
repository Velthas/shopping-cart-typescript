import React from 'react';
import styled from 'styled-components';
import github from '../assets/images/github.png';

function Footer() {
  const codeUrl = 'https://github.com/Velthas/shopping-cart';

  return (
    <FooterWrapper>
      <p>
        {'Coded by Velthas (c) 2022'}
      </p>
      <a href={codeUrl}>
        <GithubIcon src={github} alt={'Github Icon'} />
      </a>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  height: 50px;
  padding: 15px 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
`;

const GithubIcon = styled.img`
  height: 18px;
  transition: 0.15s ease-in;

  &:hover {
    transform: scale(1.2);
  }
`;

export default Footer;
