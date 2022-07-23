import React from 'react';
import styled from 'styled-components/native';

interface MoreButtonProps {
  title: string;
}
const MoreButton = ({title}: MoreButtonProps) => {
  return (
    <ButtonArea>
      <ButtonText>{title}</ButtonText>
    </ButtonArea>
  );
};

export default MoreButton;

const ButtonArea = styled.TouchableOpacity`
  margin: 15px 0 30px 0;
  background: #efefef;
  padding: 10px 0px;
`;
const ButtonText = styled.Text`
  color: black;
  text-align: center;
  font-size: 18px;
`;
