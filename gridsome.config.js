const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const tailwind = require('tailwindcss');
const postcssPresetEnv = require('postcss-preset-env');

const postcssPlugins = [
    postcssPresetEnv({ stage: 0, autoprefixer: false }),
    tailwind('./tailwind.config.js'),
];

module.exports = {
    siteName: "Non à l'Ecologie de Facade",
    siteDescription: 'Luttons contre les discours pseudo-écologiques',
    siteUrl: 'https://pseudo-ecologie.org',
    icon: './src/assets/favicon.png',
    titleTemplate: "Non à l'Ecologie de Facade",
    chainWebpack: (config) => {
        if (process.env.NODE_ENV !== 'production') {
            config
                .plugin('BundleAnalyzerPlugin')
                .use(BundleAnalyzerPlugin, [{ analyzerMode: 'static', openAnalyzer: false }]);
        }
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: postcssPlugins,
            },
        },
    },
    templates: {},

    plugins: [],
};
