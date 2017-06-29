import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import fireImg from '../../../assets/Fire_emoji.png';

const Fire = props => (
  <div className={props.className}>
    <img src={fireImg} alt='fire emoji' />
  </div>
);

const FireStyled = styled(Fire)`
`;

Fire.propTypes = {
  className: PropTypes.string.isRequired,
};

export default FireStyled;
