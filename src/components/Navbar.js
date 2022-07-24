import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { breakOne } from "../responsive";
import {useSelector} from "react-redux"
import styled from "styled-components";
import {Link} from "react-router-dom"
export default function Navbar() {
  const quantity = useSelector(state => state.cart.quantity)
  console.log(quantity)
  const Container = styled.div`
    height: 60px;
    ${breakOne({ height: "fit-content" })}
  `;
  const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${breakOne({ padding: "10px 0", flexDirection: "column" })}
  `;
  const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    ${breakOne({ justifyContent: "center" })}
  `;
  const Language = styled.span`
    font-size: 14px;
  `;
  const SearchContainer = styled.div`
    border: 1px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${breakOne({ margin: "10px 0" })}
  `;
  const Input = styled.input`
    border: none;
    ${breakOne({ width: "100%;" })}
  `;
  const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
  `;
  const Logo = styled.h1`
    font-weight: bold;
    margin: 0 auto;
    ${breakOne({ fontSize: "24px" })}
  `;
  const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${breakOne({ justifyContent: "center", marginTop: "5px" })}
  `;

  const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 20px;
    ${breakOne({ fontSize: "12px", marginLeft: "10px" })}
  `;
  return (
    <Container className="container">
      <Wrapper>
        <Center>
          <Logo>Outdoor Market</Logo>
        </Center>
        <Left>
          <Language>Search</Language>
          <SearchContainer>
            <Input /> <Search style={{ color: "grey", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>LOGIN</MenuItem>
          <Link to = "/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}
