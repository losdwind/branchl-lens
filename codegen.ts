import { CodegenConfig } from '@graphql-codegen/cli'
import { EXPO_PUBLIC_LENS_API } from '@env'

const config: CodegenConfig = {
    schema: EXPO_PUBLIC_LENS_API,
    ignoreNoDocuments: true,
    generates: {
        './gql/': {
            documents: ['./gql/**/*.tsx'],
            preset: 'client',
            plugins: [],
        },
    },
}

export default config
