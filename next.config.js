const withTM = require('next-transpile-modules')(['react-github-btn']);
 
module.exports = withTM({
    compiler: {
        styledComponents: true,
    }
});