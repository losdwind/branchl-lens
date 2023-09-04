const palette = {
    // primary
    primary100: '#C4E2F8',
    primary300: '#8FBFE1',
    primary500: '#4885AF',
    primary700: '#1F5D88',
    primary900: '#00406D',

    // secondary
    secondary100: '#FAC7D9',
    secondary300: '#EE9CB9',
    secondary500: '#E97FA5',
    secondary700: '#D7628C',
    secondary900: '#CB2F67',

    // gray scale
    white: '#FFFFFF',
    gray50: '#F8F9F9',
    gray100: '#B9BCC0',
    gray900: '#515458',
    gray950: '#414347',
    black: '#000000',

    // decorative
    brown: '#F3B53D',
    green: '#89BA94',
    pink: '#FF9B90',
    teal: '#87DCED',

    // alert
    success: '#05E356',
    warning: '#F5C713',
    error: '#DF0707'

}

export const lightColors = {
    mainBackground: palette.white,
    cardBackground: palette.gray50,
    cardBackgroundHighlighted: palette.primary100,

    titleText: palette.black,
    bodyText: palette.gray900,
    buttonTextActive: palette.white,
    buttonTextInactive: palette.black,


    primaryButtonBackground: palette.primary900,
    secondaryButtonBackground: palette.secondary900,
    inActiveButtonBackground: palette.gray50,

    success: palette.success,
    warning: palette.warning,
    error: palette.error,
}

export const darkColors = {
    mainBackground: palette.black,
    cardBackground: palette.gray950,
    cardBackgroundHighlighted: palette.primary900,

    titleText: palette.white,
    bodyText: palette.gray100,
    buttonTextActive: palette.black,
    buttonTextInactive: palette.white,

    primaryButtonBackground: palette.primary100,
    secondaryButtonBackground: palette.secondary100,
    inActiveButtonBackground: palette.gray950,

    success: palette.success,
    warning: palette.warning,
    error: palette.error,
}