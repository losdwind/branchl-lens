import { lightColors, darkColors } from "./colors"
import spacing from "./spacing"
import borderRadius from "./borderRadius"
import breakpoints from "./breakpoints"
import textVariants from "./textVariants"
import cardVariants from "./cardVariants"
import imageVariants from "./imageVariant"


import { createTheme } from "@shopify/restyle"


export const lightTheme = createTheme(
    {
        spacing: spacing,
        colors: lightColors,
        breakpoints: breakpoints,
        borderRadii: borderRadius,
        textVariants: textVariants,
        cardVariants: cardVariants,
        imageVariants: imageVariants
    }
)

export type Theme = typeof lightTheme;

export const darkTheme: Theme = {
    ...lightTheme,
    colors: darkColors
}
