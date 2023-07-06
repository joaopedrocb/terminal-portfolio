module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' }, loose: true }],
      ['@babel/preset-typescript'],
      ['@babel/preset-react'],
    ],
    plugins: [
      ['@babel/plugin-proposal-private-property-in-object', { loose: false }],
      ['@babel/plugin-proposal-class-properties'],
      ['@babel/plugin-syntax-dynamic-import'],
      [
        'babel-plugin-root-import',
        {
          paths: [
            {
              rootPathSuffix: './src/',
              rootPathPrefix: '~/',
            },
          ],
        },
      ],
    ],
  };
};
