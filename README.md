<p align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" alt="project-logo">
</p>
<p align="center">
    <h1 align="center">RRSV-BOILER</h1>
</p>
<p align="center">
    <em>Powering Web Innovation, Streamlined & Swift</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/kawing11a/RRSV-boiler?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/kawing11a/RRSV-boiler?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/kawing11a/RRSV-boiler?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/kawing11a/RRSV-boiler?style=default&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary><h4>Table of Contents</h4></summary>

- [Overview](#overview)
- [Features](#features)
- [Modules](#modules)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Using `RRSV-boiler`](#using-rrsv-boiler)
  - [Tests](#tests)
- [Project Roadmap](#project-roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
</details>
<hr>

##  Overview

The RRSV-boiler project is a comprehensive starter template for building scalable web applications using React, Redux, and Vite, with TypeScript for type safety and styled-components for aesthetics. It establishes a robust development environment, offering features like state management through Redux, mock HTTP responses for testing, global UI and error handling, and internationalization support. Designed to speed up the development process, it supports server-side rendering with PHP, making it versatile for both frontend and backend integration. This boilerplate streamlines project configuration, asset management, and optimizes for both development and production environments.

---

##  Features

|    | Feature           | Description                                                                                   |
|----|-------------------|-----------------------------------------------------------------------------------------------|
| ⚙️  | **Architecture**  | Based on React and possibly server-side technologies, aimed at web development. Involves tools for bundling and transpilation like Rollup and Babel, with TypeScript support. |
| 🔩 | **Code Quality**  | Utilizes TypeScript and ESLint tools (`"@typescript-eslint/*"`), suggesting high code quality standards and static typing for safer code.                              |
| 📄 | **Documentation** | Likely minimal within the project, as no specific mention is made. Project's README or Wiki should be checked for details.                              |
| 🔌 | **Integrations**  | Integrates with web development tools and libraries such as React, Styled Components, and SWC for compilation and styling.                                     |
| 🧩 | **Modularity**    | The use of ES modules (`es-define-property`, `concat-map`) suggests a modular codebase, likely organized in a scalable manner.                                 |
| 🧪 | **Testing**       | No explicit mention of testing frameworks; integration might rely on external CI/CD services or require manual setup.                                          |
| ⚡️ | **Performance**   | SWC and Rollup are known for fast build times, suggesting the project values quick transpilation and bundling for performance.                                  |
| 🛡️ | **Security**      | Security practices aren't explicitly mentioned. Dependencies like `pbkdf2` and secure random number generators (`brorand`, `randomfill`) indicate some focus on cryptographic security. |
| 📦 | **Dependencies**  | Includes `react`, `styled-components`, `esbuild`, `rollup`, `@swc/core`, among others. A mix of front-end libraries and build tools.                           |
| 🚀 | **Scalability**   | The use of modern JS build tools (Rollup, esbuild) and efficient libraries suggests good scalability for web projects.                                         |
```

---

##  Repository Structure

```sh
└── RRSV-boiler/
    ├── README.md
    ├── index.html
    ├── package.json
    ├── public
    │   ├── index.php
    │   └── vite.svg
    ├── src
    │   ├── App.css
    │   ├── App.tsx
    │   ├── assets
    │   │   └── react.svg
    │   ├── axiosMocker.ts
    │   ├── configureStore.ts
    │   ├── core
    │   │   ├── containers
    │   │   ├── enums
    │   │   ├── libs
    │   │   ├── payloads
    │   │   ├── reducers
    │   │   ├── slices
    │   │   ├── states
    │   │   └── utils
    │   ├── helloworld
    │   │   └── containers
    │   ├── index.css
    │   ├── lingos
    │   │   ├── index.ts
    │   │   └── interfaces.ts
    │   ├── main.tsx
    │   ├── routes.ts
    │   ├── vite-env.d.ts
    │   └── windowVars.ts
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── types
    │   └── redux-reset.d.ts
    ├── vite.config.ts
    └── yarn.lock
```

---

##  Modules

<details closed><summary>.</summary>

| File                                                                                          | Summary                                                                                                                                                                                                                   |
| ---                                                                                           | ---                                                                                                                                                                                                                       |
| [package.json](https://github.com/kawing11a/RRSV-boiler/blob/master/package.json)             | The `package.json` defines `RRSV-boiler`, a modular React project setup with Vite, integrating Redux for state management and Axios for HTTP requests, equipped for development with TypeScript and styled-components.    |
| [tsconfig.json](https://github.com/kawing11a/RRSV-boiler/blob/master/tsconfig.json)           | The `tsconfig.json` configures TypeScript compiler options for the project, optimizing for React with strict linting rules and module resolution tailored for bundling.                                                   |
| [vite.config.ts](https://github.com/kawing11a/RRSV-boiler/blob/master/vite.config.ts)         | Configures development and production environments for a React project using Vite, including SSL, asset management, and optimization settings.                                                                            |
| [tsconfig.node.json](https://github.com/kawing11a/RRSV-boiler/blob/master/tsconfig.node.json) | The `tsconfig.node.json` file configures TypeScript for node-specific development within the RRSV-boiler project, primarily targeting the build systems setup, and ensures strict type-checking for the `vite.config.ts`. |
| [index.html](https://github.com/kawing11a/RRSV-boiler/blob/master/index.html)                 | The `index.html` serves as the entry point, initializing environment configurations and launching the application by dynamically loading the main React component from `main.tsx`.                                        |

</details>

<details closed><summary>src</summary>

| File                                                                                            | Summary                                                                                                                                                                                               |
| ---                                                                                             | ---                                                                                                                                                                                                   |
| [index.css](https://github.com/kawing11a/RRSV-boiler/blob/master/src/index.css)                 | Global CSS styling for RRSV-boiler, establishing universal aesthetics and responsive design elements.                                                                                                 |
| [windowVars.ts](https://github.com/kawing11a/RRSV-boiler/blob/master/src/windowVars.ts)         | Defines global window variables and utility functions for configuring application settings, including API URLs, localization options, and development features within the RRSV-boiler project.        |
| [main.tsx](https://github.com/kawing11a/RRSV-boiler/blob/master/src/main.tsx)                   | Initializes the application, setting up Redux and routing, optionally mocking API calls for development.                                                                                              |
| [configureStore.ts](https://github.com/kawing11a/RRSV-boiler/blob/master/src/configureStore.ts) | Establishes the applications state management framework via Redux Toolkit, incorporating router, logger, and dynamic middleware for optimized development and production environments.                |
| [vite-env.d.ts](https://github.com/kawing11a/RRSV-boiler/blob/master/src/vite-env.d.ts)         | The `vite-env.d.ts` file integrates Vite-specific types with the project, ensuring compatibility and enhancing developer experience within the RRSV-boiler repositorys TypeScript-based architecture. |
| [App.css](https://github.com/kawing11a/RRSV-boiler/blob/master/src/App.css)                     | The `src/App.css` file defines the styling for the main application interface within the RRSV-boiler repository, focusing on layout, animations, and interactive elements such as logos and cards.    |
| [App.tsx](https://github.com/kawing11a/RRSV-boiler/blob/master/src/App.tsx)                     | App.tsx serves as the central component, integrating Error handling, global UI elements, and dynamic routing based on predefined paths and components.                                                |
| [routes.ts](https://github.com/kawing11a/RRSV-boiler/blob/master/src/routes.ts)                 | Defines the applications routing structure, mapping URL paths to components, and configuring breadcrumbs for navigation, including a catch-all for unmatched routes.                                  |
| [axiosMocker.ts](https://github.com/kawing11a/RRSV-boiler/blob/master/src/axiosMocker.ts)       | The `axiosMocker.ts` establishes mock HTTP responses for development, allowing for flexible testing by intercepting requests and providing custom responses.                                          |

</details>

<details closed><summary>src.helloworld.containers</summary>

| File                                                                                                            | Summary                                                                                                                                                                                                         |
| ---                                                                                                             | ---                                                                                                                                                                                                             |
| [HelloWorld.tsx](https://github.com/kawing11a/RRSV-boiler/blob/master/src/helloworld/containers/HelloWorld.tsx) | HelloWorld.tsx` serves as the introductory component within the RRSV-boiler project, displaying a simple greeting, showcasing the fundamental structure and usage of React components in the apps architecture. |

</details>

<details closed><summary>src.lingos</summary>

| File                                                                                           | Summary                                                                                                                                                                                                               |
| ---                                                                                            | ---                                                                                                                                                                                                                   |
| [interfaces.ts](https://github.com/kawing11a/RRSV-boiler/blob/master/src/lingos/interfaces.ts) | Defines localization types for global text elements, including application errors, messages, and common button labels, within the RRSV-boiler project architecture.                                                   |
| [index.ts](https://github.com/kawing11a/RRSV-boiler/blob/master/src/lingos/index.ts)           | The `src/lingos/index.ts` module centralizes localization and internationalization support for the RRSV-boiler project, facilitating multi-language support through dynamic language configurations and translations. |

</details>

<details closed><summary>src.core.states</summary>

| File                                                                                                      | Summary                                                                                                                                                               |
| ---                                                                                                       | ---                                                                                                                                                                   |
| [globalUIState.ts](https://github.com/kawing11a/RRSV-boiler/blob/master/src/core/states/globalUIState.ts) | Defines the GlobalUIState structure and initialization for managing UI states, language settings, and system dialogs within the RRSV-boiler application architecture. |
| [index.ts](https://github.com/kawing11a/RRSV-boiler/blob/master/src/core/states/index.ts)                 | Defines core state management structures for the RRSV-boiler project, including global UI states, remote API call status, and foundations for Redux actions.          |

</details>

<details closed><summary>src.core.slices</summary>

| File                                                                                                      | Summary                                                                                                                                                                                                                      |
| ---                                                                                                       | ---                                                                                                                                                                                                                          |
| [globalUISlice.ts](https://github.com/kawing11a/RRSV-boiler/blob/master/src/core/slices/globalUISlice.ts) | The `globalUISlice.ts` manages UI-related global states within the RRSV-boiler repository, such as language preferences, dialogue controls, and system error codes, leveraging Redux Toolkit for efficient state management. |

</details>

<details closed><summary>src.core.payloads</summary>

| File                                                                                        | Summary                                                                                                                                                                                  |
| ---                                                                                         | ---                                                                                                                                                                                      |
| [index.ts](https://github.com/kawing11a/RRSV-boiler/blob/master/src/core/payloads/index.ts) | Defines interfaces for payload structures used across the application, including error handling and API response formats, essential for data management in the repositorys architecture. |

</details>

<details closed><summary>src.core.libs</summary>

| File                                                                                        | Summary                                                                                                                                                                                                                                 |
| ---                                                                                         | ---                                                                                                                                                                                                                                     |
| [logger.ts](https://github.com/kawing11a/RRSV-boiler/blob/master/src/core/libs/logger.ts)   | Logger.ts enhances debugging and monitoring in RRSV-boiler by providing colored, timestamped log outputs across development environments.                                                                                               |
| [storage.ts](https://github.com/kawing11a/RRSV-boiler/blob/master/src/core/libs/storage.ts) | The `storage.ts` module in the RRSV-boiler repository serves as a utility for handling data persistence across sessions, allowing for configurable local and session storage management based on user IDs and environment settings.     |
| [error.ts](https://github.com/kawing11a/RRSV-boiler/blob/master/src/core/libs/error.ts)     | The `error.ts` within `src/core/libs` provides utility functions to interpret and format errors for UI display, supporting string, numeric, and native error types.                                                                     |
| [cookie.ts](https://github.com/kawing11a/RRSV-boiler/blob/master/src/core/libs/cookie.ts)   | The `cookie.ts` module in the `RRSV-boiler` repository manages authentication and general cookie storage, offering functionality for storing, retrieving, and deleting user authentication details and other cookie-related operations. |

</details>

<details closed><summary>src.core.utils</summary>

| File                                                                                       | Summary                                                                                                                                                                                                                               |
| ---                                                                                        | ---                                                                                                                                                                                                                                   |
| [text.ts](https://github.com/kawing11a/RRSV-boiler/blob/master/src/core/utils/text.ts)     | The `text.ts` module in the `RRSV-boiler` repository provides extensive text manipulation utilities, including formatting, validation, and sanitization functionalities, crucial for handling dynamic content across the application. |
| [object.ts](https://github.com/kawing11a/RRSV-boiler/blob/master/src/core/utils/object.ts) | Provides utility functions for object manipulation, including retrieval, cloning, comparison, and validation within the RRSV-boilers core functionality.                                                                              |
| [index.ts](https://github.com/kawing11a/RRSV-boiler/blob/master/src/core/utils/index.ts)   | Enhances JavaScripts native types with custom methods, integrating text and object utilities for streamlined data manipulation across the RRSV-boiler project.                                                                        |

</details>

<details closed><summary>src.core.containers</summary>

| File                                                                                                            | Summary                                                                                                                                                                                           |
| ---                                                                                                             | ---                                                                                                                                                                                               |
| [ErrorBoundary.tsx](https://github.com/kawing11a/RRSV-boiler/blob/master/src/core/containers/ErrorBoundary.tsx) | ErrorBoundary.tsx enhances application resilience by managing UI exceptions, coordinating with Redux for state management, and integrating with navigation for error-driven routing.              |
| [GlobalUI.tsx](https://github.com/kawing11a/RRSV-boiler/blob/master/src/core/containers/GlobalUI.tsx)           | GlobalUI.tsx serves as a foundational layout component within the RRSV-boiler project, responsible for rendering core UI elements like Dialogs, NavBars, and Sidebars along with dynamic content. |
| [Catch.tsx](https://github.com/kawing11a/RRSV-boiler/blob/master/src/core/containers/Catch.tsx)                 | Catch.tsx, within the RRSV-boilers `core/containers` directory, implements a higher-order component for error handling in React, enabling customized response to errors with optional logging.    |
| [NoMatch.tsx](https://github.com/kawing11a/RRSV-boiler/blob/master/src/core/containers/NoMatch.tsx)             | NoMatch.tsx presents a 404 error UI within RRSV-boilers architecture, offering redirection to the dashboard for missing pages.                                                                    |

</details>

<details closed><summary>src.core.enums</summary>

| File                                                                                       | Summary                                                                                                                                                                   |
| ---                                                                                        | ---                                                                                                                                                                       |
| [system.ts](https://github.com/kawing11a/RRSV-boiler/blob/master/src/core/enums/system.ts) | Defines enums for remote operation statuses, waiting operations, and HTTP status codes, centralizing API and system state management within the RRSV-boiler architecture. |

</details>

<details closed><summary>src.core.reducers</summary>

| File                                                                                        | Summary                                                                                                                                                                                                   |
| ---                                                                                         | ---                                                                                                                                                                                                       |
| [index.ts](https://github.com/kawing11a/RRSV-boiler/blob/master/src/core/reducers/index.ts) | The `src/core/reducers/index.ts` serves as the central point for combining reducers, integrating routing logic with application state management, crucial for the repositorys state control architecture. |

</details>

<details closed><summary>types</summary>

| File                                                                                            | Summary                                                                                                                                                                                                |
| ---                                                                                             | ---                                                                                                                                                                                                    |
| [redux-reset.d.ts](https://github.com/kawing11a/RRSV-boiler/blob/master/types/redux-reset.d.ts) | The `redux-reset.d.ts` file defines TypeScript typings for a customizable function that resets Redux store state, integrating seamlessly into the RRSV-boiler project’s state management architecture. |

</details>

<details closed><summary>public</summary>

| File                                                                               | Summary                                                                                                                                                    |
| ---                                                                                | ---                                                                                                                                                        |
| [index.php](https://github.com/kawing11a/RRSV-boiler/blob/master/public/index.php) | The `index.php` serves as the entry point for server-side rendering in the RRSV-boiler project, integrating the frontend built with React to PHP backends. |

</details>

---

##  Getting Started

###  Prerequisites

Ensure you have the following installed on your local machine:

* **TypeScript**: `version x.y.z`

###  Install

1. Clone the RRSV-boiler repository:

```sh
git clone https://github.com/kawing11a/RRSV-boiler
```

2. Change to the project directory:

```sh
cd RRSV-boiler
```

3. Install the dependencies:

```sh
yarn
```

###  Using `RRSV-boiler`

Use the following command to run RRSV-boiler:

```sh
# bundle the project for production
yarn bundle

# dev environment
yarn dev
```

###  Tests

Use the following command to run tests:

```sh
npm test
```

---

##  Project Roadmap

- [X] `► integrate basic template with react-router, redux-toolkit and styled component`
- [ ] `► api mock example`
- [ ] `► useful components starter pack`

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/kawing11a/RRSV-boiler/issues)**: Submit bugs found or log feature requests for the `RRSV-boiler` project.
- **[Submit Pull Requests](https://github.com/kawing11a/RRSV-boiler/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/kawing11a/RRSV-boiler/discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/kawing11a/RRSV-boiler
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="center">
   <a href="https://github.com{/kawing11a/RRSV-boiler/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=kawing11a/RRSV-boiler">
   </a>
</p>
</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-overview)

---
