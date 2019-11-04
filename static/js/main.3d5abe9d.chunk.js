(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a(37)},,,,,function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(11),r=a.n(c),o=(a(19),a(5)),i=a(6),s=a(8),m=a(7),u=a(9),f=a(3),E=a(12),h=a(13),b=(a(23),function(){return l.a.createElement("div",{id:"AlexMonteil",className:"navbarstyle w-100"},l.a.createElement("ul",{className:"navlist h-100 w-100"},l.a.createElement("li",null,l.a.createElement("a",{href:"#Home"},"Alex Monteil")),l.a.createElement("li",{className:"push"},l.a.createElement("a",{href:"#About"},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:"#Portfolio"},"Portfolio")),l.a.createElement("li",null,l.a.createElement("a",{href:"#Tools"},"Tools")),l.a.createElement("li",null,l.a.createElement("a",{href:"#Contact"},"Contact"))))}),p=(a(24),function(){return l.a.createElement("div",{id:"Home",className:"headerstyle vh-100 w-100"},l.a.createElement("article",{className:"overlay h-100 w-100 flex flex-column flex-wrap justify-center"},l.a.createElement("div",{className:"articletext pa4 white"},l.a.createElement("h1",{className:"f1 fw3 f-subheadline-l"},"Hi, my name is Alex Monteil"),l.a.createElement("br",null),l.a.createElement("h1",{className:"f1 fw3 f-subheadline-l"},"Welcome to my Portfolio !"),l.a.createElement("br",null),l.a.createElement("a",{href:"#About",className:"toAboutButton"},"About Me"))))}),d=(a(25),function(){return l.a.createElement("div",{id:"About",className:"aboutstyle vh-100 w-100"},l.a.createElement("h1",{className:"abouttitle shadow-1 center br3"},"About Me"),l.a.createElement("article",{className:"articleabout w-80 tc center br3 mt4 mb2"},l.a.createElement("p",null,"Hi, my name is Alex Monteil. I am a full stack engineer, I have been doing software development for a year. During this time, I have taught myself some of the latest web technologies and built web applications for clients as a consultant."),l.a.createElement("p",null,"Software development is my passion. I started doing it in my spare time for fun and it quickly grew into a career interest. This is why I constantly look to grow and learn new technologies in the field. I simply enjoy it !"),l.a.createElement("p",null,"I have been working mainly with frameworks such as React, Redux and Express to create responsive and efficient web applications. "),l.a.createElement("p",null,"My interests extend to machine learning, natural language processing and computer vision as I seek to build smart web applications with those capabilities."),l.a.createElement("hr",{className:"w-80 center"}),l.a.createElement("p",{className:"mb4"},"Thanks for viewing my portfolio"),l.a.createElement("a",{href:"#Portfolio",className:"mv2 toPortfolioButton"},"Portfolio")))}),w=(a(26),function(e){return l.a.createElement("div",{className:"scrollback mt2"},l.a.createElement("div",{className:"scrollstyle"},e.children))}),v=(a(27),function(e){var t=e.name,a=e.thumbnail,n=e.description,c=e.url;return l.a.createElement("div",{className:"cardstyle dib br3 pa3 ma2 bw2 grow shadow-5"},l.a.createElement("h2",null,t),l.a.createElement("hr",{className:"mt2"}),l.a.createElement("div",{className:"mt2"},l.a.createElement("img",{alt:t,src:a,width:"300px",height:"auto"}),l.a.createElement("p",null,n)),l.a.createElement("a",{href:c,rel:"noopener noreferrer",target:"_blank"},"View website"))}),N=function(e){var t=e.websites;return l.a.createElement("div",null,t.map(function(e,t){return l.a.createElement(v,{key:t,name:e.name,thumbnail:e.thumbnail,description:e.description,url:e.url})}))},y=(a(28),function(e){var t=e.setWebsiteType;return l.a.createElement("div",{className:"pa2 mv2"},l.a.createElement("input",{type:"submit",name:"All",value:"All",id:"All",onClick:function(){return t("")},className:"portfolioButton"}),l.a.createElement("input",{type:"submit",name:"Css",value:"Css",id:"Css",onClick:function(){return t("Css")},className:"portfolioButton"}),l.a.createElement("input",{type:"submit",name:"Bootstrap",value:"Bootstrap",id:"Bootstrap",onClick:function(){return t("Bootstrap")},className:"portfolioButton"}),l.a.createElement("input",{type:"submit",name:"Javascript",value:"Javascript",id:"Javascript",onClick:function(){return t("Javascript")},className:"portfolioButton"}),l.a.createElement("input",{type:"submit",name:"React",value:"React",id:"React",onClick:function(){return t("React")},className:"portfolioButton"}))}),g=(a(29),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).setWebsiteType=function(t){e.setState({viewtype:t})},e.state={websites:[],viewtype:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://alexmonteil.github.io/projects-json/websites.json").then(function(e){return e.json()}).then(function(t){return e.setState({websites:t})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state,t=e.websites,a=e.viewtype,n=t.filter(function(e){return e.type.toLowerCase().includes(a.toLowerCase())});return t.length?l.a.createElement("div",{id:"Portfolio",className:"portfoliostyle vh-100 w-100"},l.a.createElement("h1",{className:"portfoliotitle shadow-1 center br3"},"Portfolio"),l.a.createElement(y,{setWebsiteType:this.setWebsiteType}),l.a.createElement(w,null,l.a.createElement(N,{websites:n}))):l.a.createElement("div",null,l.a.createElement("h1",{className:"portfoliotitle w-33 shadow-1 center br3"},"Portfolio"),l.a.createElement("h2",null,"Loading..."))}}]),t}(n.Component)),k=a(2),C=(a(32),function(){return l.a.createElement("div",{id:"Tools",className:"toolsstyle vh-100 w-100"},l.a.createElement("h1",{className:"toolstitle shadow-1 center br3"},"Tools"),l.a.createElement("div",{className:"toolsgrid w-80 center"},l.a.createElement("font",null,l.a.createElement(k.a,{icon:["fab","html5"],className:"icon iconHtml5"}),l.a.createElement("br",null),"HTML 5"),l.a.createElement("font",null,l.a.createElement(k.a,{icon:["fab","css3-alt"],className:"icon iconCss3"}),l.a.createElement("br",null),"CSS 3"),l.a.createElement("font",null,l.a.createElement(k.a,{icon:["fab","js-square"],className:"icon iconJs"}),l.a.createElement("br",null),"Javascript"),l.a.createElement("font",null,l.a.createElement(k.a,{icon:["fab","node"],className:"icon iconNode"}),l.a.createElement("br",null),"Node.js"),l.a.createElement("font",null,l.a.createElement(k.a,{icon:["fab","react"],className:"icon iconReact"}),l.a.createElement("br",null),"React.js"),l.a.createElement("font",null,l.a.createElement(k.a,{icon:["fab","bootstrap"],className:"icon iconBootstrap"}),l.a.createElement("br",null),"Bootstrap"),l.a.createElement("font",null,l.a.createElement(k.a,{icon:["fab","git-alt"],className:"icon iconGit"}),l.a.createElement("br",null),"Git"),l.a.createElement("font",null,l.a.createElement(k.a,{icon:["fab","github"],className:"icon iconGithub"}),l.a.createElement("br",null),"Github"),l.a.createElement("font",null,l.a.createElement(k.a,{icon:["fac","postgre"],className:"icon iconPostgresql"}),l.a.createElement("br",null),"PostgreSQL"),l.a.createElement("font",null,l.a.createElement(k.a,{icon:["fas","database"],className:"icon iconSql"}),l.a.createElement("br",null),"SQL"),l.a.createElement("font",null,l.a.createElement(k.a,{icon:["fac","heroku"],className:"icon iconHeroku"}),l.a.createElement("br",null),"Heroku"),l.a.createElement("font",null,l.a.createElement(k.a,{icon:["fab","npm"],className:"icon iconNpm"}),l.a.createElement("br",null),"npm")))}),L=(a(33),function(){return l.a.createElement("div",{id:"Contact",className:"contactstyle vh-100 w-100"},l.a.createElement("h1",{className:"contacttitle shadow-1 center br3"},"Contact"),l.a.createElement("div",{className:"mailsection w-70 center ma4"},l.a.createElement("h2",{className:"f2 mb5 center"},"Send me an email :"),l.a.createElement("a",{className:"clickToMailButton",href:"mailto:alex.monteil@outlook.com"},"Email me")),l.a.createElement("h2",{className:"f3 ma5 center"},"Here are my social media platforms"),l.a.createElement("div",{className:"contactgrid w-40 center"},l.a.createElement("a",{href:"https://www.linkedin.com/in/alex-monteil-310406149/",className:"iconLinkedin",rel:"noopener noreferrer",target:"_blank"},l.a.createElement(k.a,{icon:["fab","linkedin"]})),l.a.createElement("a",{href:"https://github.com/alexmonteil/",className:"iconGithub",rel:"noopener noreferrer",target:"_blank"},l.a.createElement(k.a,{icon:["fab","github"]}))))}),x=(a(34),function(){return l.a.createElement("div",{id:"Footer",className:"footerstyle tc"},l.a.createElement("p",null,"Created by ",l.a.createElement("a",{href:"https://www.linkedin.com/in/alex-monteil-310406149/",rel:"noopener noreferrer",target:"_blank"},"Alex Monteil")))});a(35);f.b.add(h.a,E.a,{prefix:"fac",iconName:"postgre",icon:[24,24,[],null,"M17.128 0a10.134 10.134 0 0 0-2.755.403l-.063.02A10.922 10.922 0 0 0 12.6.258C11.422.238 10.41.524 9.594 1 8.79.721 7.122.24 5.364.336 4.14.403 2.804.775 1.814 1.82.827 2.865.305 4.482.415 6.682c.03.607.203 1.597.49 2.879s.69 2.783 1.193 4.152c.503 1.37 1.054 2.6 1.915 3.436.43.419 1.022.771 1.72.742.49-.02.933-.235 1.315-.552.186.245.385.352.566.451.228.125.45.21.68.266.413.103 1.12.241 1.948.1.282-.047.579-.139.875-.27.011.33.024.653.037.98.041 1.036.067 1.993.378 2.832.05.137.187.843.727 1.466.54.624 1.598 1.013 2.803.755.85-.182 1.931-.51 2.649-1.532.71-1.01 1.03-2.459 1.093-4.809.016-.127.035-.235.055-.336l.169.015h.02c.907.041 1.891-.088 2.713-.47.728-.337 1.279-.678 1.68-1.283.1-.15.21-.331.24-.643s-.149-.8-.446-1.025c-.595-.452-.969-.28-1.37-.197a6.27 6.27 0 0 1-1.202.146c1.156-1.947 1.985-4.015 2.458-5.845.28-1.08.437-2.076.45-2.947.013-.871-.058-1.642-.58-2.309C21.36.6 19.067.024 17.293.004c-.055-.001-.11-.002-.165-.001zm-.047.64c1.678-.016 3.822.455 5.361 2.422.346.442.449 1.088.437 1.884-.013.795-.16 1.747-.429 2.79-.522 2.02-1.508 4.375-2.897 6.488a.756.756 0 0 0 .158.086c.29.12.951.223 2.27-.048.332-.07.575-.117.827.075a.52.52 0 0 1 .183.425.704.704 0 0 1-.13.336c-.255.383-.758.746-1.403 1.045-.571.266-1.39.405-2.116.413-.364.004-.7-.024-.985-.113l-.018-.007c-.11 1.06-.363 3.153-.528 4.108-.132.77-.363 1.382-.804 1.84-.44.458-1.063.734-1.901.914-1.038.223-1.795-.017-2.283-.428-.487-.41-.71-.954-.844-1.287-.092-.23-.14-.528-.186-.926-.046-.398-.08-.885-.103-1.434a51.426 51.426 0 0 1-.03-2.523 3.061 3.061 0 0 1-1.552.76c-.689.117-1.304.002-1.671-.09a2.276 2.276 0 0 1-.52-.201c-.17-.091-.332-.194-.44-.397a.56.56 0 0 1-.057-.381.61.61 0 0 1 .218-.331c.198-.161.46-.251.855-.333.719-.148.97-.249 1.123-.37.13-.104.277-.314.537-.622a1.16 1.16 0 0 1-.003-.041 2.96 2.96 0 0 1-1.33-.358c-.15.158-.916.968-1.85 2.092-.393.47-.827.74-1.285.759-.458.02-.872-.211-1.224-.552-.703-.683-1.264-1.858-1.753-3.186-.488-1.328-.885-2.807-1.167-4.067-.283-1.26-.45-2.276-.474-2.766-.105-2.082.382-3.485 1.217-4.37.836-.885 1.982-1.22 3.099-1.284 2.005-.115 3.909.584 4.294.734.742-.504 1.698-.818 2.892-.798a7.39 7.39 0 0 1 1.681.218l.02-.009a6.854 6.854 0 0 1 .739-.214A9.626 9.626 0 0 1 17.08.642zm.152.67h-.146a8.74 8.74 0 0 0-1.704.192c1.246.552 2.187 1.402 2.85 2.25a8.44 8.44 0 0 1 1.132 1.92c.11.264.184.487.226.66.021.087.035.16.04.236.002.038.004.077-.012.144 0 .003-.005.01-.006.013.03.876-.187 1.47-.213 2.306-.02.606.135 1.318.173 2.095.036.73-.052 1.532-.526 2.319.04.048.076.096.114.144 1.254-1.975 2.158-4.16 2.64-6.023.258-1.003.395-1.912.407-2.632.01-.72-.124-1.242-.295-1.46-1.342-1.716-3.158-2.153-4.68-2.165zm-4.79.256c-1.182.003-2.03.36-2.673.895-.663.553-1.108 1.31-1.4 2.085-.347.92-.466 1.81-.513 2.414l.013-.008c.357-.2.826-.4 1.328-.516.502-.115 1.043-.151 1.533.039s.895.637 1.042 1.315c.704 3.257-.219 4.468-.559 5.382a9.61 9.61 0 0 0-.331 1.013c.043-.01.086-.022.129-.026.24-.02.428.06.54.108.342.142.577.44.704.78.033.089.057.185.071.284a.336.336 0 0 1 .02.127 55.14 55.14 0 0 0 .013 3.738c.023.538.057 1.012.1 1.386.043.373.104.657.143.753.128.32.315.739.653 1.024.338.284.823.474 1.709.284.768-.165 1.242-.394 1.559-.723.316-.329.505-.787.626-1.488.181-1.05.545-4.095.589-4.668-.02-.432.044-.764.182-1.017.142-.26.362-.419.552-.505.095-.043.184-.072.257-.093a5.956 5.956 0 0 0-.243-.325 4.456 4.456 0 0 1-.666-1.099 8.296 8.296 0 0 0-.257-.483c-.133-.24-.301-.54-.477-.877-.352-.675-.735-1.493-.934-2.29-.198-.796-.227-1.62.281-2.201.45-.516 1.24-.73 2.426-.61-.035-.105-.056-.192-.115-.332a7.817 7.817 0 0 0-1.041-1.764c-1.005-1.285-2.632-2.559-5.146-2.6h-.115zm-6.642.052c-.127 0-.254.004-.38.011-1.01.058-1.965.351-2.648 1.075-.684.724-1.134 1.911-1.036 3.876.019.372.181 1.414.459 2.652.277 1.238.67 2.695 1.142 3.982.473 1.287 1.046 2.407 1.59 2.937.274.265.512.372.728.363.217-.01.478-.135.797-.518a43.244 43.244 0 0 1 1.81-2.048 3.497 3.497 0 0 1-1.167-3.15c.103-.739.117-1.43.105-1.976-.012-.532-.05-.886-.05-1.107a.336.336 0 0 1 0-.019v-.005l-.001-.006v-.001a9.893 9.893 0 0 1 .592-3.376c.28-.744.697-1.5 1.322-2.112-.614-.202-1.704-.51-2.884-.568a7.603 7.603 0 0 0-.38-.01zM18.199 6.9c-.679.009-1.06.184-1.26.413-.283.325-.31.895-.134 1.597.175.703.537 1.489.877 2.142.17.327.335.621.468.86.134.24.232.41.292.555.055.134.116.252.178.362.263-.555.31-1.1.283-1.668-.035-.703-.198-1.422-.174-2.15.027-.851.195-1.405.21-2.063a5.793 5.793 0 0 0-.74-.048zm-8.234.115a2.82 2.82 0 0 0-.616.074 4.665 4.665 0 0 0-1.153.449 2.417 2.417 0 0 0-.349.228l-.022.02c.006.146.035.5.047 1.021.012.57-.002 1.297-.112 2.084-.239 1.71 1.002 3.126 2.46 3.128.085-.351.225-.707.365-1.082.406-1.094 1.205-1.892.532-5.006-.11-.51-.328-.716-.628-.832a1.474 1.474 0 0 0-.524-.084zm7.917.204h.05c.066.002.127.009.18.022.054.012.1.03.138.055a.164.164 0 0 1 .075.11l-.001.008h.001-.001a.24.24 0 0 1-.035.135.668.668 0 0 1-.11.15.677.677 0 0 1-.386.212.59.59 0 0 1-.41-.103.608.608 0 0 1-.13-.118.26.26 0 0 1-.063-.127.17.17 0 0 1 .042-.128.384.384 0 0 1 .117-.09c.096-.054.226-.094.373-.116.055-.008.109-.012.16-.013zm-7.82.168c.053 0 .109.005.166.013.153.021.289.062.393.122a.446.446 0 0 1 .133.106.223.223 0 0 1 .054.17.302.302 0 0 1-.075.154.649.649 0 0 1-.143.13.64.64 0 0 1-.448.113.728.728 0 0 1-.42-.228.71.71 0 0 1-.118-.164.28.28 0 0 1-.041-.177c.015-.108.104-.164.191-.195a.866.866 0 0 1 .307-.04zm9.06 7.343l-.003.001c-.147.053-.268.075-.37.12a.452.452 0 0 0-.239.214c-.063.115-.117.319-.101.666a.51.51 0 0 0 .148.07c.171.052.458.086.778.081.638-.007 1.423-.156 1.84-.35a3.95 3.95 0 0 0 .943-.615h-.001c-1.393.288-2.18.211-2.663.012a1.315 1.315 0 0 1-.332-.2zm-8.031.094h-.021c-.053.005-.13.023-.279.188-.348.39-.47.635-.757.864-.287.228-.66.35-1.405.503-.236.048-.371.101-.461.144.029.024.026.03.07.053.109.06.249.113.362.142.32.08.846.173 1.395.08.549-.094 1.12-.357 1.607-1.04.084-.118.093-.292.024-.479-.07-.187-.223-.348-.331-.393a.653.653 0 0 0-.204-.06z"]},{prefix:"fac",iconName:"heroku",icon:[256,400,[],null,"M160.360824,273.600778 L160.360824,147.609797 C160.360824,147.609797 168.555281,117.460105 59.4165681,159.943821 C59.2169111,160.482518 59.2169111,43.4397441 59.2169111,43.4397441 L94.8765809,43.2209239 L94.8765809,118.211399 C94.8765809,118.211399 194.722969,78.8856711 194.722969,148.034825 L194.722969,273.601106 L160.360824,273.601106 L160.360824,273.600778 L160.360824,273.600778 Z M180.680804,88.6064645 L142.856026,88.6064645 C156.470869,71.9602406 168.795885,43.4394165 168.795885,43.4394165 L207.905249,43.4394165 C207.905249,43.4395803 201.210431,62.0255406 180.680804,88.6064645 L180.680804,88.6064645 L180.680804,88.6064645 Z M59.8643634,273.381958 L59.8643634,201.633986 L95.7415432,237.511166 L59.8643634,273.381958 L59.8643634,273.381958 Z"]});var j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(b,null),l.a.createElement(p,null),l.a.createElement(d,null),l.a.createElement(g,null),l.a.createElement(C,null),l.a.createElement(L,null),l.a.createElement(x,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(36);r.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[14,1,2]]]);
//# sourceMappingURL=main.3d5abe9d.chunk.js.map