

* [TheWooleyDevbox](#thewooleydevbox)
    * [Pre-requisites](#pre-requisites)
* [Part 1: Setup with NX](#part-1-setup-with-nx)
# TheWooleyDevbox
With the web development world coming to grips with the benefits of type safety, it can be cumbersome to maintain type parity between your front end clients and back end services.

It is possible to maintain types using an ORM and have them flow out all the way to the front end, without maintaining types for your front end at all.

In this 6 part series, we’ll explore all the tooling you will need in order to pull this off:

1.  **_YOU ARE HERE_** **[nx.dev](https://nx.dev)** - A mono-repo organizational tool. We need nx to help us share code between the back end and the frontend. In addition to code sharing, nx provides excellent tooling to get you setup with: typescript, cypress, eslint, storybook, react/angular, jest, gatsby/nextjs, etc… Nx will be the glue for all our tooling.

2.  **[Type-GraphQL](https://typegraphql.com/)** - A graphql schema generator/framework which uses your types (from typeorm) to produce your graphql api.

3.  **[TypeORM](https://typeorm.io)** [](https://typeorm.io) - An excellent, battle tested, ORM with over 20k stars. TypeORM will be where the bulk of our actual types flow from. TypeORM can generate and run migrations as well as traditional ORM capabilities.

4.  **[GraphQL Code Generator](https://www.graphql-code-generator.com/docs/plugins/typescript-react-apollo)** - The typesafe link between your front end and your back end. We will generate an SDK, which we can use on the front end to achieve complete type safety. We will use the apollo generator, but there are tons of options for common graphql tooling.

5.  **[nextjs](https://nextjs.org/) with the NX NextJS Plugin** - NextJS is a powerful front end build tool which takes all the hardest configuration out of deploying a front end application.


### Pre-requisites

You should have the following installed:

1.  node: version 14 or greater. I recommend [NVM](https://github.com/nvm-sh/nvm) if you need to switch versions between projects

2.  yarn: You could use npm if you like, but this guide will be using yarns in it’s examples.


# Part 1: Setup with NX


To quote NX:

> **Nx** is a suite of powerful, extensible dev tools to help you architect, test, and build at any scale — integrating seamlessly with modern technologies and libraries while providing a robust CLI, caching, dependency management, and more.

We are not going to dive super deep into how nx works, and all of it’s capabilities, but you won’t need to know much follow this guide. We will be initializing NX with NextJs and express.

If you find that you want a video intro to NX, there is an excellent video [intro here.](https://www.youtube.com/watch?v=E188J7E_MDU)

Getting started with nx is probably the easiest part of this whole process. In your favorite terminal run:

```
npx --ignore-existing create-nx-workspace web --preset=next
```

[![](https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_lossy/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F5ddfdb72-71f0-4879-bbb7-20c7dc757647_1280x720.gif)](https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F5ddfdb72-71f0-4879-bbb7-20c7dc757647_1280x720.gif)


The comments show what and where each folder is and does, but lets examine a couple that might be new to you. There is also [official NX docs for the folder structure](https://nx.dev/latest/react/getting-started/folder-structure#files).

1.  [workspace.json](https://nx.dev/latest/react/getting-started/configuration#workspace-json) is a huge json file, where nx keeps track of all your various libs and apps, as well as custom commands for each.

2.  [nx.json](https://nx.dev/latest/react/getting-started/configuration#nx-json) is a smaller json file where nx keeps track of tags, and some extra metadata for your libs and projects.

3.  libs - we don’t have any libs yet, but in NX, libs is where most of your code lives. NX generates various types of libs for us (eg react components, or validators). They will eventually be consumed by apps.

4.  apps - While using NX, think of apps as entry points into your code. In our example, we only have one app: the-wooley-box, which is our nextjs frontend. Think of applications like glue for your libs.

5.  apps/web - this is our frontend nextjs application. workspace.json has an entry for web, as well as commands for interacting with it. When we run `yarn start`, we are actually running `nx serve web`
