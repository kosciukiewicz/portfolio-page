# Personal Portfolio Page :brain:

 <p align="center">
    <a href="https://github.com/kosciukiewicz/portfolio-page/actions/workflows/deploy-gh-pages.yml">
      <img src="https://github.com/kosciukiewicz/portfolio-page/actions/workflows/deploy-gh-pages.yml/badge.svg" />
    </a>
    <a href="https://github.com/kosciukiewicz/protfolio-page/issues">
      <img src="https://img.shields.io/github/issues/kosciukiewicz/portfolio-page"/>
    </a>
    <a href="https://github.com/kosciukiewicz/portfolio-page/stargazers">
      <img src="https://img.shields.io/github/stars/kosciukiewicz/portfolio-page"/>
    </a>
    <a href="https://github.com/kosciukiewicz/portfolio-page/network/members">
      <img src="https://img.shields.io/github/forks/kosciukiewicz/portfolio-page"/>
    </a>
    <a href="https://github.com/kosciukiewicz/portfolio-page/commits/master">
      <img src="https://img.shields.io/github/last-commit/kosciukiewicz/portfolio-page/master"/>
    </a>
    <a href="https://github.com/kosciukiewicz/portfolio-page/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/kosciukiewicz/portfolio-page"/>
    </a>
  </p>

### [Live demo](http://kosciukiewicz.tech) :link:

Simple and minimalistic personal portfolio page built for personal use from scratch using React, TypeScript and Ant Design. Feel free to use and customize it to fit Your own needs.

## Used technologies

- Typescript
- React
- Ant Design
- Github Actions

## Customization guide

Customize the site content effortlessly by editing the `.json` files located in the 'src/data/' directory. Simply modify the relevant values within these files to tailor the content according to your preferences.

## Available Scripts

In the project directory, you can run:

`yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

`yarn eslint`

Run eslint  - the tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

`yarn prettier`

Run Prettier code formatter. Run with `--write` flag to format the files in-place.

## Deployment

#### Manual deploy of static content on separate branch

You can deploy the page manually running the built-in command:

 `yarn deploy`

The built static content will be pushed to dedicated `gh-pages` branch and served via Github Pages.

#### Automated Deployment with GitHub Actions 

The repository is configured with GitHub Actions for automated deployment to GitHub Pages (`deploy-gh-pages.yml` workflow). Whenever changes are pushed to the `master` branch, the GitHub Actions workflow will automatically build and deploy the project.

If you want to use this method, remember to turn on the appriopriate option in Github Pages section of reposittory settings.

## Issues and Bug Reports
If you encounter any issues or bugs, please create an issue on this repository.

## License
This project is licensed under the MIT License.