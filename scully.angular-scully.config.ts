import { ScullyConfig } from '@scullyio/scully';
require('scully-plugin-page-title');
require('scully-plugin-canonical');

/** this loads the default render plugin, remove when switching to something else. */


export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "angular-scully",
  spsModulePath: 'YOUR OWN MODULE PATH HERE',
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  },
  defaultPostRenderers: ['setCanonicalLinkPlugin', 'changeTitlePlugin'],
};