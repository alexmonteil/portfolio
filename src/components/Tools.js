import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Tools.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
configureAnchors({offset: -60, scrollDuration: 200});

/* 
Edit Tools section:

Inside the file 'src/components/Tools.js'

- Search for icons to use at: https://fontawesome.com/icons?d=gallery
- I recommend using no more than 12 icons.

Icons have an array of 2 strings identifying them:

- a prefix such as: 'fa', 'fab', or other
- an icon name such as: 'html5', 'node', 'github', or other

Each icon has 2 classes inside the `className` attribute:

- 'icon' which should NOT be removed
- 'iconName' such as: 'iconHtml5' which you can edit or replace with your custom class

To add a custom class to an icon to change its hover effect:

- Create your class in the file located at: 'src/components/Tools.css'
- inside the file 'src/components/Tools.js' inside the <FontAwesomeIcon> tag edit the 'className' attribute and replace the second class with your new custom class.
*/
    

const Tools = () => {
    return (
        <ScrollableAnchor id={'Tools'}>
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
        </ScrollableAnchor>
    );
}


export default Tools;