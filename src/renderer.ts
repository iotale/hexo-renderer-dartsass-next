import Hexo = require('hexo');
const sass = require('sass');

// rome-ignore lint/suspicious/noExplicitAny: <explanation>
export const compile = function (this: Hexo, data: Hexo.extend.RendererData, options: { [key: string]: any }) {
  const config = Object.assign(this.theme.config.sass || {}, this.config.sass || {});

  return new Promise<string>((resolve, reject) => {
    // Use compile instead of compileAsync,
    // When using Dart Sass, compile is almost twice as fast as compileAsync, due to the overhead of making the entire evaluation process asynchronous.
    if (data?.path) {
      try {
        const result = sass.compile(data.path, config);
        resolve(result.css);
      } catch (error) {
        reject(error);
      }
    } else {
      reject(new Error('Failed to render SASS'));
    }
  });
};
