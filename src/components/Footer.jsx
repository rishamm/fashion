import {
  Facebook,
  Instagram,
  LocalPhoneSharp,
  MailOutlineSharp,
  RoomSharp,
  Telegram,
  Twitter,
} from "@material-ui/icons";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Tittle = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1``;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;

  align-items: center;
  margin-right: 20px;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Fashion</Logo>
        <Desc>Be Unique</Desc>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>

          <SocialIcon>
            <Instagram />
          </SocialIcon>

          <SocialIcon>
            <Twitter />
          </SocialIcon>

          <SocialIcon>
            <Telegram />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Tittle>Useful Links</Tittle>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Mens</ListItem>
          <ListItem>Womens</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Orders</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>

      <Right>
        <Tittle>Contact</Tittle>
        <ContactItem>
          <RoomSharp style={{ marginRight: "10px" }} />6 Th floor Hilite
          Buissnespark
        </ContactItem>
        <ContactItem>
          {" "}
          <LocalPhoneSharp style={{ marginRight: "10px" }} />
          +91 1234567890
        </ContactItem>
        <ContactItem>
          <MailOutlineSharp style={{ marginRight: "10px" }} />
          fashion4u@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
