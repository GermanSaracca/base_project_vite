//Configuring PostCSS
module.exports = {
    plugins: {
        autoprefixer: true,
        'postcss-mixins': true,
        'postcss-preset-env': {
            stage: 2,
            features: {
                'nesting-rules': true,
                'image-set-function': true,
            },
        },
        cssnano: {
            preset: [
                'default',
                {
                    discardComments: {
                        removeAll: true,
                    },
                },
            ],
        },
        'cq-prolyfill/postcss-plugin': true,
    },
}
