//This file is not transpilled, so must use ES5
//Register Babel to transpile before our tests run
require('babel-register');
//Disable webpack features that Babel doesnot understant
require.extensions['.css'] = function(){};
