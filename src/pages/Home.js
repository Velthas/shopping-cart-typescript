import styled from 'styled-components';
import { Link } from 'react-router-dom';

import forMajeure from '../assets/images/formajeure4.jpg'

const Home = () => {
  return (
    <HomeWrapper>
      <HeroText>
        <Header>
          { "Be comfortable," }
        </Header>
        <Header>
          { "Be inspired," }
        </Header>
        <Header>
          { "Be right at home." }
        </Header>
        <Link to="/shop">
          <Button>
          { "Shop Now" }
          </Button>
        </Link>
      </HeroText>
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  animation: appear-slowly 0.5s ease-in-out 1;

  background-image: url(${forMajeure});
  background-size: cover;
  background-position: center;

  height: 90vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8px;
  margin-left: 10vw;
  margin-top: 20vh;
`

const Header = styled.h1`
  font-size: 3rem;
  font-family: 'bebas-neue', sans-serif;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.light };
  text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.dark };
`

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  width: 170px;

  background-color: transparent;
  border: 4px solid ${({ theme }) => theme.colors.light };
  border-radius: 3px;

  font-size: 1.3rem;
  font-family: 'bebas-neue', sans-serif;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.light };

  transition: 0.3s ease-out;
  cursor: pointer;
  
  &:hover {
    color: ${({ theme }) => theme.colors.dark };
    background-color: ${({ theme }) => theme.colors.light };
  }
`

export default Home;
