const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const path = require('path');
const varStyles = require('./style.json');

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = function override(config, env) {
  // do stuff with the webpack config
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    config,
  );
  config = rewireLess.withLoaderOptions({
    modifyVars: varStyles,
    javascriptEnabled: true,
  })(config, env);
  
  // resolve alias
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': resolve('src'),
    'router': resolve('src/router'),
    'assets': resolve('src/assets'),
    'components': resolve('src/components'),
    'config': resolve('src/config'),
    'lib': resolve('src/lib'),
    'mock': resolve('src/mock'),
    'plugins': resolve('src/plugins'),
    'utils': resolve('src/utils'),
    'views': resolve('src/views'),
  }

  return config
}