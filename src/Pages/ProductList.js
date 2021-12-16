import styled from "styled-components"
import Navbar from "../components/Navbar.js"
import Announcements from "../components/Announcements"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const Container = styled.div`

`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`
const Option = styled.option``

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcements />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Procucts</FilterText>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>Black</Option>
                    <Option>Blue</Option>
                    <Option>Green</Option>
                    <Option>Red</Option>
                    <Option>White</Option>
                    <Option>Yellow</Option>
                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>
                </Filter>
            <Filter>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (high to low)</Option>
                    <Option>Price (low to high)</Option>
                </Select>
            </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
