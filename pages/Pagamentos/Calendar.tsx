import React, { FC, memo } from 'react'
import { useTheme } from 'styled-components'
import DatePicker from 'react-native-modern-datepicker'

interface Iprops {
    date: string
    setDate: React.Dispatch<React.SetStateAction<string>>
}

const Calendar: FC<Iprops> = ({ date, setDate }) => {
    const theme = useTheme()
    function convertDate(date: string) {
        return `${date.split('/')[2]}/${date.split('/')[1]}/${date.split('/')[0]}`
    }

    return (
        <DatePicker
            mode="calendar"
            onSelectedChange={(date: string) => setDate(convertDate(date))}
            selected={convertDate(date)}
            current={convertDate(date)}
            options={{
                defaultFont: 'Roboto',
                headerFont: 'Roboto',
                backgroundColor: theme.backgroundColor,
                textHeaderColor: theme.primary,
                textDefaultColor: theme.secondaryColor,
                selectedTextColor: theme.color,
                mainColor: theme.primary,
                textSecondaryColor: theme.secondaryColor,
                borderColor: theme.primary
            }}
            configs={{
                dayNames: [
                    'Domingo',
                    'Segunda feira',
                    'Terça feira',
                    'Quarta feira',
                    'Quinta feira',
                    'Sexta feira',
                    'Sábado'
                ],
                dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
                monthNames: [
                    'Janeiro',
                    'Fevereiro',
                    'Março',
                    'Abril',
                    'Maio',
                    'Junho',
                    'Julho',
                    'Agosto',
                    'Setembro',
                    'Outubro',
                    'Novembro',
                    'Dezembro'
                ]
            }}
        />
    )
}

export default memo(Calendar)