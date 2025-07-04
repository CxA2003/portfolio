import React, { useState } from 'react';
import './App.css';

function App() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("cesar@email.com") // Replace with your actual email
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
      <header>
        <h1>Cesar Fernandez</h1>
        <p>Data Scientist | Web Developer</p>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>
          I'm a data analyst with a strong background in Python, SQL, and data visualization.
          Graduated from General Assembly's Data Science Bootcamp, passionate
          about turning data into actionable insights.
        </p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <div className="skills-grid">

          {/* Programming Languages */}
          <a className="skill-tile" href="https://www.python.org/" target="_blank" rel="noopener noreferrer"><img src="src/assets/python-logo.svg" alt="Python" />Python</a>
          <a className="skill-tile" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"><img src="src/assets/javascript-logo.svg" alt="JavaScript" />JavaScript</a>
          <a className="skill-tile" href="https://en.wikipedia.org/wiki/SQL" target="_blank" rel="noopener noreferrer"><img src="src/assets/sql-logo.svg" alt="SQL" />SQL</a>
          <a className="skill-tile" href="https://www.r-project.org/" target="_blank" rel="noopener noreferrer"><img src="src/assets/r-logo.svg" alt="R" />R</a>

          {/* Web Development */}
          <a className="skill-tile" href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer"><img src="src/assets/html5-logo.svg" alt="HTML5" />HTML5</a>
          <a className="skill-tile" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer"><img src="src/assets/css3-logo.svg" alt="CSS3" />CSS3</a>
          <a className="skill-tile" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><img src="src/assets/react-logo.svg" alt="React.js" />React.js</a>
          <a className="skill-tile" href="https://nodejs.org/" target="_blank" rel="noopener noreferrer"><img src="src/assets/nodejs-logo.svg" alt="Node.js" />Node.js</a>
          <a className="skill-tile" href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer"><img src="src/assets/npm-logo.svg" alt="NPM" />NPM</a>
          <a className="skill-tile" href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"><img src="src/assets/tailwind-logo.svg" alt="Tailwind" />Tailwind</a>
          <a className="skill-tile" href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer"><img src="src/assets/bootstrap-logo.svg" alt="Bootstrap" />Bootstrap</a>
          <a className="skill-tile" href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer"><img src="src/assets/vite-logo.svg" alt="Vite" />Vite</a>
          <a className="skill-tile" href="https://git-scm.com/" target="_blank" rel="noopener noreferrer"><img src="src/assets/git-logo.svg" alt="Git" />Git</a>
          <a className="skill-tile" href="https://github.com/" target="_blank" rel="noopener noreferrer"><img src="src/assets/github-logo.svg" alt="GitHub" />GitHub</a>

          {/* Data & ML */}
          <a className="skill-tile" href="https://pandas.pydata.org/" target="_blank" rel="noopener noreferrer"><img src="src/assets/pandas-logo.svg" alt="Pandas" />Pandas</a>
          <a className="skill-tile" href="https://numpy.org/" target="_blank" rel="noopener noreferrer"><img src="src/assets/numpy-logo.svg" alt="NumPy" />NumPy</a>
          <a className="skill-tile" href="https://matplotlib.org/" target="_blank" rel="noopener noreferrer"><img src="src/assets/matplotlib-logo.svg" alt="Matplotlib" />Matplotlib</a>
          <a className="skill-tile" href="https://seaborn.pydata.org/" target="_blank" rel="noopener noreferrer"><img src="src/assets/seaborn-logo.svg" alt="Seaborn" />Seaborn</a>
          <a className="skill-tile" href="https://scikit-learn.org/" target="_blank" rel="noopener noreferrer"><img src="src/assets/scikit-learn-logo.svg" alt="Scikit-learn" />Scikit-learn</a>
          <a className="skill-tile" href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer"><img src="src/assets/tensorflow-logo.svg" alt="TensorFlow" />TensorFlow</a>
          <a className="skill-tile" href="https://streamlit.io/" target="_blank" rel="noopener noreferrer"><img src="src/assets/streamlit-logo.svg" alt="Streamlit" />Streamlit</a>
          <a className="skill-tile" href="https://jupyter.org/" target="_blank" rel="noopener noreferrer"><img src="src/assets/jupyter-logo.svg" alt="Jupyter" />Jupyter</a>
          <a className="skill-tile" href="https://colab.research.google.com/" target="_blank" rel="noopener noreferrer"><img src="src/assets/colab-logo.svg" alt="Colab" />Colab</a>

          {/* Databases */}
          <a className="skill-tile" href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer"><img src="src/assets/mysql-logo.svg" alt="MySQL" />MySQL</a>
          <a className="skill-tile" href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer"><img src="src/assets/postgresql-logo.svg" alt="PostgreSQL" />PostgreSQL</a>
          <a className="skill-tile" href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer"><img src="src/assets/mongodb-logo.svg" alt="MongoDB" />MongoDB</a>

          {/* Cloud & Big Data */}
          <a className="skill-tile" href="https://cloud.google.com/bigquery" target="_blank" rel="noopener noreferrer"><img src="src/assets/bigquery-logo.svg" alt="BigQuery" />BigQuery</a>
          <a className="skill-tile" href="https://spark.apache.org/docs/latest/api/python/" target="_blank" rel="noopener noreferrer"><img src="src/assets/spark-logo.svg" alt="PySpark" />PySpark</a>
          <a className="skill-tile" href="https://www.databricks.com/" target="_blank" rel="noopener noreferrer"><img src="src/assets/databricks-logo.svg" alt="Databricks" />Databricks</a>

          {/* Visualization / BI */}
          <a className="skill-tile" href="https://www.tableau.com/" target="_blank" rel="noopener noreferrer"><img src="src/assets/tableau-logo.svg" alt="Tableau" />Tableau</a>
          <a className="skill-tile" href="https://powerbi.microsoft.com/" target="_blank" rel="noopener noreferrer"><img src="src/assets/powerbi-logo.svg" alt="Power BI" />Power BI</a>

          {/* Other Tools */}
          <a className="skill-tile" href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer"><img src="src/assets/vscode-logo.svg" alt="VS Code" />VS Code</a>
          <a className="skill-tile" href="https://ubuntu.com/tutorials/command-line-for-beginners#1-overview" target="_blank" rel="noopener noreferrer"><img src="src/assets/linux-logo.svg" alt="Linux" />Linux</a>
          <a className="skill-tile" href="https://www.postman.com/" target="_blank" rel="noopener noreferrer"><img src="src/assets/postman-logo.svg" alt="Postman" />Postman</a>
          <a className="skill-tile" href="https://www.docker.com/" target="_blank" rel="noopener noreferrer"><img src="src/assets/docker-logo.svg" alt="Docker" />Docker</a>
          <a className="skill-tile" href="https://kubernetes.io/" target="_blank" rel="noopener noreferrer"><img src="src/assets/kubernetes-logo.svg" alt="Kubernetes" />Kubernetes</a>
          <a className="skill-tile" href="https://www.gnu.org/software/bash/" target="_blank" rel="noopener noreferrer"><img src="src/assets/bash-logo.svg" alt="Bash" />Bash</a>
          <a className="skill-tile" href="https://www.microsoft.com/en-us/microsoft-365/excel" target="_blank" rel="noopener noreferrer"><img src="src/assets/excel-logo.svg" alt="Excel" />Excel</a>

        </div>
      </section>


      <section id="education">
        <h2>Education</h2>
        <ul>
          <li>Computer Science B.S. - Florida International University (some college)</li>
          <li>Data Science Bootcamp - General Assembly</li>
          <li>Data Science Learning Route - Platzi</li>
          <li>High School - LaSalle de Lima</li>
        </ul>
      </section>

      <section id="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>Google Data Analytics Certificate - Coursera (in progress)</li>
          <li><a href="https://www.freecodecamp.org/certification/CxA2003/javascript-algorithms-and-data-structures-v8" target="_blank" rel="noopener noreferrer">JavaScript Algorithms and Data Structures</a> - FreeCodeCamp</li>
          <li><a href="https://www.freecodecamp.org/certification/CxA2003/responsive-web-design" target="_blank" rel="noopener noreferrer">Responsive Web Design</a> - FreeCodeCamp</li>
        </ul>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Trade Replication System:</strong> A system that mirrors trades across multiple accounts with accuracy and speed.
          </li>
          <li>
            <a href="https://github.com/CxA2003/weapon-identification" target="_blank" rel="noopener noreferrer">
              Weapon Identification App
            </a>: CNN model designed to identify weapons in images, hosted on Streamlit.
          </li>
          <li>
            <a href="https://cxa2003.github.io/random-quotes/" target="_blank" rel="noopener noreferrer">
              Random Quotes
            </a>: Website with randomized quotes and colors for FreeCodeCamp certification.
          </li>
          <li>
            <a href="https://github.com/CxA2003/Pyculator" target="_blank" rel="noopener noreferrer">
              Pyculator
            </a>: Python calculator to work in command line.
          </li>
        </ul>
      </section>

      <footer>
        <h2>Contact</h2>
        <a href="#" onClick={handleCopy} title="Click to copy email">
          <img src="src/assets/mail-logo.svg" alt="Copy email" width="24" height="24" />
        </a>
        {copied && <span style={{ marginLeft: '10px' }}>Copied!</span>}
        <a href="https://www.linkedin.com/in/cesar-a-fernandez/" target="_blank" rel="noopener noreferrer">
          <img src="src/assets/LinkedIn-logo.svg" alt="LinkedIn Logo" width="24" height="24" />
        </a>
        <a href="https://github.com/CxA2003" target="_blank" rel="noopener noreferrer">
          <img src="src/assets/github-logo.svg" alt="GitHub Logo" width="24" height="24" />
        </a>
        <p>© 2025 Cesar Fernandez</p>
      </footer>
    </div>
  );
}

export default App;
