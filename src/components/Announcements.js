import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: rgb(196, 190, 262);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcements = () => {
    return (
        <Container>
            WOW! What a ~deal~
        </Container>
    )
}

export default Announcements
