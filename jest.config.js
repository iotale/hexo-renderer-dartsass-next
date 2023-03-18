/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  coverageDirectory: 'coverage',
  preset: 'ts-jest',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  testEnvironment: 'jest-environment-node-single-context',
};
