import styled from 'styled-components'

export default function List({title='', items=[]}) {
    return (
        <Container>
            <Title>{title}</Title>
            <Items>
                {items.map(({key, value}, index) => (
                    <Item key={index}>
                        <Left>{key}</Left>
                        <Right>{value}</Right>
                    </Item>
                ))}
            </Items>
        </Container>
    )
}

const Container = styled.div`
`
const Title = styled.h2`
    margin: 4rem 0 1rem 0;
    border-bottom: 5px solid #536dc4;
`
const Items = styled.ul``
const Item = styled.li`
    display: flex;
    font-size: 1rem;
    font-weight: 400;
    border: 1px solid #ccc;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    margin: 8px 0;
    padding: 10px;
    text-align: left;
`
const Left = styled.p`
    text-align: left;
    min-width: 100px;
    width: 10%;
`
const Right = styled.p`
`