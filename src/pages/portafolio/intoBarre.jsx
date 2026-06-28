import React from "react";

import ProjectTemplate, { ProjectHead } from "../../templates/ProjectTemplate";
import project from "../../data/portfolio/intoBarre";

const IntoBarrePage = () => <ProjectTemplate project={project} />;

export default IntoBarrePage;

export const Head = () => <ProjectHead project={project} />;
