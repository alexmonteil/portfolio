# Reactfolio ⚡️ [![GitHub](https://img.shields.io/github/license/alexmonteil/reactfolio?color=blue)](https://github.com/alexmonteil/reactfolio/blob/master/LICENSE.md) ![GitHub stars](https://img.shields.io/github/stars/alexmonteil/reactfolio) ![GitHub forks](https://img.shields.io/github/forks/alexmonteil/reactfolio)

## A Fast, modern and responsive portfolio template for Developers, Artists, or anyone looking to showcase their projects !

Feel free to use it as-is or customize it as much as you want. I am glad to contribute to the Developers community !

<h2 align="center">
  <img src="mygif" alt="Reactfolio" width="600px" />
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

To view a demo example, **[click here](URL)**\
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

## Template Instructions:

### Step 1 - STRUCTURE

There are 7 sections total:

- 1 is the main App container found at : `/src/containers/App.js` 
- 6 are the app components found in `/src/components/`

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
    <p>Hi, my name is Alex Monteil. I have been doing software development for a year. During this time, I have taught myself some of the latest web technologies and built all sorts of web applications.</p>
    <p>Software development is my passion. I started doing it in my spare time for fun and it quickly grew into a career interest. This is why I constantly look to grow and learn new technologies in the field. I simply enjoy it !</p>
    <p>I have been working mainly with frameworks such as React, Redux and Express to create responsive and efficient web applications. </p>
    <p>My interests extend to machine learning, natural language processing and computer vision as I seek to build smart web applications with those capabilities.</p>
    <hr className='w-80 center' />
    <p className='mb4'>Thanks for viewing my portfolio</p>
    <a href='#Portfolio' className='mv2 toPortfolioButton'>Portfolio</a>
  </article> 
</div>
```

**Portfolio Section**

Inside the file `src/components/Portfolio.js` :

- inside the `fetch()` method paste the URL to the JSON file that contains your projects data

```javascript
componentDidMount() {
        fetch('https://alexmonteil.github.io/projects-json/websites.json')
        .then(response => response.json())
        .then(websites => this.setState({websites: websites}))
        .catch(err => console.log(err));
}
```

**Contact Section**

- On `<p>` tag with class-name `.contact-wrapper__text`, include some custom call-to-action message.
- On `<a>` tag, put your email address on `href` property.

```html
<!-- **** Contact Section **** -->
<section id="contact">
  <div class="container">
    <h2 class="section-title">
      Contact
    </h2>
    <div class="contact-wrapper">
      <p class="contact-wrapper__text">
        Put here your contact CTA
      </p>
      <a
        target="_blank"
        class="cta-btn cta-btn--resume"
        href="mailto:example@email.com"
        >Call to Action</a
      >
    </div>
  </div>
</section>
<!-- /END Contact Section -->
```

**Footer Section**

- Put your social media link on each `<a>` links.
- If you have more social-media accounts, see [Font Awesome Icons](https://fontawesome.com/v4.7.0/icons/) to put the corresponding additional social icon `.class`
- You can delete or add as many `a` links your want.

```html
<footer class="footer navbar-static-bottom">
  ...
  <div class="social-links">
    <a href="#!" target="_blank">
      <i class="fa fa-twitter fa-inverse"></i>
    </a>
    <a href="#!" target="_blank">
      <i class="fa fa-codepen fa-inverse"></i>
    </a>
    <a href="#!" target="_blank">
      <i class="fa fa-linkedin fa-inverse"></i>
    </a>
    <a href="#!" target="_blank">
      <i class="fa fa-github fa-inverse"></i>
    </a>
  </div>
  ...
</footer>
```

### Step 2 - STYLES

Change the color theme of the website ( choose 2 colors to create a gradient ):

Go to `src/styles/abstracts/_variables.scss` and only change the values on this classes `$main-color` and `$secondary-color` to your prefered HEX color

```scss
// Defaut values
$main-color: #02aab0;
$secondary-color: #00cdac;
```

**NOTE**: I highly recommend to checkout gradients variations on [UI Gradient](https://uigradients.com/#BrightVault)

---

## Deployment 📦

Once you have done with your setup. You need to put your website online!

I highly recommend to use [Netlify](https://netlify.com) to achieve this on the EASIEST WAY

Because this template use Webpack maybe you can get errors during deployment, Please watch my step-by-step video tutorial to successfully upload your Simplefolio Website on Netlify!

**[WATCH NOW MY STEP-BY-STEP TUTORIAL FOR DEPLOYMENT](https://www.youtube.com/watch?v=soaG3GNSxJY)**

## Others versions made by the community 👥

[Simplefolio Ember.js](https://github.com/sernadesigns/simplefolio-ember) by [Michael Serna](https://github.com/sernadesigns)

## Technologies used 🛠️

- [Webpack](https://webpack.js.org/concepts/) - Static module bundler
- [Bootstrap 4](https://getbootstrap.com/docs/4.3/getting-started/introduction/) - Front-end component library
- [Sass](https://sass-lang.com/documentation) - CSS extension language
- [ScrollReveal.js](https://scrollrevealjs.org/) - JavaScript library

## Authors

- **Jacobo Martinez** - [https://github.com/cobidev](https://github.com/cobidev)

## Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/75600296-89eb-4640-9e7e-fa87fba7ce76/deploy-status)](https://app.netlify.com/sites/simplfolio/deploys)

## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
