import { Link } from "react-router-dom";
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

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    color: gray;
    background-color: white;
    cursor: pointer;
    font-weight: 600;
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;

`;



const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Link to={`/products/${item.cat}`}>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>BUY NOW</Button>
                </Info>
            </Link>
        </Container>
    );
};

export default CategoryItem;
