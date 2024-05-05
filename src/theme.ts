'use client'

import { createTheme, DEFAULT_THEME } from '@mantine/core'

export const mantineTheme = createTheme({
    black: DEFAULT_THEME.colors.gray[8],
    white: DEFAULT_THEME.colors.gray[0],
    components: {
        "InputWrapper": {
            styles: {
                label: {
                    fontWeight: 400
                }
            }
        }
    }
})
