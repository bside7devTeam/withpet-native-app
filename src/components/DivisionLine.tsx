import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const Line = styled.View<{mobileWidth: number}>`
  width: ${({mobileWidth}) => mobileWidth}px;
  height: 10px;
  background: #efefef;
  margin: 20px -20px;
`;
const DivisionLine = () => {
  const mobileWidth = Dimensions.get('window').width;
  return <Line mobileWidth={mobileWidth} />;
};

export default DivisionLine;
