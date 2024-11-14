import path from 'path';

const override = (config) => {
    config.resolve.alias = {
        '@components': path.resolve('src/components/'),
        '@pages': path.resolve('src/pages/'),
        '@utils': path.resolve('src/utils/'),
        '@constants': path.resolve('src/constants/'),
        '@assets': path.resolve('src/assets/'),
    };
    return config;
};

export default override;

// const path = require('path');

// const override = (config) => {
//     config.resolve.alias = {
//         '@components': path.resolve(__dirname, 'src/components/'),
//         '@pages': path.resolve(__dirname, 'src/pages/'),
//         '@utils': path.resolve(__dirname, 'src/utils/'),
//         '@constants': path.resolve(__dirname, 'src/constants/'),
//         '@assets': path.resolve(__dirname, 'src/assets/'),
//     };
//     return config;
// };

// module.exports = override;
