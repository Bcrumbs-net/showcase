<p align="center">
  <a href="https://bcrumbs.net/showcase">
    <img src="https://cdn.dconfig.com/globalresources/1132/Resources/logo/Showcase%20Horizontal.png" alt="Showcase logo" />
  </a>
</p>

<h3 align="center">Open-source frontend for a headless CMS, self-hosted or Cloud you’re in control.</h3>

<p align="center"><a href="https://bcrumbs.net/showcase">Cloud</a></p>


<p align="center">
  <img src="https://img.shields.io/badge/nextjs-v12-blue.svg" alt="NextJS Version" />
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license" />
  <img src="https://dev.azure.com/dConfig/BC-Mono/_apis/build/status%2FShowcase%20CI?branchName=master" alt="CI">
</p>

Showcase frontend project is a NextJS project that contains a collection of components organized as sections that can be combined to create rich landing pages.
In case you want a cloud version of Showcase with headless CMS to manage your data, you can check the cloud version from the next link:
[bcrumbs.net/showcase](https://bcrumbs.net/showcase) 

## Contents

- [Contents](#contents)
- [Features](#features)
- [Running locally](#running-locally)
- [Your data on our cloud](#your-data-on-our-cloud)
  - [Testing locally](#testing-locally)
  - [Deploying the code](#deploying-the-code)
- [Create your own theme](#create-your-own-theme)
- [Create your own section](#create-your-own-section)
- [Community \& Support](#community--support)
- [Contributing](#contributing)
- [License](#license)

## Features
- A large collection of landing page sections for different uses
- A large collection of basic components in case you want to implement your own sections
- Fully customizable through global styles and theme variables
- Designed to work smoothly with any headless CMS that can provide the contents with JSON format

## Running locally
First step is to install npm dependeinces by calling:
```console
npm i
```
or
```console
yarn
```
Afterwards you can run the project locally by using the next command:
```console
npm run dev
```
Or
```console
yarn run dev
```

## Your data on our cloud

### Testing locally
If you stored your data on a Showcase headless CMS account, you can tell the code to fetch the data from that account by adding your domain linked to that account as a query-string parameter in the URL:
```
http://localhost:3000/?host=<your-domain>
```
In order to build the project you can use:
```console
npm run build
```
Or
```console
yarn run build
```

Also you have the option to build the project as a Docker image by using the next command:
```console
docker build .
```

You can render a section using a specific content by using the `RenderSectionWithContent`, as the next example:
--example will be added soon--


### Deploying the code
--will be added soon (we should explain how the custom website should be linked to our CMS)--

## Create your own theme
--will be added soon--

## Create your own section
--will be added soon--

## Community & Support
--will be added soon--

## Contributing
You can request contributing to this platform on the next email: contribute@bcrumbs.net

## License
Showcase frontend project is released under the [MIT License](LICENSE).
Please make sure you understand its [implications and guarantees](https://writing.kemitchell.com/2016/09/21/MIT-License-Line-by-Line.html).