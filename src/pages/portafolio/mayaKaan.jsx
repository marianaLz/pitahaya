import React from "react";

import ProjectTemplate, { ProjectHead } from "../../templates/ProjectTemplate";
import project from "../../data/portfolio/mayaKaan";

const MayaKaanPage = () => <ProjectTemplate project={project} />;

export default MayaKaanPage;

export const Head = () => <ProjectHead project={project} />;
