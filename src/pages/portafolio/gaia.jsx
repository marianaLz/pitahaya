import React from "react";

import ProjectTemplate, { ProjectHead } from "../../templates/ProjectTemplate";
import project from "../../data/portfolio/gaia";

const GaiaPage = () => <ProjectTemplate project={project} />;

export default GaiaPage;

export const Head = () => <ProjectHead project={project} />;
