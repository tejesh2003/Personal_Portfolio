import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="My Projects" />
      </div>
      <div className="flex flex-wrap justify-center gap-6 xl:gap-14">
        <ProjectsCard
          title="Investment Tracker"
          shortDes="A real-time investment tracker with multiple portfolios and integrated news. (Ongoing)"
          fullDes={`– Works with real-time data using multiple APIs.
            – Supports multiple portfolios, including stocks, mutual funds, SIP, and gold within a single portfolio.
            – Provides general news and stock-specific news.
            – Includes a basic chatbot for basic queries.
            – Allows file input, which reads stock data and adds it to holdings and transaction lists.
            – Features alerts for important events in the portfolios.
            – Designed with Chart.js for visual representation of data.
            – Set to be deployed on AWS.`}
          githubLink="https://github.com/FinSage-Investment-Tracker/FinSage"
          techStack={[
            "JavaScript",
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Bootstrap",
            "Chart.js",
            "Tailwind",
          ]}
        />

        <ProjectsCard
          title="DevTinder"
          shortDes="A developer matchmaking platform to connect like-minded devs based on tech stack and interests. (Ongoing)"
          fullDes={`– Matches developers using real-time filtering based on skills, preferences, and availability.
    – Integrated with socket.io for instant messaging and connection requests.
    – User profiles include tech stack, project experience, GitHub links, and availability status.
    – Supports project collaboration rooms with basic chat and task board.
    – Designed with Tailwind for fast and modern UI development.
    – Backend handles secure user authentication and matchmaking logic.
    – Used indexing in MongoDB to optimize database queries and ensure faster backend responses.
    – Deployed on AWS for scalability and reliability.`}
          githubLink="https://github.com/tejesh2003/DevTinder"
          techStack={[
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Socket.io",
            "Tailwind CSS",
            "JWT",
            "Mongoose",
            "AWS",
          ]}
          websiteLink="http://13.60.76.85/"
        />

        <ProjectsCard
          title="iNotebook"
          shortDes="A MERN stack-based notes web application for efficient note-taking and storage."
          fullDes={`– Developed a MERN stack application with React.js for a user-friendly, responsive front-end and Bootstrap for mobile-first design.
          – Employed MongoDB for efficient data storage and retrieval, managing user information and notes.
          – Integrated Express.js and Node.js to build a robust back-end API, handling RESTful APIs, CRUD operations, user authentication, and application functionalities.`}
          githubLink="https://github.com/tejesh2003/iNotebook"
          techStack={[
            "JavaScript",
            "React.js",
            "MongoDB",
            "Node.js",
            "Express.js",
            "Bootstrap",
          ]}
        />

        <ProjectsCard
          title="DocuEmbed"
          shortDes="A scalable pipeline to ingest, parse, and vectorize documents using Temporal.io and Milvus."
          fullDes={`– Built an end-to-end document ingestion system using Python, Temporal.io, and Docker.
  – Parsed documents into structured chunks using Unstructured.io and generated vector embeddings using open-source models.
  – Stored embeddings in Milvus vector database for semantic search and efficient retrieval.
  – Designed with modularity, async workflows (via asyncio), and fault-tolerant orchestration using Temporal workflows.
  – Containerized the entire stack using Docker and managed services via docker-compose.`}
          githubLink="https://github.com/tejesh2003/DocuEmbed"
          techStack={[
            "Python",
            "Temporal.io",
            "Milvus",
            "Docker",
            "Unstructured.io",
          ]}
        />

        <ProjectsCard
          title="TaskManager"
          shortDes="A feature-rich MERN stack task management web application with advanced task operations."
          fullDes={`– Built a full-stack task management web app using the MERN stack to streamline task handling and team coordination.
          – Designed a responsive and clean UI using React.js and Vanilla CSS, ensuring intuitive interaction and usability.
          – Developed a robust backend with Node.js and Express.js to support user authentication, task CRUD operations, and assignments.
          – Integrated advanced features like task assigning, filtering, sorting, searching, editing, and status tracking.
          – Deployed the frontend on Vercel for optimized delivery and the backend on Render for scalable server-side handling.`}
          githubLink="https://github.com/tejesh2003/TaskManager"
          techStack={[
            "JavaScript",
            "CSS",
            "React.js",
            "MongoDB",
            "Node.js",
            "Express.js",
          ]}
          websiteLink="https://task-manager-git-main-tejeshs-projects-72740712.vercel.app/"
        />

        <ProjectsCard
          title="News-Monkey: A News App"
          shortDes="A news aggregator web app with infinite scrolling, search functionality, and dark mode."
          fullDes={`– Designed a news aggregator web app containing infinite scrolling, search functionality, and dark mode.
          – Leveraged the NewsAPI to fetch top headlines of multiple countries separately.
          – Integrated error handling, retry logic, and local storage for reliable data fetching.`}
          githubLink="https://github.com/tejesh2003/News-Monkey"
          techStack={["React", "CSS", "Bootstrap"]}
        />

        <ProjectsCard
          title="Personal Portfolio Website"
          shortDes="A personal portfolio website to showcase my skills, projects, and experience."
          fullDes={`– Developed a responsive personal portfolio website using HTML, CSS, and JavaScript.
            – Integrated mobile-first design and smooth animations with Tailwind CSS.
            – Managed version control and deployed the site on GitHub Pages for easy access.
            – Included 'About Me', 'Skills', 'Projects', and 'Contact' sections to showcase my work and experience.`}
          githubLink="https://github.com/tejesh2003/Personal_Portfolio/tree/gh-pages"
          techStack={[
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "Tailwind CSS",
            "Git",
          ]}
        />

        <ProjectsCard
          title="Multiple Disease Prediction System"
          shortDes="A system for predicting multiple diseases using machine learning models like Logistic Regression, KNN, and Naïve Bayes."
          fullDes={`– Developed a Multi Disease Prediction system employing Logistic Regression, KNN, and Naïve Bayes models for each disease.
          – Designed a user-friendly web app for inputting patient vitals and predicting outcomes.
          – Achieved high prediction accuracies: 97% for chronic kidney disease (Naïve Bayes), 81% for Diabetes, and 86% for heart disease (Logistic Regression).`}
          githubLink="https://github.com/tejesh2003/Multiple-Disease-Prediction-System"
          techStack={[
            "Data Visualization",
            "Multiple Models Deployment",
            "Streamlit",
          ]}
        />
      </div>
    </section>
  );
};

export default Projects;
