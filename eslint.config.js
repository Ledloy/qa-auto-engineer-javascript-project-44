import stylistic from '@stylistic/eslint-plugin'

export default [
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/indent': ['error', 2],
      '@stylistic/comma-spacing': ['error', { before: false, after: true }],
      '@stylistic/brace-style': ['error', 'stroustrup'], // ← чтобы } была на отдельной строке
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }], // ← разрешить одну пустую строку
      'no-unused-vars': 'error',
    },
  },
]
