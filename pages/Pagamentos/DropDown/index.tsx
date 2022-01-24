import React, { useState, FC } from 'react'
import {
    Container,
    ContainerDropDown,
    TextDropDown,
    ListDropDown,
    ContainerItemListDropDown,
    TextItemListDropDown
} from './style'

interface Ialuno {
    nome: string
}

interface Iprops {
    values: Ialuno[]
    onChange: Function
}

const DropDown: FC<Iprops> = ({ values, onChange }) => {
    const [ViewListDropDown, setViewListDropDown] = useState(false)
    const [valueSelect, setValueSelect] = useState(values[0])
    
    return (
        <Container>
            <ContainerDropDown onPress={() => setViewListDropDown(!ViewListDropDown)}>
                <TextDropDown>{valueSelect.nome}</TextDropDown>
            </ContainerDropDown>
            {ViewListDropDown && (
                <ListDropDown>
                    {values.map((valueObject, index) => 
                        <ContainerItemListDropDown pri={index === 0} ult={index === values.length-1} key={index} onPress={() => {
                            setValueSelect(valueObject)
                            setViewListDropDown(false)
                            onChange(valueObject)
                        }}>
                            <TextItemListDropDown>{valueObject.nome}</TextItemListDropDown>
                        </ContainerItemListDropDown>
                    )}
                </ListDropDown>
            )}
        </Container>
    )
}

export default DropDown