import React, {useEffect} from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
`;
const MainView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const CenterText = styled.Text`
  font-size: 10px;
`;
export default function () {
  useEffect(() => {}, []);
  return (
    <Container>
      <MainView>
        <CenterText>a</CenterText>
      </MainView>
    </Container>
  );
}
