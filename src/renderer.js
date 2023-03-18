"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compile = void 0;
var sass = require('sass');
// rome-ignore lint/suspicious/noExplicitAny: <explanation>
var compile = function (data, options) {
    var config = Object.assign(this.theme.config.sass || {}, this.config.sass || {});
    return new Promise(function (resolve, reject) {
        // Use compile instead of compileAsync,
        // When using Dart Sass, compile is almost twice as fast as compileAsync, due to the overhead of making the entire evaluation process asynchronous.
        if (data === null || data === void 0 ? void 0 : data.path) {
            try {
                var result = sass.compile(data.path, config);
                if (result === null || result === void 0 ? void 0 : result.css) {
                    resolve(result.css);
                }
                else {
                    reject(new Error('Failed to render SASS'));
                }
            }
            catch (error) {
                reject(error);
            }
        }
        else {
            reject(new Error('Failed to render SASS'));
        }
    });
};
exports.compile = compile;
