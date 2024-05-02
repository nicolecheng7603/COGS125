import React from 'react';
import { useParams } from 'react-router-dom';

function Projects() {
  const { id } = useParams(); // Extract the project ID from the URL

  return (
    <div>
      <h2>Projects Page</h2>
      {id ? <p>Showing details for project: {id}</p> : <p>Select a project to view details.</p>}
    </div>
  );
}

export default Projects;
