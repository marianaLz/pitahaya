import React from "react";

import ProjectTemplate, { ProjectHead } from "../../templates/ProjectTemplate";
import project from "../../data/portfolio/smatch";

const SmatchPage = () => <ProjectTemplate project={project} />;

export default SmatchPage;

export const Head = () => <ProjectHead project={project} />;
