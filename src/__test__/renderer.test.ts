import Hexo = require('hexo');
import { compile } from '../renderer';

describe('Function `compile`', () => {
  it('compile scss with default settings', async () => {
    const hexo = new Hexo();
    const data: Hexo.extend.RendererData = {
      path: __dirname + '/files/default.scss',
      text: '',
    };
    await expect(compile.call(hexo, data, {})).resolves.toBe('html body {\n  width: 100%;\n}');
  });

  it('compile scss with custom config', async () => {
    const hexo = new Hexo();
    hexo.config.sass = { style: 'expanded' };
    const data: Hexo.extend.RendererData = {
      path: __dirname + '/files/default.scss',
      text: '',
    };
    await expect(compile.call(hexo, data, {})).resolves.toBe('html body {\n  width: 100%;\n}');
  });

  it('compile scss with custom theme config', async () => {
    const hexo = new Hexo();
    hexo.config.sass = { style: 'compressed' };
    hexo.theme.config.sass = { style: 'expanded' };
    const data: Hexo.extend.RendererData = {
      path: __dirname + '/files/default.scss',
      text: '',
    };
    await expect(compile.call(hexo, data, {})).resolves.toBe('html body{width:100%}');
  });

  it('throw error with invalid scss syntax', async () => {
    const hexo = new Hexo();
    const data: Hexo.extend.RendererData = {
      path: __dirname + '/files/error.scss',
      text: '',
    };

    const func = compile.call(hexo, data, {});
    await expect(func).rejects.toThrowError();
  });

  it('throw error with Failed to render SASS', async () => {
    const hexo = new Hexo();

    // @ts-ignore
    const func = compile.call(hexo, null, {});
    await expect(func).rejects.toThrowError();
  });

  it('compile sass with default settings', async () => {
    const hexo = new Hexo();
    const data: Hexo.extend.RendererData = {
      path: __dirname + '/files/default.sass',
      text: '',
    };
    expect(compile.call(hexo, data, {})).resolves.toBe('html body {\n  width: 100%;\n}');
  });
});
