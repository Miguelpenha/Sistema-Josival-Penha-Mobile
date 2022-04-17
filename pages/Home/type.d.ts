import { MaterialIcons } from '@expo/vector-icons'

export interface Ioption {
    title: string
    icon: keyof typeof MaterialIcons.glyphMap
    onClick: Function
}