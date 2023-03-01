import styled from 'styled-components/native';

const App = () => {
  return (
    <AppContainer>
      <TitleText primary='yellow'>Open up App</TitleText>
      <TitleText primary='pink'>start working on your app!</TitleText>
    </AppContainer>
  );
};

const AppContainer = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.Text<{ primary: string }>`
  color: ${({ primary }) => primary};
`;

export default App;
