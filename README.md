# GET YOUR NC NEWS

Get Your NC News is a front end user webview built using the NC News backend api.

All relevant links are listed below:

Back-end:  
[GitHub repository](https://github.com/Soupcodes/Alan-NC-News)  
[Hosted version](https://alansoup-nc-news.herokuapp.com)

Front-end:  
[GitHub repository](https://github.com/Soupcodes/Get-Your-NC-News)  
[Hosted version](https://alan-nc-news.netlify.com/)

## Getting Started

The following steps outline how to get the front-end repository running on your local machine for visual purposes, as well as providing a general guideline for live deployment.

## 1 - Clone the repository

From your terminal, clone the repository to your desired folder

```bash
# git clone https://github.com/Soupcodes/Get-Your-NC-News.git

# cd Get-Your-NC-News
```

## 1a - Create your own repository

From your terminal, clone the repository to your desired folder

```bash
# git clone https://github.com/Soupcodes/Alan-NC-News.git

# cd Alan-NC-News
```

### 1a - Create your own repository

On GitHub create your own repository but **DO NOT to initialise with a README or .gitignore as these already included.**

Next, link your local copy to your newly created GitHub repo. Use the following terminal commands, making sure to check the git remotes with each step (`git remote -v`):

```bash
git remote remove origin

# This prevents you from pushing to the original Get-Your-NC-News repo.
```

```bash
git remote add origin <YOUR-GITHUB-URL>

# This will add your GitHub location to your local git repository.

# Confirm this by checking the new git remote.
```

## 2 - Setting up your environment and prerequisites

Once in your editor, the dependencies required for testing and deployment are listed in the **`package.json`** file.

Run the following command in your CLI to install all dependencies needed to run and deploy the site:

```bash
# npm i
```

Minimum version are:

```javascript
"dependencies": {
  "@reach/router": "^1.2.1",
  "axios": "^0.19.0",
  "g": "^2.0.1",
  "netlify-cli": "^2.12.0",
  "react": "^16.8.6",
  "react-dom": "^16.8.6",
  "react-loader-spinner": "^3.1.2",
  "react-scripts": "3.0.1"
},
```

### 3 - Run locally

With all dependencies installed, you can run `npm start` in the terminal to see a locally hosted version of the site.

### 4 - Deploy a draft build URL

To also test how the site will function in a live user setting, carry out the following steps in your terminal:

```bash
# npm run build
```

This script bundles your code into files readable by most modern browsers. **Don't change any files in the build folder**.

```bash
# netlify deploy
```

- You will need to authorise Netlify with GitHub and select create and configure a new site.
- Input a site name (this is the URL users will see when the site is fully deployed)
- Connect to your account
- When asked for the deploy path, enter `./build` to point to the build directory in the repository.

This will deploy a **draft version** to a url displayed in your terminal - `eg. https://5c13ab16055b9be1725868e6--your-site-name.netlify.com`, Ctrl + click the link to view and test how the site will function in a live setting.

### 5 - Deploy to a production build URL

Once you are happy with a draft test of the site, a production version can be deployed. Run the following commands:

```bash
# netlify deploy --prod
```

Specify `./build` as the path again to finish deployment.

### 6 - Redeployment

Should you make amends to the code and want to update live visuals, git push to your copy of the GitHub repository and run through steps 4 & 5 again with the following commands:

```bash
# npm run build
```

```bash
# netlify deploy
```

```bash
# netlify deploy --prod
```

You do not need to respecify the site name as reployment will overwrite information already attached to that URL, just ensure `./build` is entered when deploy path shows up in terminal for both draft and production deployments.

### 7 - Debugging Netlify

Any issues with deployment on Netlify can be debugged by Ctrl + clicking on the `Logs` url that appears in the terminal upon initial deployment.

### 8 - Useful docs

Should you run into any issues utilising pre-requisite dependencies, or deployment, the official documentation provides useful insight as a guideline as well as for troubleshooting purposes. See below.

[react](https://reactjs.org/docs/hello-world.html)

[@reach/router](https://reach.tech/router)

[axios](https://www.npmjs.com/package/axios)

[netlify-cli](https://www.netlify.com/docs/)

#### Author: Alan Tong
