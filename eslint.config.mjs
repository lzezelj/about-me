import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';

export default [
  { ignores: ['node_modules/**'] },
  js.configs.recommended,
  {
    files: ['dist/**/*.js'],
    languageOptions: { globals: globals.browser },
  },
  prettier,
];
