import styled from 'styled-components'
import { Picker as PickerNotStyled } from '@react-native-picker/picker'

export const Picker = styled(PickerNotStyled)`
    background-color: ${props => props.theme.primary};
    border-radius: 80px;
    color: #ffffff;
    width: 65%;
    align-self: center;
    font-size: 50px;
`