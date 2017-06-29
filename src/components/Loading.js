import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Loading = props =>
  <div className={props.className}>
    <span>😃</span>
  </div>;

const LoadingStyled = styled(Loading)`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    span {
      animation-name: spin;
      animation-duration: 400ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      font-size: 50px;
    }

`;

Loading.propTypes = {
  className: PropTypes.string.isRequired,
};


export default LoadingStyled;
