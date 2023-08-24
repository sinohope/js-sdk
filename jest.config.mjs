export default {
    modulePathIgnorePatterns: [
        '/validator/.*/__mocks__/.*',
        'config/.*',
        'thdpkgs/.*',
    ],
    verbose: true,
    testEnvironment: '<rootDir>/environment/uint8array.js',
    testPathIgnorePatterns: [
        '/node_modules/',
        '/config/',
        '/scripts/',
        '/walletdb/',
        '/environment/',
    ],
    transform: {
        // 关闭转义commonjs代码，这样能直接测试ESM
    }
};
