import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
`;
const Title = styled.h1`
  margin: 10px;
`;
const Button = styled.button`
  background-color: transparent;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  color: white;
`;
export default function CategoryItem(props) {
  console.log(props);
  return (
    <Container>
      <Image src={props.props.image} />
      <TextContainer>
        <Title>{props.props.title}</Title>
        <Button>Show Now</Button>
      </TextContainer>
    </Container>
  );
}
