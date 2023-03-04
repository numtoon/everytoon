import styled from 'styled-components/native';

interface Props {
  title: string;
  author: string;
}

const ComicCard = (props: Props) => {
  const { title, author } = props;
  return (
    <CardContainer>
      <ImageBox
        source={{
          uri: 'https://random.imagecdn.app/500/150',
        }}
      />
      <Title numberOfLines={1} ellipsizeMode='tail'>
        {title}
      </Title>
      <Author numberOfLines={1} ellipsizeMode='tail'>
        {author}
      </Author>
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

const Author = styled.Text`
  width: 100%;
  color: ${({ theme }) => theme.olive60};
  font-size: 11px;
`;

export default ComicCard;
