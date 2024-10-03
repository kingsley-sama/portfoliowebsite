import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./main.css"
import { projects } from './details';

const ProjectDetails = () => {
  const { project_id } = useParams();
  const navigate = useNavigate();

  const project = projects.find(p => p.id === project_id);

  const handleBack = () => {
    navigate(-1);
  };

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-card_container">
      <div className="project-card">
        <div className="project-image">
          {project.imageUrl && (
            <img src={project.imageUrl} alt={project.title} />
          )}
        </div>
        <div className="project-paragraph">
          <h1>{project.title}</h1>
          <h2>User Story:</h2>
          <div className="user-story">
            <p>{project.userStory}</p>
          </div>
          <div className="tech-stack">
            <p>{project.techStack}</p>
          </div>
          <div className="navigation">
            <button className="back-button" onClick={handleBack}>
              Back
            </button>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="view-button">View Website Live</button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
