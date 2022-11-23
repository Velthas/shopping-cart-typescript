import styled from 'styled-components';

import forMajeure from '../assets/images/formajeure4.jpg'

const Home = () => {
  return (
    <HomeWrapper>
      <HeroText>
        <Header>
          Be comfortable,
        </Header>
        <Header>
          Be inspired,
        </Header>
        <Header>
          Be right at home.
        </Header>
        <Button>
          Shop Now
        </Button>
      </HeroText>
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  background-image: url(${forMajeure});
  background-size: cover;

  height: 90vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

const Header = styled.h1`
  font-size: 3rem;
  font-family: 'bebas-neue', sans-serif;
  font-weight: normal;
  color: black;
  text-shadow: 1px 1px white;
`

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  width: 170px;

  background-color: transparent;
  border: 4px solid black;
  border-radius: 3px;

  font-size: 1.3rem;
  font-family: 'bebas-neue', sans-serif;
  text-transform: uppercase;

  transition: 0.3s ease-out;
  cursor: pointer;
  
  &:hover {
    color: white;
    background-color: black;
  }
`

export default Home;
