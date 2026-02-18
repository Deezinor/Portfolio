import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/Projects";
import { systemProjects } from "../data/SystemProjects";
import ProjectDetail from "../pages/ProjectDetail";
import SystemProjectTemplate from "./SystemProjectTemplate";

const ProjectRouter: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const regularProject = projects.find((p) => {
    return p.slug === slug;
  });
  const systemProject = systemProjects.find((p) => {
    return p.slug === slug;
  });

  useEffect(() => {
    if (!regularProject && !systemProject && slug) {
      navigate("/work");
    }
  }, [regularProject, systemProject, slug, navigate]);

  if (!regularProject && !systemProject) {
    return null;
  }

  if (systemProject) {
    return <SystemProjectTemplate />;
  }

  return <ProjectDetail />;
};

export default ProjectRouter;