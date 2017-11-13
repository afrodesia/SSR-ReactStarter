module.exports = {
  /*
   Tell webpack to run babel on every file it runds through
   SERVER AND CLIENT
  */
  module:{
    rules:[
      {
        // test only js files 
        test: /\.js?$/,
        // loader to transpile output 
        loader: 'babel-loader',
        // tells webpack to not run file on certain directories
        exclude: /node_modules/,
        // options pass to babel loader
        options: {
          // rules for babel to transpile our code
          presets: [
            'react',
            'stage-0',
            // transpile rule for last to browsers (catch all rule)
            ['env', { targets: { browsers: ['last 2 versions'] }}]
          ]
        }
      }
    ]
  }
}