const plugins = require('./gatsby-config.plugins');

const defaultLanguage = 'en';

module.exports = {
    pathPrefix: 'HomeSearch',
    siteMetadata: {
        title: 'Home Finder',
        author: 'blopa',
        summary: 'Find homes for you',
        defaultLanguage,
        description: 'Home Finder',
        siteUrl: 'https://ammer03.github.io/HomeSearch/',
        social: {
            twitter: 'thepiratepablo',
        },
    },
    plugins,
};
