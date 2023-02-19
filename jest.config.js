const path = require('path');
module.exports = {
  rootDir: path.resolve(__dirname, './'), // 根据自己项目来
  moduleFileExtensions: [
    "js",
    "json",
    "vue"
  ],
  transformIgnorePatterns: ["/node_modules/"],
  testEnvironment: "node",
  collectCoverage: true,
  collectCoverageFrom: [
    "**/src/components/**/*.{js,vue}"
  ],
  testRegex: '(/tests/unit/.*\\.(test|spec))\\.[tj]sx?$',//测试文件的地址配置
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",//告诉 Jest 用 babel-jest 处理 JavaScript 测试文件
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"//告诉 Jest 用 vue-jest 处理 .vue 文件
  },
  moduleNameMapper:{
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  setupFiles: ['<rootDir>jest.setup.js'], //启动jest需要的文件
  testEnvironmentOptions: {
    url: "http://localhost"
  }
};

