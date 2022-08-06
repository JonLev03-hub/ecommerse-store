import styled from "styled-components";
import { Instagram, Facebook, Twitter } from "@mui/icons-material";
import { Phone, MailOutline, Room } from "@mui/icons-material";
import { breakOne } from "../responsive";

const Container = styled.div`
  display: flex;
  ${breakOne({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;
const MediaContainer = styled.div`
  display: flex;
`;
const MediaIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor:pointer;
`;

const Center = styled.div`
  flex: 1;
  margin: 20px;
  ${breakOne({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 15px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap:wrap:

`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  margin: 20px;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
  border-radius: 10px;
`;

export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo>Outdoor Market</Logo>
        <Desc>
          Outdoor market is a place for you to gear up! Get what you need to
          explore the world and reach places you have never even imagined.
          Explore Nature and learn what you love most.
        </Desc>
        <MediaContainer>
          <MediaIcon color="#E4405f">
            <Instagram />
          </MediaIcon>
          <MediaIcon color="#3b5999">
            <Facebook />
          </MediaIcon>
          <MediaIcon color="#55acee">
            <Twitter />
          </MediaIcon>
        </MediaContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        {/* <List>
          <ListItem>
            <Link to="/">All</Link>
          </ListItem>
          <ListItem>
            <Link to="/">All</Link>
          </ListItem>
          <ListItem>
            <Link to="/">All</Link>
          </ListItem>
          <ListItem>
            <Link to="/">All</Link>
          </ListItem>
        </List> */}
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <Room style={{ margin: "10px" }} />
          <span>123 Main St. Anytown, USA</span>
        </ContactItem>
        <ContactItem>
          <Phone style={{ margin: "10px" }} />
          <span>+1 (123) 456-7890</span>
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ margin: "10px" }} />
          <a
            href="mailto:

                    "
          >
            someone@example.com
          </a>
        </ContactItem>
        <Payment src="./images/payment.png" alt="Payment options we accept" />
      </Right>
    </Container>
  );
}
