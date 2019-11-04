import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Tools.css';

const Tools = () => {
    return (
        <div id='Tools' className='toolsstyle vh-100 w-100'>
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
    );
}


export default Tools;