import React from 'react';
import {Image} from 'react-native';
import styled, {css} from 'styled-components/native';

const flexBox = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Wrapper = styled.View`
  ${flexBox}
  width: 100%;
  margin-top: 15px;
  flex-direction: row;
`;
const IconWrapper = styled.View`
  ${flexBox}
  text-align: center;
`;
const Title = styled.Text`
  margin-top: 5px;
  font-weight: bold;
  text-align: center;
  font-size: 16px;
`;

const Menu = () => {
  const menuList = [
    {
      title: '긴급',
      imageSource: require('~/assets/icon/icon_menu_emergency.png'),
    },
    {
      title: '공고중 동물',
      imageSource: require('~/assets/icon/icon_menu_public.png'),
    },
    {
      title: '보호중 동물',
      imageSource: require('~/assets/icon/icon_menu_ward.png'),
    },
    {
      title: '보호소',
      imageSource: require('~/assets/icon/icon_menu_protective.png'),
    },
  ];
  return (
    <Wrapper>
      {menuList.map(({title, imageSource}) => {
        return (
          <IconWrapper>
            <Image source={imageSource} />
            <Title key={title}>{title}</Title>
          </IconWrapper>
        );
      })}
    </Wrapper>
  );
};

export default Menu;
