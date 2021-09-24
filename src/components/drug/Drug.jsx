import { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getNdcList } from '../../features/ndcListSlice'
import Header from '../shared/Header.jsx'
import List from './List'

export default function Drug() {
    const dispatch = useDispatch()
    const { rxcui, name, synonym } = useSelector((state) => state.selectedDrug)
    const { ndc } = useSelector((state) => state.ndcList)
    let ndcList = ndc.map((item, index) => ({value: item, key: `NDC${index + 1}`}))
    let drug = [
        {value: rxcui, key: 'Id'}, 
        {value: name, key: 'Name'}, 
        {value: synonym,key: 'Synonym'}]

    useEffect(() => {
        console.log('useEffect');
        dispatch(getNdcList(rxcui))
    }, [rxcui, dispatch])

    return (
        <>
            <Header title="Drug Details" />
            <Container>
                <List title="Name of Drug" items={drug} />
                <List title="Associated NDCs" items={ndcList}/>
            </Container>
        </>
    )
}

const Container = styled.section`
    text-align: center;
    margin: 0 auto;
    max-width: 800px;
    border-radius: 5px;
`