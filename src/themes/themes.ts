import { COLORS } from '@constants';

export const lightTheme = {
    background: COLORS.orange,
    color: COLORS.blue,
    title: COLORS.blue,
    recipeBackground: 'rgba(241, 121, 0, 0.50)',
    type: 'rgba(46, 38, 111, 0.50)',
    ingredientBackground:
        'linear-gradient(90deg, rgba(217, 217, 217, 0.00) 23.93%, rgba(217, 217, 217, 0.10) 100%)',
    ingredientColor: 'rgba(46, 38, 111, 0.50)',
};

export const darkTheme = {
    background: COLORS.blueDark,
    color: COLORS.orange,
    title: COLORS.white,
    recipeBackground: COLORS.blueDark,
    type: '#FDBD84',
    ingredientBackground:
        'linear-gradient(90deg, rgba(217, 217, 217, 0.00) 23.93%, rgba(217, 217, 217, 0.10) 100%)',
    ingredientColor: '#A2A8BA',
};
