import React, { FC, memo } from 'react'
import DatePicker from 'react-native-modern-datepicker'

interface Iprops {
    date: string
    setDate: React.Dispatch<React.SetStateAction<string>>
}

const Calendar: FC<Iprops> = ({ date, setDate }) => {
    function convertDate(date: string) {
        return `${date.split('/')[2]}/${date.split('/')[1]}/${date.split('/')[0]}`
    }

    return (
        <DatePicker
            mode="calendar"
            onSelectedChange={date => setDate(convertDate(date))}
            selected={convertDate(date)}
            current={convertDate(date)}
            options={{
                defaultFont: 'Roboto',
                headerFont: 'Roboto', 
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