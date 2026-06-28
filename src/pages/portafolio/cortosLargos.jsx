import React from "react";

import ProjectTemplate, { ProjectHead } from "../../templates/ProjectTemplate";
import project from "../../data/portfolio/cortosLargos";

const CortosLargosPage = () => <ProjectTemplate project={project} />;

export default CortosLargosPage;

export const Head = () => <ProjectHead project={project} />;
