import { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { getDrugs } from '../../features/drugsSlice'
import { selectDrug } from '../../features/selectedDrugSlice'
import { getSpells } from '../../features/spellsSlice'
import Header from '../shared/Header.jsx'

export default function Search() {
    const [searchData, setSearchData] = useState('')
    const { drugs } = useSelector((state) => state.drugs)
    const { spells, msg } = useSelector((state) => state.spells)
    const dispatch = useDispatch()
    const history = useHistory()

    const handelOnSubmit = async (e) => {
        e.preventDefault()
        let searchResult = await dispatch(getDrugs(searchData))
        if(!searchResult.payload.drugGroup.conceptGroup) {
            dispatch(getSpells(searchData))
        }
    }
    const drugOnClick = (drug) => {
        dispatch(selectDrug(drug))
        history.push(`/drugs/${drug.name}`)
    }
    const spellOnClick = (spell) => {
        setSearchData(spell)
        dispatch(getDrugs(spell))
    }

    return (
        <>
            <Header title="Drug Search" />
            <Container>
                <Title>Search For Drug!</Title>
                <Form onSubmit={handelOnSubmit}>
                    <InputSearch
                        type="text"
                        onChange={(e) => setSearchData(e.target.value)}
                        value={searchData}
                    />
                    <SubmitSearch type="submit" value="🔍"/>
                </Form>
                {!drugs.length ?
                    <Items>
                        <SpellMsg>{msg}</SpellMsg>
                        {spells.map((spell, index) => (
                            <Item
                                key={index}
                                onClick={() => spellOnClick(spell)}
                            >
                                {spell}
                            </Item>
                        ))}
                    </Items>
                    : ''
                }
                <Items>
                    {drugs.map((drug, index) => (
                        <Item
                            key={index}
                            onClick={() => drugOnClick(drug)}
                        >
                            {drug.name}
                        </Item>
                    ))}
                </Items>
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
const Form = styled.form`
    margin: 1rem 0;
    height: 50px;
    width: 100%;
`
const InputSearch = styled.input`
    font-size: 1.3rem;
    padding: 14px 20px;
    width: 90%;
    height: 100%;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
`
const SubmitSearch = styled.input`
    width: 10%;
    background-color: #4CAF50;
    color: white;
    height: 100%;
    margin: 8px 0;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    font-size: 1.4rem;
    position: relative;
    left: -2px;
    top: 1px;
    :hover {
        background-color: #45a049;
    }
`
const Title = styled.h1`
    margin: 1rem;
`
const Items = styled.ul`
`
const Item = styled.li`
    font-size: 1rem;
    font-weight: 400;
    border: 1px solid #ccc;
    height: 50px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    margin: 8px 0;
    padding: 10px;
    text-align: left;
    cursor: pointer;
    position: relative;
    left: 0;
    transition: left 0.3s;
    :hover {
        left: -20px;
    }
`
const SpellMsg = styled.h3`
    color: red;
`