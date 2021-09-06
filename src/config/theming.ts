import { Theme } from 'react-ts-boiler';

const lightTheme: Theme = {
    name: 'light-theme',
    modifier: 'light'
};

const darkTheme: Theme = {
    name: 'dark-theme',
    modifier: 'dark'
};

const theming = {
    themes: [lightTheme, darkTheme]
};

export default theming;
