import React, { useState } from 'react';
import './App.css';

function App() {
  const [copied, setCopied] = useState(false);

  // function used to copy email at the bottom (footer)
  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("cesarfp2020@gmail.com")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
  };

  return (
    <div className="flex flex-col items-center w-full text-center px-4">
      <div className="max-w-5xl w-full">

        {/* Header */}
        <header className="my-8">
          <h1 className="text-3xl font-bold">Cesar Fernandez</h1>
          <p className="text-lg">Data Scientist | Web Developer</p>
        </header>

        <section id="skills">
          <h2>Skills</h2>
          <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto p-4 text-center">

            {/* Programming Languages */}
            <a className="skill-tile" href="https://www.python.org/" target="_blank" rel="noopener noreferrer"><img src="/assets//python-logo.svg" alt="Python" />Python</a>
            <a className="skill-tile" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"><img src="/assets//javascript-logo.svg" alt="JavaScript" />JavaScript</a>
            <a className="skill-tile" href="https://en.wikipedia.org/wiki/SQL" target="_blank" rel="noopener noreferrer"><img src="/assets//sql-logo.svg" alt="SQL" />SQL</a>
            <a className="skill-tile" href="https://www.r-project.org/" target="_blank" rel="noopener noreferrer"><img src="/assets//r-logo.svg" alt="R" />R</a>

            {/* Web Development */}
            <a className="skill-tile" href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer"><img src="/assets//html5-logo.svg" alt="HTML5" />HTML5</a>
            <a className="skill-tile" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer"><img src="/assets//css3-logo.svg" alt="CSS3" />CSS3</a>
            <a className="skill-tile" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><img src="/assets//react-logo.svg" alt="React.js" />React.js</a>
            <a className="skill-tile" href="https://nodejs.org/" target="_blank" rel="noopener noreferrer"><img src="/assets//nodejs-logo.svg" alt="Node.js" />Node.js</a>
            <a className="skill-tile" href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer"><img src="/assets//npm-logo.svg" alt="NPM" />NPM</a>
            <a className="skill-tile" href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"><img src="/assets//tailwind-logo.svg" alt="Tailwind" />Tailwind</a>
            <a className="skill-tile" href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer"><img src="/assets//bootstrap-logo.svg" alt="Bootstrap" />Bootstrap</a>
            <a className="skill-tile" href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer"><img src="/assets//vite-logo.svg" alt="Vite" />Vite</a>
            <a className="skill-tile" href="https://git-scm.com/" target="_blank" rel="noopener noreferrer"><img src="/assets//git-logo.svg" alt="Git" />Git</a>
            <a className="skill-tile" href="https://github.com/" target="_blank" rel="noopener noreferrer"><img src="/assets//github-logo.svg" alt="GitHub" />GitHub</a>

            {/* Data & ML */}
            <a className="skill-tile" href="https://pandas.pydata.org/" target="_blank" rel="noopener noreferrer"><img src="/assets//pandas-logo.svg" alt="Pandas" />Pandas</a>
            <a className="skill-tile" href="https://numpy.org/" target="_blank" rel="noopener noreferrer"><img src="/assets//numpy-logo.svg" alt="NumPy" />NumPy</a>
            <a className="skill-tile" href="https://matplotlib.org/" target="_blank" rel="noopener noreferrer"><img src="/assets//matplotlib-logo.svg" alt="Matplotlib" />Matplotlib</a>
            <a className="skill-tile" href="https://seaborn.pydata.org/" target="_blank" rel="noopener noreferrer"><img src="/assets//seaborn-logo.svg" alt="Seaborn" />Seaborn</a>
            <a className="skill-tile" href="https://scikit-learn.org/" target="_blank" rel="noopener noreferrer"><img src="/assets//scikit-learn-logo.svg" alt="Scikit-learn" />Scikit-learn</a>
            <a className="skill-tile" href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer"><img src="/assets//tensorflow-logo.svg" alt="TensorFlow" />TensorFlow</a>
            <a className="skill-tile" href="https://streamlit.io/" target="_blank" rel="noopener noreferrer"><img src="/assets//streamlit-logo.svg" alt="Streamlit" />Streamlit</a>
            <a className="skill-tile" href="https://jupyter.org/" target="_blank" rel="noopener noreferrer"><img src="/assets//jupyter-logo.svg" alt="Jupyter" />Jupyter</a>
            <a className="skill-tile" href="https://colab.research.google.com/" target="_blank" rel="noopener noreferrer"><img src="/assets//colab-logo.svg" alt="Colab" />Colab</a>

            {/* Databases */}
            <a className="skill-tile" href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer"><img src="/assets//mysql-logo.svg" alt="MySQL" />MySQL</a>
            <a className="skill-tile" href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer"><img src="/assets//postgresql-logo.svg" alt="PostgreSQL" />PostgreSQL</a>
            <a className="skill-tile" href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer"><img src="/assets//mongodb-logo.svg" alt="MongoDB" />MongoDB</a>

            {/* Cloud & Big Data */}
            <a className="skill-tile" href="https://cloud.google.com/bigquery" target="_blank" rel="noopener noreferrer"><img src="/assets//bigquery-logo.svg" alt="BigQuery" />BigQuery</a>
            <a className="skill-tile" href="https://spark.apache.org/docs/latest/api/python/" target="_blank" rel="noopener noreferrer"><img src="/assets//spark-logo.svg" alt="PySpark" />PySpark</a>
            <a className="skill-tile" href="https://www.databricks.com/" target="_blank" rel="noopener noreferrer"><img src="/assets//databricks-logo.svg" alt="Databricks" />Databricks</a>

            {/* Visualization / BI */}
            <a className="skill-tile" href="https://www.tableau.com/" target="_blank" rel="noopener noreferrer"><img src="/assets//tableau-logo.svg" alt="Tableau" />Tableau</a>
            <a className="skill-tile" href="https://powerbi.microsoft.com/" target="_blank" rel="noopener noreferrer"><img src="/assets//powerbi-logo.svg" alt="Power BI" />Power BI</a>

            {/* Other Tools */}
            <a className="skill-tile" href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer"><img src="/assets//vscode-logo.svg" alt="VS Code" />VS Code</a>
            <a className="skill-tile" href="https://ubuntu.com/tutorials/command-line-for-beginners#1-overview" target="_blank" rel="noopener noreferrer"><img src="/assets//linux-logo.svg" alt="Linux" />Linux</a>
            <a className="skill-tile" href="https://www.postman.com/" target="_blank" rel="noopener noreferrer"><img src="/assets//postman-logo.svg" alt="Postman" />Postman</a>
            <a className="skill-tile" href="https://www.docker.com/" target="_blank" rel="noopener noreferrer"><img src="/assets//docker-logo.svg" alt="Docker" />Docker</a>
            <a className="skill-tile" href="https://kubernetes.io/" target="_blank" rel="noopener noreferrer"><img src="/assets//kubernetes-logo.svg" alt="Kubernetes" />Kubernetes</a>
            <a className="skill-tile" href="https://www.gnu.org/software/bash/" target="_blank" rel="noopener noreferrer"><img src="/assets//bash-logo.svg" alt="Bash" />Bash</a>
            <a className="skill-tile" href="https://www.microsoft.com/en-us/microsoft-365/excel" target="_blank" rel="noopener noreferrer"><img src="/assets//excel-logo.svg" alt="Excel" />Excel</a>

          </div>
        </section>

        <section id="projects" className="max-w-6xl mx-auto p-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>
          <div className="project-grid">

            {/* Example Project Card */}
            <a target="_blank" rel="noopener noreferrer" className="project-link">
              <div className="project-card">
                <div className="project-text">
                  <h3>Trade Replication System</h3>
                  <p>
                    Developed a trade replication system that mirrors orders across multiple accounts using the TradeLocker API. Overcame the absence of webhooks by implementing a polling mechanism based on .NET procedures, ensuring near real-time synchronization with high accuracy and reliability.
                  </p>

                </div>
                <div className="project-img">
                  <img src="/assets//copy-icon.svg" alt="Trade Replication System Image" />
                </div>
              </div>
            </a>

            <a href="https://github.com/CxA2003/weapon-identification" target="_blank" rel="noopener noreferrer" className="project-link">
              <div className="project-card">
                <div className="project-text">
                  <h3>Weapon Identification App</h3>
                  <p>
                    Built a customizable CNN model hosted on Streamlit to identify weapons in images, using the OpenImages API for real-time dataset generation. The system allows users to modify target classes with minimal changes, enabling fast retraining for a wide range of object detection goals beyond weapons.
                  </p>
                </div>
                <div className="project-img">
                  <img src="/assets//picture-icon.svg" alt="Weapon Identification Image" />
                </div>
              </div>
            </a>

            <a href="https://cxa2003.github.io/random-quotes/" target="_blank" rel="noopener noreferrer" className="project-link">
              <div className="project-card">
                <div className="project-text">
                  <h3>Random Quotes</h3>
                  <p>
                    A simple, responsive website that displays randomized quotes and background colors on each click. Built as part of FreeCodeCamp’s certification projects to demonstrate proficiency in JavaScript, DOM manipulation, and UI state management.
                  </p>

                </div>
                <div className="project-img">
                  <img src="/assets//random-icon.svg" alt="Random Quotes Image" />
                </div>
              </div>
            </a>

            <a href="https://github.com/CxA2003/Pyculator" target="_blank" rel="noopener noreferrer" className="project-link">
              <div className="project-card">
                <div className="project-text">
                  <h3>Pyculator</h3>
                  <p>
                    A Python-based command-line calculator that handles basic arithmetic and advanced operations such as square root, exponentiation, and logarithms. It also includes geometry functions to calculate properties of circles and regular polygons, offering a versatile tool for quick math tasks directly from the terminal.
                  </p>
                </div>
                <div className="project-img">
                  <img src="/assets//calculator-icon.svg" alt="Calculator Image" />
                </div>
              </div>
            </a>

          </div>
        </section>


        <section id="education" className="max-w-6xl mx-auto p-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md text-center">
              <img src="/assets//fiu-logo.png" alt="Coursera Logo" className='edu-image' />
              <p>Computer Science B.S. - FIU (some college)</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md text-center">
              <img src="/assets//ga-logo.png" alt="Coursera Logo" className='edu-image' />
              <p>Data Science Bootcamp - General Assembly</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md text-center">
              <img src="/assets//platzi-logo.png" alt="Coursera Logo" className='edu-image' />
              <p>Data Science Learning Route - Platzi</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md text-center">
              <img src="/assets//lasalle-logo.jpeg" alt="Coursera Logo" className='edu-image' />
              <p>High School - LaSalle de Lima</p>
            </div>
          </div>
        </section>


        <section id="certifications" className="max-w-6xl mx-auto p-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1 */}
            <a
              href="https://www.coursera.org/professional-certificates/google-data-analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
            >
              <img src="/assets//coursera-logo.svg" alt="Coursera Logo" className="cert-image" />
              <p className="cert-title">Google Data Analytics Certificate</p>
            </a>

            {/* Card 2 */}
            <a
              href="https://www.freecodecamp.org/certification/CxA2003/javascript-algorithms-and-data-structures-v8"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
            >
              <img src="/assets//freecodecamp-logo.svg" alt="freeCodeCamp Logo" className="cert-image" />
              <p className="cert-title">JavaScript Algorithms and Data Structures</p>
            </a>

            {/* Card 3 */}
            <a
              href="https://www.freecodecamp.org/certification/CxA2003/responsive-web-design"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
            >
              <img src="/assets//freecodecamp-logo.svg" alt="freeCodeCamp Logo" className="cert-image" />
              <p className="cert-title">Responsive Web Design</p>
            </a>

          </div>
        </section>


        <section id="about" className="mx-auto my-8 px-4" style={{ maxWidth: '60%' }}>
          <h2 className="text-2xl font-bold mb-6 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row justify-around gap-8 md:gap-20 items-center">
            <div className="flex-1 text-center">
              <p>
                I began working right after high school, teaching myself the tools and technologies I needed to grow professionally.
                While I initially enrolled in a Computer Science program at Florida International University, I had to step away due to financial constraints.
                Determined to continue learning, I pursued self-study and later enrolled in General Assembly’s Data Science Bootcamp to solidify my skills.
                Today, I bring hands-on experience with Python, SQL, and data visualization, and a deep passion for transforming data into meaningful insights.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/assets//photo-me.jpg"
                alt="Cesar Fernandez"
                className="w-48 h-48 md:w-60 md:h-60 rounded-lg object-cover shadow-md"
              />
            </div>
          </div>
        </section>



      </div>

      {/* Footer (outside max-width wrapper, so it's full width) */}
      <footer className="w-full bg-[#131313] text-white text-center py-4">
        <h2>Contact</h2>
        <div class="contact-div">
          <a href="#" onClick={handleCopy} title="Click to copy email">
            <img src="/assets//mail-logo.svg" alt="Copy email" width="24" height="24" />
          </a>
          {copied && <span className="ml-2 text-sm">Copied!</span>}
          <a href="https://www.linkedin.com/in/cesar-a-fernandez/" target="_blank" rel="noopener noreferrer">
            <img src="/assets//LinkedIn-logo.svg" alt="LinkedIn Logo" width="24" height="24" />
          </a>
          <a href="https://github.com/CxA2003" target="_blank" rel="noopener noreferrer">
            <img src="/assets//github-logo.svg" alt="GitHub Logo" width="24" height="24" />
          </a>
        </div>
        <p className="mt-2 text-xs">© 2025 Cesar Fernandez</p>
      </footer>
    </div>
  );
}

export default App;
