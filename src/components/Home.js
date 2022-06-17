import React from "react"
// import "../home.css"
import { Link } from "react-router-dom";
import HomepageOne from "../assets/3d1.jpg"
import HomepageTwo from "../assets/3d3.jpg"
import HomepageThree from "../assets/3d5.png"
import HomepageFour from "../assets/3d6.jpg"
import HomepageFive from "../assets/3d4.jpg"
import HomepageSix from "../assets/3d2.jpg"







{/* <link rel="stylesheet" href="home.css"></link> */}

function Home() {
  return (
    <>
    {/* <div class="h1-box">
      <div class="typewrite">
        <h1>Hi, I'm Ava...</h1>
      </div>
    </div> */}
    <div className="container">
    <div className="box">
        <div className="title">
            <h1>Ava Yaz</h1>
        </div>
    <div className="role">
      <div className="block"></div>
      <p>Full Stack Software Engineer</p>
      </div>
      </div>
      </div>
      <div className="container-2">
    <div className="nav-container">
      
        <nav className="navigation">
          <ul>

            <a href='#'>
              <li>About me &nbsp; &nbsp;</li>
            </a>


            <a href='#'>
              <li>Mission & Work Ethic &nbsp; &nbsp;</li>
            </a>

            <a href='#'>
              <li>Skills &nbsp; &nbsp;</li>
            </a>


            <a href='#'>
              <li>Projects&nbsp; &nbsp;</li>
            </a>


            <a href='#'>
              <li>Contact</li>
            </a>


          </ul>
        </nav>
        </div>
        <div className="images-container">
      <img className="homepage" src = {HomepageTwo} alt = "3d artwork"/>
      <img className="homepage" src = {HomepageOne} alt = "3d artwork"/>
      <img className="homepage" src = {HomepageThree} alt = "3d artwork"/>


        </div>
      </div>
      <div class="ball-body">
        <div class="ball">
        </div>
      </div>
      <section id="about">
        <div className="container-3">
              <h3>About me</h3>
          <h4>Hi, I'm Ava. I'm a Full Stack Software Engineer with a passion for
            technology, learning, and creating.<br></br>
              Currently based in London, United Kingdom.</h4>
          <p className="about-me">
            I come from a diverse background with a range of different work experiences.<br></br>
            The most recent, being online ESL teaching to a range of 
            different students from different cultures and ages. <br></br>This role emphasised my love for using technology as a tool.<br></br>
            I have always adored 
            computers and technology growing up, being a child of the digital age, <br></br>I spent a lot of my time as a tween experimenting on the world 
            wide web and being fascinated by the little crevices of the internet, plus video games. <br></br>This led me to grow up being extremely tech-savvy
            and finding a comfort when working with and troubleshooting issues with computers.<br></br> However, I am a big believer in following your heart's 
            desires,<br></br>and so I dedicated most of my high school-university experience to my love for music. This lead me to neglect a lot of other
            pathways and interests until after I graduated from university.<br></br> Which is where programming and software engineering came in.<br></br> As 
            someone with no background in STEM, it has been a long, challenging road,<br></br> often suffering from intense imposter syndrome and self
            -comparisons to others, and believe me, I'm still conquering a lot of things on this journey.<br></br> But every step has been rewarding 
            and has taught me things about myself along the way, and I can't wait to grow and learn more.</p>
            <h3>Interests and achievements</h3>
            <h4>Creative arts</h4>
            <p className="about-me">I have dedicated most of my life to the creative arts, specifically in music, where I
            achieved the most out of all of my creative endeavours.<br></br> Some highlights of my music career were playing
            national shows, playing sets and featuring on various online Radio such as NTS and Radar Radio,<br></br>
            collaborating with artists from all over the world, directing my own music videos, and earning over 265K
            plays in total on SoundCloud.<br></br> As well as music, I am self-taught in screenwriting and have written two feature-length film
            scripts.<br></br> Last year I published a short poetry anthology and I currently write on Substack. I am also in
            the process of creating my first few video essays, <br></br>which aim to analyse media and share ideas about 
            self-improvement and different aspects of the human experience.<br></br> I am extremely passionate
            about writing, collaborating with others sonically and cult films and have succeeded in all of these
            areas in my own way.</p>
            <h4>The humanities</h4>
            <p className="about-me">I have a love for history, specifically history of art, <br></br>which is why I have a small
            Instagram page dedicated to my own personal curation of my favourite moments in art history.<br></br>I am also
            passionate about Western Philosophy, language learning, psychology and logical reasoning in social
            politics.</p>
            <h4>Languages</h4>
            <p className="about-me">I have a huge passion for languages, I can probably say at least one word from 30 different languages.<br></br> I am self-taught in French,
            at B2-C1 level, which is upper intermediate. <br></br> I am also fluent in Persian, as well as early conversational in Spanish, Japanese 
            and Mandarin. <br></br>I aim to be a polyglot by 2025.</p>
            <br></br>
            <br></br>
          <p className="about-me">I have taught myself a lot about various subjects in recent years.<br></br>I hope to carry on growing my knowledge in all areas I am interested in,
        both technical and artistic in the years to come,<br></br> as well as the new things I wish to learn, whether that's technical or purely creative.</p>
        </div>
        <div className="container-4">
          <h3>Mission & Work ethic</h3>
          <p className="about-me">
            My current mission is to join a company where I can continue to enhance my skills, be myself, and receive the appropriate 
            guidance and mentorship to grow as a developer.<br></br> I also aim to learn more about UX design this year and perhaps take a course or 
            start self-teaching myself in this area of tech. <br></br>In future, I would like to learn about various different areas of technology, 
            such as video game design, blochchain development, artificial intelligence and more. <br></br>
            I am a person who believes in equality and opportunity for all, diversity and cultural awareness.<br></br>I strongly believe
            in communication, honesty and emotional intelligence.<br></br> I admire workplaces where people can express themselves and feel comfortable,
            where office politics are not encouraged and people can feel that they can be themselves. 
          </p>
          <div className="images-container">
      <img className="homepage" src = {HomepageFive} alt = "3d artwork"/>
      <img className="homepage" src = {HomepageFour} alt = "3d artwork"/>
      <img className="homepage" src = {HomepageSix} alt = "3d artwork"/>

      </div>
        </div>
        <div className="container-5">
          <h3>Skills</h3>
          <div className="skills-container">
            <div className="tech-container">
          <h3>Technical skills</h3>
          <label for="html">HTML</label>&nbsp;
<meter id="disk_d" value="0.8">70%</meter><br></br><br></br>
<label for="html">CSS</label>&nbsp;&nbsp;
<meter id="disk_d" value="0.8">70%</meter><br></br><br></br>
<label for="html">JavaScript</label>&nbsp;
<meter id="disk_d" value="0.6">70%</meter><br></br><br></br>
<label for="html">Python</label>&nbsp;&nbsp;
<meter id="disk_d" value="0.6">70%</meter><br></br><br></br>
<label for="html">React</label>&nbsp;
<meter id="disk_d" value="0.6">70%</meter><br></br><br></br>
<label for="html">Django</label>&nbsp;&nbsp;
<meter id="disk_d" value="0.4">70%</meter><br></br><br></br>
<label for="html">SQL</label>&nbsp;
<meter id="disk_d" value="0.5">70%</meter><br></br><br></br>
<label for="html">MongoDB</label>&nbsp;&nbsp;
<meter id="disk_d" value="0.4">70%</meter><br></br><br></br>
<label for="html">Node.js</label>&nbsp;
<meter id="disk_d" value="0.4">70%</meter><br></br><br></br>
<label for="html">NPM</label>&nbsp;&nbsp;
<meter id="disk_d" value="0.6">70%</meter><br></br><br></br>
<label for="html">Poetry</label>&nbsp;
<meter id="disk_d" value="0.6">70%</meter><br></br><br></br>
<label for="html">Git</label>&nbsp;&nbsp;
<meter id="disk_d" value="0.8">70%</meter><br></br><br></br>
<label for="html">GitHub</label>&nbsp;
<meter id="disk_d" value="0.8">70%</meter><br></br><br></br>
<label for="html">Insomnia/Postman</label>&nbsp;&nbsp;
<meter id="disk_d" value="0.8">70%</meter>

          </div>
          <div className="soft-container">
          <h3>Soft and other skills</h3>
          <label for="html">Communication</label>&nbsp;
<meter id="disk_d" value="1">70%</meter><br></br><br></br>
<label for="html">Creativity</label>&nbsp;&nbsp;
<meter id="disk_d" value="1">70%</meter><br></br><br></br>
<label for="html">Writing</label>&nbsp;
<meter id="disk_d" value="0.9">70%</meter><br></br><br></br>
<label for="html">Mentoring/teaching</label>&nbsp;&nbsp;
<meter id="disk_d" value="0.7">70%</meter><br></br><br></br>
<label for="html">Visual arts</label>&nbsp;
<meter id="disk_d" value="0.6">70%</meter><br></br><br></br>
<label for="html">Organisation</label>&nbsp;&nbsp;
<meter id="disk_d" value="0.8">70%</meter><br></br><br></br>
<label for="html">Video Editing</label>&nbsp;
<meter id="disk_d" value="0.4">70%</meter><br></br><br></br>
<label for="html">Photoshop</label>&nbsp;&nbsp;
<meter id="disk_d" value="0.4">70%</meter><br></br><br></br>
<label for="html">Ambition</label>&nbsp;
<meter id="disk_d" value="1">70%</meter><br></br><br></br>
<label for="html">Self-management skills</label>&nbsp;&nbsp;
<meter id="disk_d" value="0.7">70%</meter><br></br><br></br>
<label for="html">Empathy</label>&nbsp;
<meter id="disk_d" value="0.9">70%</meter><br></br><br></br>
<label for="html">Self-awareness</label>&nbsp;&nbsp;
<meter id="disk_d" value="0.9">70%</meter><br></br><br></br>
<label for="html">Teamwork & Collaboration</label>&nbsp;
<meter id="disk_d" value="0.8">70%</meter><br></br><br></br>
<label for="html">Googling/Researching</label>&nbsp;&nbsp;
<meter id="disk_d" value="0.7">70%</meter>
          </div>
          </div>
        </div>
        <div className="container-6">
          <h3>Projects and experience</h3>
          <p className="about-me">
            I have recently graduated from a 480 hour bootcamp at <a className="ga-a" href="https://generalassemb.ly/">General Assembly</a><br>
            </br> where we were given time-constrained projects to complete, in solo, in pairs as well as in groups.
          </p>
          <h4 className="space">Space Invaders - Solo Project - 1 week</h4>
          <h4>Bite The Jaw - Solo Project - 2 weeks</h4>
          <h4>Walkies - Group Project - 2 weeks</h4>
          <h4>Dungeons & Dragons character builder - Paired project - 1 week</h4>


        </div>
      </section>
      <div class="button">
        <button></button>
      </div><h3 align="left">:wrench: Languages and Tools:</h3><br></br><p align="left"><a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
        alt="css3" width="40" height="40" /> </a> <a href="https://www.djangoproject.com/" target="_blank"
          rel="noreferrer"> <img src https />://preneure.com/wp-content/uploads/2022/02/django.png" alt="django"
          width="40" height="40" /> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
            alt="express" width="40" height="40" /> </a> <a href="https://git-scm.com/" target="_blank"
              rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git"
                width="40" height="40" /> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="html5" width="40" height="40" /> </a> <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript" width="40" height="40" /> </a> <a href="https://jestjs.io" target="_blank"
              rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest"
                width="40" height="40" /> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
            alt="mongodb" width="40" height="40" /> </a> <a href="https://www.mysql.com/" target="_blank"
              rel="noreferrer"> <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
            alt="mysql" width="40" height="40" /> </a> <a href="https://nodejs.org" target="_blank"
              rel="noreferrer"> <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
            alt="nodejs" width="40" height="40" /> </a> <a href="https://www.postgresql.org" target="_blank"
              rel="noreferrer"> <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
            alt="postgresql" width="40" height="40" /> </a> <a href="https://www.python.org" target="_blank"
              rel="noreferrer"> <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
            alt="python" width="40" height="40" /> </a> <a href="https://reactjs.org/" target="_blank"
              rel="noreferrer"> <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react" width="40" height="40" /> </a> </p><br></br>
              </>
  )
}

export default Home