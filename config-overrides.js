const path = require('path');

const override = (config) => {
    config.resolve.alias = {
        '@components': path.resolve(__dirname, 'src/components/'),
        '@pages': path.resolve(__dirname, 'src/pages/'),
        '@utils': path.resolve(__dirname, 'src/utils/'),
        '@constants': path.resolve(__dirname, 'src/constants/'),
        '@assets': path.resolve(__dirname, 'src/assets/'),
        '@enums': path.resolve(__dirname, 'src/enums/'),
        '@types': path.resolve(__dirname, 'src/types/'),
        '@hooks': path.resolve(__dirname, 'src/hooks/'),
        '@api': path.resolve(__dirname, 'src/api/'),
    };
    return config;
};

module.exports = override;
