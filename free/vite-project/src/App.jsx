import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="header">
        <a href="blob:https://web.whatsapp.com/581af5db-e404-4636-9318-d9442885d3d7">go to image</a>
        <h1>Manisha S</h1>
        <p>A Student</p>
      </header>
1` `
      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a student with passion in building full-stack applications and solving real-world problems.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>HTML/CSS</li>
          <li>Git/GitHub</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <h3>Project 1</h3>
            <p>A web app for managing tasks.</p>
            <a href="https://github.com/your-username/project1" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </li>
          <li>
            <h3>Project 2</h3>
            <p>A personal blog built with React.</p>
            <a href="https://github.com/your-username/project2" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </li>
        </ul>
      </section>

      <footer className="footer">
        <p>Created using React</p>
      </footer>
    </>
  )
}

export default App