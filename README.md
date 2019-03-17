# Crowstart Webpack-4 Kit v1.0
---
Webpack 4 Starter Kit (custom HTML & CSS). 

## Table of Contents
---
- [# Crowstart Webpack-4 Kit v1.0](#crowstart-webpack-4-kit-v10)
- [## Table of Contents](#table-of-contents)
- [## About the Project](#about-the-project)
- [## Status](#status)
- [## Directory Structure](#directory-structure)
- [## Getting Started](#getting-started)
- [## Built With](#built-with)
  - [Requirements](#requirements)
    - [How install Requirements](#how-install-requirements)
  - [Dependencies](#dependencies)
    - [How install Dependencies](#how-install-dependencies)
- [## How to Use](#how-to-use)
  - [webpack.config.js](#webpackconfigjs)
  - [index.html](#indexhtml)
  - [.gitkeep](#gitkeep)
  - [.gitignore](#gitignore)
- [Changelog](#changelog)
- [## Authors](#authors)
- [## License](#license)

## About the Project
---
This is a very basic starter for a simple HTML and CSS project with Webpack without CSS framework. When you build the project, you will get in `dist` folder HTML files, where is automatically added `bundle.js` in the bottom of the body and `main.css` in the bottom of head tag.
In dist folder also will be created new folder `assets`, and inside it, three folders `css`, `img`, `js`, and every of these will contain files from your `src` folder.
Please feel free to clone this starter and change it how is suitable for your project.
The main benefit is creating separate files in separate folders, which is excellent for basic small projects.


## Status
---
![node](https://img.shields.io/node/v/webpack.svg) 
![npm](https://img.shields.io/npm/v/webpack.svg)  ![build](https://img.shields.io/travis/webpack/webpack/master.svg) 
![webpack](https://img.shields.io/badge/Webpack-v4.29.6-blue.svg)
![html](https://img.shields.io/badge/HTML-v5-orange.svg)
![sass](https://img.shields.io/badge/SASS-v3.7.3-pink.svg) ![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)


## Directory Structure
---
```
┌── dist // all children folders and files are visible after build
│   ├── assets
│   │   ├── css
│   │   │   └── main.css
│   │   ├── img
│   │   │   └── webpack4.jpg
│   │   └── js
│   │       └── bundle.js
│   ├── about.html
│   ├── index.html
│   └── .gitkeep
├── src
│   ├── img
│   │   └── webpack4.jpg
│   ├── js
│   │   ├── bar-cjs.js // this file is just for the testing
│   │   ├── foo.js // this file is just for the testing
│   │   └── index.js
│   ├── scss
│   │   └── main.scss
│   ├── about.html
│   └── index.html
├── .gitignore
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
└── webpack.config.js

```

## Getting Started
---
This section provide instructions for other developers how to use Crowstart Webpack 4 Kit v1.0

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

- If needed, [install](http://blog.nodeknockout.com/post/65463770933/how-to-install-node-js-and-npm) `node` and `npm` (Node Package Manager).
- Clone this repo with `git clone https://github.com/crowscript/webpack-4.git` or download the zip. For this step, use npm terminal.
- In terminal, `cd` to the folder containing your project. Alternatively, you can type `cd ` and drag the location of the folder into your terminal and hit enter.
- In terminal, type `npm install`. If (and _only_ if) `npm install` isn't working, try `sudo npm install`. This should install all [dependencies](#dependencies).
- In terminal, enter `npm run build` to make dist folder or/and `npm run server` for server start (server itself won't to make dist folder).
- Open in your browser this link `http://localhost:8080`.!
- Edit your code inside of the `src` folder.
- Your complied css, html, and javascript files will be created and updated in `dist/`. Never edit files within the `dist/` folder, as it gets deleted frequently.
- When you want to stop the webpack server, hit `ctrl + C`.

	
## Built With
---

- [Webpack 4](https://webpack.js.org/)
- [SASS](https://sass-lang.com/)


### Requirements
What things you need to install the software and how to install them:

- Node/NPM

#### How install Requirements
How to install the requirements.

`npm install`

**tl;dr**: [Download CrowStart](https://github.com/crowscript/webpack-4.git) and run `npm install` in that directory to get started.

To take advantage of CrowStart Web Starter Kit you need to:

1. Get a copy of the code.
2. Install the dependencies if you don't already have them.
3. Modify the application to your liking.
4. Deploy your production code.


### Dependencies
Dependencies that need to be installed for building/using your project
```
    "@babel/core": "^7.3.4",
    "@babel/preset-env": "^7.3.4",
    "babel-loader": "^8.0.5",
    "css-loader": "^2.1.1",
    "file-loader": "^3.0.1",
    "html-loader": "^0.5.5",
    "html-webpack-plugin": "^3.2.0",
    "mini-css-extract-plugin": "^0.5.0",
    "node-sass": "^4.11.0",
    "sass-loader": "^7.1.0",
    "style-loader": "^0.23.1",
    "webpack": "^4.29.6",
    "webpack-cli": "^3.2.3",
    "webpack-dev-server": "^3.2.1"
```
#### How install Dependencies
All dependencies are will be installed with:
`
npm install 
`

## How to Use
---
Open in your favorite code editor folder **crowstart-webpack-4_kit-v1.0** and start editing files in `src` folder.
If you want to change something in Webpack 

### webpack.config.js
Here is setup of Webpack. So please before change it, read the documentation of webpack [HERE](https://webpack.js.org/guides)

### index.html
This is the default HTML skeleton. Keep in mind - javascript and CSS will be automatically added in your HTML after build, so don't add them in `src/index.html` and `src/about.html`

### .gitkeep
This is the file to keep empty folder in Github commit.

### .gitignore
`.gitignore` should primarily be used to avoid certain project-level files and directories from
being kept under source control. Different development-environments will benefit from different collections of ignores.

For example, add the following to your `~/.gitconfig`, where the `.gitignore`
in your HOME directory contains the files and directories you'd like to
globally ignore:

```gitignore
[core]
    excludesfile = ~/.gitignore
```

IMPORTANT:
in `.gitignore` file in the line 59 you can find  **Build Systems** below of it you can change if you want to see in github your `dist` folder, just remove `dist/*`

- More on global ignores: https://help.github.com/articles/ignoring-files/
- Comprehensive set of ignores on GitHub: https://github.com/github/gitignore



## Changelog

**v1.0**
	- Just the basic version, in the next versions expect more features ;-)

## Authors
---
* **Stanislav Vranic** - *Developing* - [@crowscript](http://crowscript.com)

## License
---
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
[Choose the License](https://choosealicense.com/)


**[Back to top](#table-of-contents)**



