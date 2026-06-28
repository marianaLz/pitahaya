import React from "react";

import ProjectTemplate, { ProjectHead } from "../../templates/ProjectTemplate";
import project from "../../data/portfolio/alsa";

const AlsaPage = () => <ProjectTemplate project={project} />;

export default AlsaPage;

export const Head = () => <ProjectHead project={project} />;
