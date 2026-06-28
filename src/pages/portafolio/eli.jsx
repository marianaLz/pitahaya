import React from "react";

import ProjectTemplate, { ProjectHead } from "../../templates/ProjectTemplate";
import project from "../../data/portfolio/eli";

const EliPage = () => <ProjectTemplate project={project} />;

export default EliPage;

export const Head = () => <ProjectHead project={project} />;
