import alsa from "./alsa";
import smatch from "./smatch";
import gaia from "./gaia";
import mayaKaan from "./mayaKaan";
import eli from "./eli";
import intoBarre from "./intoBarre";
import liaveVoyager from "./liaveVoyager";
import cortosLargos from "./cortosLargos";
import casaAlvento from "./casaAlvento";

const projects = [
  alsa,
  liaveVoyager,
  smatch,
  cortosLargos,
  eli,
  casaAlvento,
  intoBarre,
  mayaKaan,
  gaia,
];

const projectsBySlug = projects.reduce((acc, project) => {
  acc[project.slug] = project;
  return acc;
}, {});

export const getProjectBySlug = (slug) => projectsBySlug[slug] || null;

export const getSortedProjects = ({ featuredOnly = false } = {}) => {
  let list = [...projects];

  if (featuredOnly) {
    list = list.filter((project) => project.featured !== false);
  }

  return list.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
};

export const getAllProjects = () => getSortedProjects();

export default projects;
