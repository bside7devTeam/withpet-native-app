import React from 'react';
import styled from 'styled-components/native';

interface TitleProps {
  title: string;
  description?: string;
}
const CardTitle = ({title, description}: TitleProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {description && <SubTitle>{description}</SubTitle>}
    </Wrapper>
  );
};

export default CardTitle;

const Wrapper = styled.View`
  margin-bottom: 10px;
`;
const Title = styled.Text`
  font-weight: 900;
  font-size: 18px;
`;
const SubTitle = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #9f9f9f;
`;
