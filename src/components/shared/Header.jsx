import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Header({title}) {

    return (
        <Container>
            <Logo to="/">Blink Health</Logo>
            <Title>{title}</Title>
        </Container>
    )
    
}

const Container = styled.header`
    display: grid;
    grid-template-columns: 20% 60% 20%;
    align-items: center;
    height: 70px;
    padding: 0 1rem;
    box-shadow: 0 1px 10px 0 rgb(0 0 0 / 10%);
`
const Logo = styled(Link)`
    font-size: 1.4rem;
    font-weight: 500;
    text-decoration: none;
`
const Title = styled.h1`
    text-align: center;
`