let {merge} = require("webpack-merge");

let commonConfig = require("./webpack.common");

module.exports = (envVars)=>{
    let {env} = envVars;
    let envConfig = require(`./webpack.${env}.js`);
    let config = merge(commonConfig , envConfig);
    return config;
}