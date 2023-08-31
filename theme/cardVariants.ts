const cardVariants = {
    defaults: {
        borderRadius: 's',
        backgroundColor: 'cardBackground',
        padding: {
            phone: 's',
            tablet: 'm',
        },
    },
    highlighted: {
        borderRadius: 's',
        backgroundColor: 'cardBackgroundHighlighted',
        padding: {
            phone: 's',
            tablet: 'm',
        },
    },
    outlined: {
        borderRadius: 's',
        backgroundColor: 'cardBackground',
        borderWidth: 1,
        borderColor: 'cardBackgroundHighlighted',
        padding: {
            phone: 's',
            tablet: 'm',
        },
    },
    hoverable: {
        borderRadius: 's',
        backgroundColor: 'cardBackground',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
        padding: {
            phone: 's',
            tablet: 'm',
        },
    },
}

export default cardVariants;