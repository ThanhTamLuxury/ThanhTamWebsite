/**
 * @Author Ashwin Hariharan
 * @Details Webpack config file for adding new vendors, defining entry points and shimming modules. 
 */

var webpack = require('webpack');
var path = require("path");

var lib_dir = __dirname + '/public/libs',
    node_dir = __dirname + '/node_modules';
   // bower_dir = __dirname + '/bower_components'

var config = {
    resolve: {
        alias: {
            react: node_dir + '/react',
            reactDom: lib_dir + '/react-dom',
            jquery: lib_dir + '/jquery-1.11.2.min.js', 
            magnificPopup: lib_dir + '/jquery.magnific-popup.js' //JQuery Plugin
        }
    },   

    entry: {
        app: ['./public/src/js/app-main'],
        vendors: ['react','reactDom','jquery','magnificPopup']
    },

    output: {
        path: path.join(__dirname, "public"),
        filename: "dist/js/[name].bundle.js"
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
            }),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'dist/js/vendors.js', Infinity),
    ],
    
    module: {
        noParse: [
            new RegExp(lib_dir + '/react.js'),
            new RegExp(lib_dir +'/jquery-1.11.2.min.js')
        ],
        loaders: [
            { 
                test: /\.js$/, 
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }, 
        ],rules: [
            {
              test: /\.css$/,
              use: [
                { loader: "style-loader" },
                { loader: "css-loader" }
              ]
            }
          ]
    }
};

module.exports = config;