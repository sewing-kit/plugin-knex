module.exports = {
  extends: [
    'plugin:@sewing-kit/typescript',
    'plugin:@sewing-kit/node',
    'plugin:@sewing-kit/prettier',
  ],
  ignorePatterns: [
    'node_modules/',
    'build/',
  ],
  overrides: [
    {
      files: ['sewing-kit.config.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
