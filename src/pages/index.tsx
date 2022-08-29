import type { NextPage } from "next";
import styled from "styled-components";
const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: xxx-large;
  margin-top: 200px;
  .welcome{
    transition: transform 1s;
  }
  .welcome:hover {
    transform: translateX(100%);
    background-color: black;
    color: white;
  }
`;
const Home: NextPage = () => {
  return (
    <HomeWrapper>
      <h1 className="welcome">Welcome</h1>
    </HomeWrapper>
  );
};

export default Home;
