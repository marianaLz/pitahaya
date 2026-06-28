import React from "react";

import ProjectTemplate, { ProjectHead } from "../../templates/ProjectTemplate";
import project from "../../data/portfolio/liaveVoyager";

const LiaveVoyagerPage = () => <ProjectTemplate project={project} />;

export default LiaveVoyagerPage;

export const Head = () => <ProjectHead project={project} />;
