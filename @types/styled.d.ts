import { Itheme } from '../types'

declare module 'styled-components' {
    export interface DefaultTheme extends Itheme {  }
}