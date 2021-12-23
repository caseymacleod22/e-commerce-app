import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../Responsive"

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: 'column'})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=> props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: 'none'})}
`

const Title = styled.h3`
    /* margin-bottom: 30px; */
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({backgroundColor: '#fff8f8'})}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;

`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>macleod dev</Logo>
                <Desc>I wait I wait. Right when he starts firing to try to back boost me. The double. Body armor. Two quick ones. I already know I'm gettin' there on the perfect line. LOOK AT THE PACE! Fifty Fourty-nine! mmph- FOURTY-SEVEN BABY!</Desc>
                <SocialContainer>
                    <SocialIcon  color='3B5999'>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon  color='E4405F'>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon  color='55ACEE'>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon  color='E60023'>
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men's Fashion</ListItem>
                    <ListItem>Women's Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>On Sale</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight: '10px'}}/> 112 Streets St. Saint Petersburg
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight: '10px'}}/> +1 (234)-567-8910
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight: '10px'}}/> contact@macleod.dev
                </ContactItem>
                <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
            </Right>
        </Container>
    )
}

export default Footer
