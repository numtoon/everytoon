import styled, { ThemeProvider } from 'styled-components/native';

import { theme } from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <TitleText primary='yellow'>Open up App</TitleText>
        <TitleText primary='pink'>start working on your app!</TitleText>
      </AppContainer>
    </ThemeProvider>
  );
};

const AppContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.olive20};
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.Text<{ primary: string }>`
  color: ${({ primary }) => primary};
`;

export default App;
