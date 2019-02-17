const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode:'development',
    entry:path.join(__dirname,'./src/index.js'),
    output:{
        path:path.join(__dirname,'dist'),
        filename:'main.js'
    },
    plugins:[
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        })
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            // { test: /\.(png|jpg|gif)$/, use: 'url-loader' },
            { test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=43960' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, 
            {test:/\.vue$/,use:'vue-loader'}

        ]
    },
    resolve:{
        alias:{
            "vue$":"vue/dist/vue.js"
        }
    }
    
}