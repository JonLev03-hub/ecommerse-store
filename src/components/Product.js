import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  ShoppingCartOutlined,
  Search,
  FavoriteBorderOutlined,
} from "@mui/icons-material";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 290px;
  height: 290px;
  flex-grow: 0;
  position: relative;
  background-color: red;
`;
const Image = styled.img`
  width: 100%;
`;
const IconContainer = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;
const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  opacity: 0.9;

  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }
`;
export default function Product(props) {
  console.log(props.props);
  return (
    <Container>
      <Image src={`https://picsum.photos/seed/p${props.props.title}/200/200`} />
      <IconContainer>
        <Icon>
          <Link to={`/product/${props.props._id}`}>
            <Search />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${props.props._id}`}>
            <ShoppingCartOutlined />
          </Link>
        </Icon>
      </IconContainer>
    </Container>
  );
}
