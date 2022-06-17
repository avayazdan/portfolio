import React from "react"
// import "../home.css"
import { Link } from "react-router-dom";
import HomepageOne from "../assets/3d1.jpg"
import HomepageTwo from "../assets/3d3.jpg"
import HomepageThree from "../assets/3d5.png"






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
      <img className="homepage" src = {HomepageTwo} alt = "Walkies logo"/>
      <img className="homepage" src = {HomepageOne} alt = "Walkies logo"/>
      <img className="homepage" src = {HomepageThree} alt = "Walkies logo"/>


        </div>
      </div>
      <div class="ball-body">
        <div class="ball">
        </div>
      </div>
      <section id="about">
        <div className="container-3">
              <h3>A little about me...</h3>
          <h4>Hi, I'm Ava. I'm a Full Stack Software Engineer with a passion for
            technology, learning, and creating.<br></br>
              Currently based in London, United Kingdom.</h4>
          <p className="about-me">
            I come from a diverse background with a range of different work experiences. The most recent, being online ESL teaching to a range of 
            different students from different cultures and ages. This role emphasised my love for using technology as a tool. I have always adored 
            computers and technology growing up, being a child of the digital age, I spent a lot of my time as a tween experimenting on the world 
            wide web and being fascinated by the little crevices of the internet, plus video games. This led me to grow up being extremely tech-savvy
            and finding a comfort when working with and troubleshooting issues with computers. However, I am a big believer in following your heart's 
            desires, and so I dedicated most of my high school-university experience to my love for music. This lead me to neglect a lot of other
            pathways and interests until after I graduated from university. Which is where programming and software engineering came in. As 
            someone with no background in STEM, it has been a long, challanging road, often suffering from intense imposter syndrome and self
            -comparisons to others, and believe me, I'm still conquering a lot of things on this journey. But every step has been rewarding 
            and has taught me things about myself along the way, and I can't wait to grow and learn more.</p>
            <h3>Interests and achievements</h3>
            <h4>Creative arts</h4>
            <p>I have dedicated most of my life to the creative arts, specifically in music, where I
            achieved the most out of all of my creative endeavours. Some highlights of my music career were playing
            national shows, playing sets and featuring on various online Radio such as NTS and Radar Radio,
            collaborating with artists from all over the world, directing my own music videos, and earning over 265K
            plays in total on SoundCloud. As well as music, I am self-taught in screenwriting and have written two feature-length film
            scripts. Last year I published a short poetry anthology and I currently write on Substack. I am also in
            the process of creating my first few video essays, which aim to analyse media and share ideas about 
            self-improvement and different aspects of the human experience. I am extremely passionate
            about writing, collaborating with others sonically and cult films and have succeeded in all of these
            areas in my own way.</p>
            <h4>The humanities</h4>
            <p>I have a love for history, specifically history of art, which is why I have a small
            Instagram page dedicated to my own personal curation of my favourite moments in art history. I am also
            passionate about Western Philosophy, language learning, psychology and logical reasoning in social
            politics.</p>
            <h4>Languages</h4>
            <p>I have a huge passion for languages, I can probably say at least one word from 30 different languages. I am self-taught in French,
            at B2-C1 level, which is upper intermediate. I am also fluent in Persian, as well as early conversational in Spanish, Japanese 
            and Mandarin. I aim to be a polyglot by 2025.</p>
            <br></br>
            <br></br>
          <p>I have taught myself a lot about various subjects in recent years. I hope to carry on growing my knowledge in all areas I am interested in,
        both technical and artistic in the years to come, as well as the new things I wish to learn, whether that's technical or purely creative.</p>
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