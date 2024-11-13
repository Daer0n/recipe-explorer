import path from 'path';

const override = (config) => {
    config.resolve.alias = {
        '@components': path.resolve('src/components/'),
        '@pages': path.resolve('src/pages/'),
        '@utils': path.resolve('src/utils/'),
        '@constants': path.resolve('src/constants/'),
    };
    return config;
};

export default override;
