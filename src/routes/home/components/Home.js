import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Home = props =>
  <section className={`${props.className} home-route`}>
    <h1>Welcome to react-redux-hot</h1>
    <h2>🤘🏻</h2>
    <a href='https://github.com/Influencity/react-redux-hot'>View souce code</a>
  </section>;

const HomeStyled = styled(Home)`
  height: 100%
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h2{
    font-size: 50px;
  }
  a {
    text-decoration: none;
    color: #007AFF;
  }
`;
Home.propTypes = {
  className: PropTypes.string.isRequired,
};

export default HomeStyled;
