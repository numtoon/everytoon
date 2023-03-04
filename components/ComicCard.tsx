import styled from 'styled-components/native';

const ComicCard = () => {
  const props = {
    imageUrl:
      'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
    title: '세상에서 가장 신비한 문자',
    author: '세상에서 가장 신비한 유진씨',
    gradePoint: 4.23,
  };

  return (
    <CardContainer>
      <ImageBox
        source={{
          uri: props.imageUrl,
        }}
      />
      <Title numberOfLines={1} ellipsizeMode='tail'>
        {props.title}
      </Title>
      <AuthorBox>
        <Author numberOfLines={1} ellipsizeMode='tail'>
          {props.author}
        </Author>
        <GradePoint>★{props.gradePoint}</GradePoint>
      </AuthorBox>
    </CardContainer>
  );
};

const CardContainer = styled.View`
  width: 100px;
  height: 170px;
`;

const ImageBox = styled.Image`
  width: 100%;
  height: 130px;
  border-radius: 6px;
  margin-bottom: 4px;
`;

const Title = styled.Text`
  width: 100%;
  color: ${({ theme }) => theme.olive100};
  font-weight: 600;
`;

const AuthorBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Author = styled.Text`
  width: 60%;
  color: ${({ theme }) => theme.olive60};
  font-size: 11px;
`;

const GradePoint = styled.Text`
  margin-left: 2px;
  color: ${({ theme }) => theme.olive60};
  font-size: 11px;
`;

export default ComicCard;
