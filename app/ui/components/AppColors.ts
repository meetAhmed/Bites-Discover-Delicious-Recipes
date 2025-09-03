/*
Two theme modes: light and dark
*/

const themes = {
    light: {
        primary: '#F0B323',
        primaryBtnText: '#000000',
        inputFieldBackground: '#edededff',
        inputFieldText: '#000000',
        floatingButtonIcon: '#FFFFFF',
        background: '#f3f3f3ff',
        text: '#000000',
        textSecondary: '#444444',
        card: '#ffffff',
        red: '#FF0000',
        lightBlue: '#4682B4'
    },
    dark: {
        primary: '#F0B323',
        primaryBtnText: '#000000',
        inputFieldBackground: '#FFFFFF',
        inputFieldText: '#0D0F15',
        floatingButtonIcon: '#FFFFFF',
        background: '#0D0F15',
        text: '#FFFFFF',
        textSecondary: '#B0B4C0',
        card: '#1C1F26',
        red: '#FF0000',
        lightBlue: '#4682B4'
    }
}

// hardcoding the dark theme as the active theme
const AppColors = themes.dark;

export default AppColors