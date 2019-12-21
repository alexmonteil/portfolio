# Reactfolio ⚡️ [![GitHub](https://img.shields.io/github/license/alexmonteil/reactfolio)](https://github.com/alexmonteil/reactfolio/blob/master/LICENSE.md) ![GitHub issues](https://img.shields.io/github/issues/alexmonteil/reactfolio) ![GitHub stars](https://img.shields.io/github/stars/alexmonteil/reactfolio) ![GitHub forks](https://img.shields.io/github/forks/alexmonteil/reactfolio)

## A Fast, modern and responsive portfolio template for Developers, Artists, or anyone looking to showcase their projects !

Feel free to use it as-is or customize it as much as you want. I am glad to contribute to the Developers community !

<h2 align="center">
  <img src="https://github.com/alexmonteil/reactfolio/blob/master/examples/reactfolio.png" alt="Reactfolio" width="600px" />
  <br>
</h2>

## Features
✔️ Modern UI Design\
✔️ Single Page Layout\
✔️ Built with React, Tachyons, Grid & Flex\
✔️ Light Clean Code\
✔️ Fully Responsive\
✔️ SEO friendly HTML & CSS\
✔️ Updated Guide & Documentation

To view a live example, **[click here](https://alexmonteil.github.io/reactfolio/)**

---

## Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites 📋

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```

---

## How To Use 🔧

From your command line, clone and run Reactfolio:

```bash
# Clone this repository
$ git clone https://github.com/alexmonteil/reactfolio

# Go into the repository
$ cd reactfolio

# Remove current origin repository
$ git remote remove origin

# Install dependencies
$ npm install

# Start development server
$ npm start
```

**NOTE**:

If your run into issues installing the dependencies, use this command:

```bash
# Install dependencies with all permissions
$ sudo npm install --unsafe-perm=true --allow-root

# Start development server
$ npm start
```

## Instructions:


### Step 1 - THE DATA

Inside `src/projects/projects.js`

- Each project is a JavaScript Object
- Edit the name, thumbnail, type, description and url properties with your projects data
- Remove the unused objects or add more objects as needed for new projects

```javascript
[
    {
        id: "1",
        name: "Project 1",
        thumbnail: "https://raw.githubusercontent.com/alexmonteil/reactfolio/master/src/thumbnails/binary-vision.png",
        type: "react",
        description: "Project 1 description here",
        url: "#"
    },

    {
        id: "2",
        name: "Project 2",
        thumbnail: "https://raw.githubusercontent.com/alexmonteil/reactfolio/master/src/thumbnails/starwars-api.png",
        type: "react",
        description: "Project 2 description here",
        url: "#"
    }
];
```

- Create a GitHub repository to store screenshots of your projects
- Upload screenshots of your projects to the repository
- Paste the URL addresses to your screenshots in the `tumbnails` sections of your JSON file


### Step 2 - THE TEMPLATE


There are 7 sections total:

- 1 is the main App container found at : `/src/containers/App.js` 
- 6 are the app components found at `/src/components/`

Follow the guide below on how to edit them, I also included comments in the code to guide you.

**Header Section**


Inside the file `src/components/Header.js`

- inside the first `<h1>` tag, edit your name.
- inside the second `<h1>` tag, create your greeting.

```html
<div className='headerstyle vh-100 w-100'>
  <article className='overlay min-vh-100 w-100 flex flex-column flex-wrap justify-center'>
      <div className='articletext pa4 white'>
      <h1 className='f1 fw3 f-subheadline-l'>Hi, my name is John Doe</h1>
      <br/>
      <h1 className='f1 fw3 f-subheadline-l'>Welcome to my Portfolio !</h1>
      <br/>
      <a href='#About' className='toAboutButton mt2'>About Me</a>
    </div>
  </article>
</div>
```

**About Section**


Inside the file `src/components/About.js`

- inside the first 4 `<p>` tags, write a description about yourself.


```html
<div className='aboutstyle vh-100 w-100'>
  <h1 className='abouttitle shadow-1 center br3'>About Me</h1>
  <article className='articleabout w-80 tc center br3 mt4 mb2'>
    <p>First paragraph about yourself</p>
    <p>Second paragraph about yourself</p>
    <p>Third paragraph about yourself</p>
    <p>Fourth paragraph about yourself</p>
    <hr className='w-80 center' />
    <p className='mb4'>Thanks for viewing my portfolio</p>
    <a href='#Portfolio' className='mv2 toPortfolioButton'>Portfolio</a>
  </article> 
</div>
```

**Portfolio Section**

Inside the file `src/components/Portfolionav.js`

- Edit the `name` and `value` attributes inside the `<input>` tags to reflect your projects types.

```html
<div className='pa2 mv2'>
            <input 
                type='submit'
                name='All'
                value='All'
                id='All'
                onClick={resetWebsiteType}
                className='portfolioButton'
                />

            <input 
                type='submit'
                name='Css'
                value='Css'
                id='Css'
                onClick={setWebsiteType}
                className='portfolioButton'
                />

            <input 
                type='submit'
                name='Bootstrap'
                value='Bootstrap'
                id='Bootstrap'
                onClick={setWebsiteType}
                className='portfolioButton'
                />

            <input 
                type='submit'
                name='Javascript'
                value='Javascript'
                id='Javascript'
                onClick={setWebsiteType}
                className='portfolioButton'
                />

            <input 
                type='submit'
                name='React'
                value='React'
                id='React'
                onClick={setWebsiteType}
                className='portfolioButton'
                />

</div>

```

**Tools Section**


Inside the file `src/components/Tools.js

- Search for icons to use at: https://fontawesome.com/icons?d=gallery
- I recommend using no more than 12 icons.

Icons have an array of 2 strings identifying them:

- a prefix such as: `fa`, `fab`, or other
- an icon name such as: `html5`, `node`, `github`, or other

Each icon has 2 classes inside the `className` attribute:

- `'icon'` which should NOT be removed
- `'iconName'` such as: `'iconHtml5'` which you can edit or replace with your custom class

To add a custom class to an icon to change its hover effect:

- Create your class in the file located at: `src/components/Tools.css`
- inside the file `src/components/Tools.js` inside the `<FontAwesomeIcon>` tag edit the `className` attribute and replace the second class with your new custom class.

```html
<div className='toolsstyle vh-100 w-100'>
  <h1 className='toolstitle shadow-1 center br3'>Tools</h1>
  <div className='toolsgrid w-80 center'>
    <font><FontAwesomeIcon icon={['fab', 'html5']} className='icon iconHtml5' /><br/>HTML 5</font>
    <font><FontAwesomeIcon icon={['fab', 'css3-alt']} className='icon iconCss3' /><br/>CSS 3</font>
    <font><FontAwesomeIcon icon={['fab', 'js-square']} className='icon iconJs' /><br/>Javascript</font>
    <font><FontAwesomeIcon icon={['fab', 'node']} className='icon iconNode' /><br/>Node.js</font>
    <font><FontAwesomeIcon icon={['fab', 'react']} className='icon iconReact' /><br/>React.js</font>
    <font><FontAwesomeIcon icon={['fab', 'bootstrap']} className='icon iconBootstrap' /><br/>Bootstrap</font>
    <font><FontAwesomeIcon icon={['fab', 'git-alt']} className='icon iconGit' /><br/>Git</font>
    <font><FontAwesomeIcon icon={['fab', 'github']} className='icon iconGithub' /><br/>Github</font>
    <font><FontAwesomeIcon icon={['fac', 'postgre']} className='icon iconPostgresql' /><br/>PostgreSQL</font>
    <font><FontAwesomeIcon icon={['fas', 'database']} className='icon iconSql' /><br/>SQL</font>
    <font><FontAwesomeIcon icon={['fac', 'heroku']} className='icon iconHeroku' /><br/>Heroku</font>
    <font><FontAwesomeIcon icon={['fab', 'npm']} className='icon iconNpm' /><br/>npm</font>
  </div>
</div>
```

To create your custom icons out of SVG files: 

- add your `svg` icon files inside the `src/custom-icons/` folder.
- inside the file at: `src/custom-icons/custom-icons.js`, create your icon as a variable containing an object as follows:
- the `prefix` property of your icon object contains a 3 letter string, I would use `fac` as it is not used by Font Awesome
- the `iconName` property is a string identifying your icon: choose whatever name you want
- the `icon` property is an array of the form:

```javascript
icon: [
        24, 24, // width, height
        [], // ligatures leave empty array if you don't know
        null, // unicode if relevant
        'M17.128 0a10.134 10.134 0 0 0-2' // svg path data (path d), you can find this in your svg file
]
```


**Contact Section**


Inside the file `src/components/Contact.js`

- inside the first `<a>` tag, within the `href` attribute after `mailto:`, paste your email address
- inside the second `<a>` tag, within the `href` attribute, paste the URL to your linkedin profile
- inside the third `<a>` tag, within the `href` attribute, paste the URL to your github profile


```html
<div className='contactstyle vh-100 w-100 center'>
  <h1 className='contacttitle shadow-1 center br3'>Contact</h1>
  <div className='mailsection w-70 center ma4'>
    <h2 className='f1 mb5 center dosisFont'>Send me an email :</h2>
    <a className='clickToMailButton' href='mailto:yourEmailAddress@example.com'>Email me</a>
  </div>
  <h2 className='f2 ma5 center dosisFont'>Here are my social media platforms</h2>
  <div className='contactgrid w-40 center'>
    <a href='#LinkedIn-URL' className='iconLinkedin' rel='noopener noreferrer' target='_blank'><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
    <a href='#Github-URL' className='iconGithub' rel='noopener noreferrer' target='_blank'><FontAwesomeIcon icon={['fab', 'github']} /></a>
  </div>
</div>
```

**Footer Section**


Inside the file `src/components/Footer.js`

- inside the `<a>` tag, within the `href` attribute, paste the URL to your linkedin profile

```html
<div id='Footer' className='footerstyle tc'>
  <p>Created by <a href='#LinkedIn-URL' rel='noopener noreferrer' target='_blank'>John Doe</a></p>
</div>
```

**App Section**


Inside the file `src/containers/App.js`

- On the `import`statement below, add your created icons.
- The `import` statement should look like below

```javascript
import { fapostgre, faheroku, yourNewIcon } from '../custom-icons/custom-icons';
```

- In the following statement, add your imported icons separated by comas

```javascript
library.add(fab, fas, fapostgre, faheroku);
```


### Step 2 - STYLES

Change the color theme of the website ( choose 2 colors to create a gradient ):

- inside `src/components/Header.css`, within the `.overlay` class, edit the `background` property with your colors in rgba format.

```css
.overlay {
    background: linear-gradient(45deg, rgba(128, 255, 204, 0.5), rgba(153, 204, 255, 0));
    background-size: cover;
    position: absolute;
    z-index: 1;
    top: 3.75rem;
    left: 0;
}
```

**NOTE**: I highly recommend to checkout gradients variations on [UI Gradient](https://uigradients.com/#BrightVault)

---

## Deployment 📦

To deploy on github pages: 

Add Homepage: 

- Open your package.json file present inside your react app and add homepage property.
- `"homepage":"https://yourusername.github.io/repository-name"`
- Replace the above url with your github account and repository names.

Install gh-pages:

- `npm install --save gh-pages`

Deploy script:

```json
"scripts":{
 "predeploy": "npm run build",
 "deploy": "gh-pages -d build",
}
```

- Now in your terminal run `npm run deploy`

Set up source to gh-pages branch :

- open your GitHub code repository
- scroll down to GitHub Pages
- in source, choose gh-pages branch

<h2 align="center">
  <img src="https://github.com/alexmonteil/reactfolio/blob/master/examples/react-ghpages.png" alt="Reactfolio" width="600px" />
  <br>
</h2>

## Technologies used 🛠️

- [React](https://reactjs.org) - JavaScript library to build reuseable components
- [Tachyons](https://tachyons.io) - CSS library
- [react-fontawesome](https://github.com/FortAwesome/react-fontawesome) - Library to implement Font Awesome icons in react
- [react-scrollable-anchor](https://github.com/gabergg/react-scrollable-anchor) - Library for smooth scrolling in react

## Authors

- **Alex Monteil** - [https://github.com/alexmonteil](https://github.com/alexmonteil)

## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
