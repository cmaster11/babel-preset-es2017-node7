'use strict';

const babelPluginTransformES2015ModulesCommonjs = require('babel-plugin-transform-es2015-modules-commonjs');
const babelPluginTransformObjectRestSpread = require('babel-plugin-transform-object-rest-spread');
const babelPluginSyntaxTrailingFunctionCommas = require('babel-plugin-syntax-trailing-function-commas');
const babelPluginTransformFunctionBind = require('babel-plugin-transform-function-bind');

module.exports = {
  plugins: [
    babelPluginTransformES2015ModulesCommonjs,
    babelPluginTransformObjectRestSpread,
    babelPluginSyntaxTrailingFunctionCommas,
    babelPluginTransformFunctionBind,
  ],
};
