import {compilerOptions} from './tsconfig.json'
import {pathsToModuleNameMapper } from 'ts-jest'

export default {
    moduleFileExtensions:  ['js', 'json', 'ts'],
    moduleNameMapper: pathsToModuleNameMapper(
        compilerOptions.paths, {
            prefix: '<rootDir>/'
        }
    ),
    testRegex: '.*\\..*spec\\ts$',
    transform: {
        '^.+\\.(t|j)s$': 'ts-jest',
    },
    collectCoverageFrom: ['**/*.(t|j)s'],
    coverageDirectory: '../coverage',
    testEnvironment: 'node',
}