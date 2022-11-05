
let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "..", "./src/index.tsx"),

    resolve: { extensions: [ "*" , "jsx" , ".tsx" , ".ts" , ".js" ]},
    
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [{ loader: "babel-loader" }],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(?:ico|png|jpg|jpeg|gif)$/i,
                type: "asset/resource"
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: "asset/inline"
            }
        ]
    },
    output: {
        path: path.resolve(__dirname , ".." , "./build"),
        filename: "Bundled.js",
        
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "..", "./public/index.html")
        }),
    ],
    devServer: {
        static: path.resolve(__dirname, ".." , "./public"),
        historyApiFallback: true,
    },
    
}