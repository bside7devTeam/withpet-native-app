import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import SearchBar from '~/components/SearchBar';
import Menu from '~/components/Menu';
import DivisionLine from '~/components/DivisionLine';
import CardTitle from '~/components/CardTitle';
import Card from '~/components/Card';
import MoreButton from '~/components/MoreButton';

const Container = styled.SafeAreaView``;
const MainView = styled.ScrollView`
  background: white;
  height: 100%;
  padding: 10px 20px;
`;

export default function () {
  useEffect(() => {}, []);
  return (
    <Container>
      <MainView>
        <SearchBar />
        <Menu />
        <DivisionLine />
        <CardTitle title="긴급!" />
        <Card />
        <Card />
        <Card />
        <MoreButton title="소식 더보기" />
        <CardTitle
          title="저 여기 있어요! (공고중)"
          description="원래 주인을 기다리고 있어요."
        />
      </MainView>
    </Container>
  );
}
