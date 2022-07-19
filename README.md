<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="#">
    <img src="https://reactjs.org/logo-og.png" alt="Logo" width="190" height="99">
  </a>

  <h3 align="center">Product Checkout</h3>

  <p align="center">
    An flexible products checkout module!
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project


> Folder structure:

    .
    ├── ...
    ├── cypress
    │   ├── ...
    │   └── e2e                # End to end tests
    ├── public
    └── src
        ├── assets
        ├── components
        ├── services
        │   └── checkout.ts    # Core service, contain all checkout logic
        ├── types              # Typescript typings
        ├── contants.ts        # Contants some sample data like products, pricing rules
        └── ...

### Built With

* [ReactJS](https://reactjs.org/)
* [ViteJS](https://vitejs.dev/)
* [Typescript](https://www.typescriptlang.org/)
* [Cypress](https://www.cypress.io/)

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

In this project we using pnpm. So please run this command to install pnpm first, if you don't have it on your local machine.
* pnpm
  ```sh
  npm install pnpm@latest -g
  ```

### Installation

1. Install NPM packages
   ```sh
   pnpm install
   ```
<!-- USAGE EXAMPLES -->
## Usage

* For development
    ```sh
    pnpm run dev
    ```

* For e2e test
    ```sh
    pnpm run test:e2e
    ```

* For production build & preview
    ```sh
    pnpm run build && pnpm run preview
    ```

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [NPM Vs YARN Vs PNPM Comparison](https://www.atatus.com/blog/npm-vs-yarn-vs-pnpm/)
* [Use Vite for React Apps instead of CRA](https://dev.to/nilanth/use-vite-for-react-apps-instead-of-cra-3pkg)
