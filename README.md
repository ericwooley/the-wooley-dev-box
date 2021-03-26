

* [TheWooleyDevbox](#thewooleydevbox)
  * [Folder Structure](#folder-structure)
# TheWooleyDevbox

## Folder Structure
```bash
$ tree -I 'node_modules|.git'
.
├── apps # apps glue our libs together
│   ├── the-wooley-devbox # Our NextJS app
│   │   ├── index.d.ts # Custom Types for SVG
│   │   ├── jest.config.js # app specific jest config
│   │   ├── next.config.js # use this to customize next
│   │   ├── pages   # nextJS pages https://nextjs.org/docs/basic-features/pages
│   │   ├── public # static files https://nextjs.org/docs/basic-features/static-file-serving
│   │   ├── specs # Jest Tests
│   │   ├── tsconfig.json # project specific tsconfig file, excludes spec files.
│   │   └── tsconfig.spec.json # ts config which includes spec files.
│   └── the-wooley-devbox-e2e # cypress tests, which we will not get into https://nx.dev/latest/react/nx-plugin/e2e#e2e
├── babel.config.json
├── jest.config.js # nx jest config file
├── jest.preset.js # nx jest preset file
├── libs # all our shared code will eventually go in here.
├── nx.json # https://nx.dev/latest/react/getting-started/configuration#nx-json
├── tools # scripts that act on your code base
├── tsconfig.base.json # base tsconfig, which applies to all TS files.
└──  workspace.json # https://nx.dev/latest/react/getting-started/configuration#workspace-json
```
