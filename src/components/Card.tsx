import React from 'react';
import {Image, Text} from 'react-native';
import styled from 'styled-components/native';

interface PetInterface {
  day: string;
  gender: 'M' | 'W';
  animal: 'dog' | 'cat';
  like: 'liked' | 'unliked';
  date: string;
  kind: string;
  birth: string;
  type: string;
  address: string;
}
const genderIcon = {
  M: require('~/assets/icon/icon_gender_male.png'),
  W: require('~/assets/icon/icon_gender_male.png'),
};
const animalIcon = {
  dog: require('~/assets/icon/icon_animal_dog.png'),
  cat: require('~/assets/icon/icon_animal_dog.png'),
};
const likeIcon = {
  liked: require('~/assets/icon/icon_heart_fill.png'),
  unliked: require('~/assets/icon/icon_heart_fill.png'),
};
const Card = () => {
  const petInfo: PetInterface = {
    day: 'D-21',
    gender: 'M',
    animal: 'dog',
    like: 'liked',
    date: '22-01-01',
    kind: '[개] 진돗개',
    birth: '2002 (년생)',
    type: '보호중',
    address: '서울 금천구',
  };

  return (
    <Wrapper>
      <Image source={require('../assets/dummyImage/space_img.png')} />
      <CardInfo>
        <IconWrapper>
          <FlexBox>
            <DaysWrapper>
              <Days>{petInfo.day}</Days>
            </DaysWrapper>
            <Image source={genderIcon[petInfo.gender]} />
            <Image source={animalIcon[petInfo.animal]} />
          </FlexBox>
          <FlexBox>
            <Image source={likeIcon[petInfo.like]} />
          </FlexBox>
        </IconWrapper>
        <InfoWrapper>
          <TextWrapper>
            <Name>보호종료</Name>
            <Text>{petInfo.date}</Text>
          </TextWrapper>
          <TextWrapper>
            <Name>품종</Name>
            <Text>{petInfo.kind}</Text>
          </TextWrapper>
          <TextWrapper>
            <Name>출생</Name>
            <Text>{petInfo.birth}</Text>
          </TextWrapper>
          <TextWrapper>
            <Name>상태</Name>
            <Text>{petInfo.type}</Text>
          </TextWrapper>
          <TextWrapper>
            <Name>보호중</Name>
            <Text>{petInfo.address}</Text>
          </TextWrapper>
        </InfoWrapper>
      </CardInfo>
    </Wrapper>
  );
};

export default Card;

const FlexBox = styled.View`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled(FlexBox)`
  padding: 3px 10px;
`;
const CardInfo = styled.View`
  width: 50%;
`;
const IconWrapper = styled(FlexBox)`
  width: 100%;
  padding: 8px 0px;
  border-bottom-width: 2px;
  border-color: #dfdedb;
`;
const DaysWrapper = styled.View`
  width: 45px;
  background: #1790ff;
  border-radius: 40px;
  padding: 2px 3px;
  margin-right: 5px;
`;
const Days = styled.Text`
  text-align: center;
  color: white;
  font-size: 12px;
`;
const InfoWrapper = styled.View`
  padding: 5px 0px;
`;
const TextWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px; ;
`;
const Name = styled.Text`
  font-weight: 700;
  color: #9f9f9f;
  margin-right: 5px;
`;
