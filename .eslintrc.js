module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        '@nuxtjs',
        'prettier',
        'plugin:nuxt/recommended'
    ],
    plugins: ['prettier'],
    // add your custom rules here
    rules: {}
};
