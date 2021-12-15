import { ArrowLeftOutlined, ArrowRightOutlined, Info } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === 'left' && '10px'};
    right: ${props=> props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`;

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`;

const Image = styled.img`
    height: 80%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background: transparent;
    cursor: pointer;
`

const Slider = () => {
    return (
        <Container>
            <Arrow direction='left'>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper>
                <Slide bg='f5fafd'>
                <ImgContainer>
                    <Image src='https://i.pinimg.com/originals/dc/44/a5/dc44a5e2e787a5e4c1f2354df2d9122e.jpg'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Summer Sale</Title>
                    <Desc>Sick Clothes, Sick Memes</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
                </Slide>
                <Slide bg='fcf1ed'>
                <ImgContainer>
                    <Image src='https://i.pinimg.com/originals/dc/44/a5/dc44a5e2e787a5e4c1f2354df2d9122e.jpg'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Winter Sale</Title>
                    <Desc>Sick Clothes, Sick Memes</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
                </Slide>
                <Slide bg='fbfof4'>
                <ImgContainer>
                    <Image src='https://i.pinimg.com/originals/dc/44/a5/dc44a5e2e787a5e4c1f2354df2d9122e.jpg'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Spring Sale</Title>
                    <Desc>Sick Clothes, Sick Memes</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction='right'>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider
