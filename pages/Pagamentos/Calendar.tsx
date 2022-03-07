import React, { FC, memo } from 'react'
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker'

interface Iprops {
    date: string
    setDate: React.Dispatch<React.SetStateAction<string>>
}

const Calendar: FC<Iprops> = ({ date, setDate }) => {
    console.log(getFormatedDate('2022-06-03', 'YYYY/MM/DD'))
    return (
        <DatePicker
            mode="calendar"
            onSelectChange={date => setDate(date)}
            selected="2022/06/03"
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