import { MaterialIcons } from '@expo/vector-icons'

export interface Idocument {
    title: string
    icon: keyof typeof MaterialIcons.glyphMap
    onPress: () => void
}