import path from 'path';
import {fileURLToPath} from 'url';
import babelParser from '@babel/eslint-parser';
import {fixupConfigRules} from '@eslint/compat';
import {FlatCompat} from '@eslint/eslintrc';

const fileName = fileURLToPath(import.meta.url);
const dir = path.dirname(fileName);

const compat = new FlatCompat({
  baseDirectory: dir,
});

/** @type {import('@types/eslint').Linter.Config[]} */
const config = [
  {
    ignores: ['.expo/', 'expo-env.d.ts'],
  },
  {
    languageOptions: {
      parser: babelParser,
    },
  },
  ...fixupConfigRules(compat.extends('@react-native/eslint-config')),
  {
    rules: {
      'react/react-in-jsx-scope': ['off'],
      'react/jsx-uses-react': ['off'],
      'no-console': ['error', {allow: ['warn', 'info', 'error']}],
      '@typescript-eslint/func-call-spacing': 'off',
      'react-native/no-inline-styles': ['off'],
    },
  },
];
export default config;
