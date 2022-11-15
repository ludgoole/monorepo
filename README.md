# Example Pnpm Monorepo

This template is part of the documentation of the [Pnpm](https://www.pnpm.cn/) tool.
It contains documented templates for all the standard configuration files.
It also includes three barebones projects that illustrate some dependency
relationships in a repo:

- **packages/common**: The common config
- **packages/core**: A control library used by the application
- **packages/utils**: A NodeJS build tool used to compile the other projects

(These projects are NOT meant to provide a realistic toolchain.)


# Building this repo

To build the projects in this repo, try these shell commands:

```
pnpm install
pnpm dev
pnpm build
```

For more information, see the documentation at:  https://rushjs.io/


# Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
