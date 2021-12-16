import styled from "styled-components"
import Announcements from "../components/Announcements"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Container = styled.div``

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcements />
            <Wrapper>
                <Title>YOUR CART</Title>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
