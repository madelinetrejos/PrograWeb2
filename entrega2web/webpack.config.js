const path = require('path');

module.exports = {
  

  module: {
    rules: [
      
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: 'svelte-loader'
      }
    ]
  },

  resolve: {
    alias: {
      
      svelte: path.resolve('node_modules', 'svelte')
    },
    extensions: ['.mjs', '.js', '.svelte']
  }
};
