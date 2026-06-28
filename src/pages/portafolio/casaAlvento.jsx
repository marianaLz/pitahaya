import React from "react";

import ProjectTemplate, { ProjectHead } from "../../templates/ProjectTemplate";
import project from "../../data/portfolio/casaAlvento";

const CasaAlventoPage = () => <ProjectTemplate project={project} />;

export default CasaAlventoPage;

export const Head = () => <ProjectHead project={project} />;
