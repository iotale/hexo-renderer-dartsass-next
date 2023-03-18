import { compile } from './renderer';

hexo.extend.renderer.register('scss', 'css', compile);
hexo.extend.renderer.register('sass', 'css', compile);
