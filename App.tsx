import { Image, SafeAreaView, ScrollView, Text } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';

import ComicCard from './components/ComicCard';
import { theme } from './styles/theme';
import { useState } from 'react';

const App = () => {
  const [isScrollStart, setIsScrollStart] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(0);

  const categoryArray = ['남성 인기순', '조회순', '업데이트순', '별점순'];

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ComicWrapper>
          <ComicCard />
          <ComicCard />
          <ComicCard />
          <ComicCard />
          <ComicCard />
          <ComicCard />
        </ComicWrapper>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 14px;
  background-color: ${({ theme }) => theme.olive20};
`;

const ComicWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6;
  flex-wrap: wrap;
`;

const ImageBox = styled.Image``;

export default App;
