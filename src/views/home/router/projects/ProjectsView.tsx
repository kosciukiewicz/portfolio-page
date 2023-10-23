import styled from "styled-components";
import { Col, Row, Space, Typography } from "antd";

import ProjectsCard from "./ProjectCard";
import projects from "../../../../data/projects.json";
import { Project } from "../../../../data/interfaces";

const { Text } = Typography;

const ProjectsViewContainer = styled.div`
  margin-left: 48px;
`;

function ProjectsView() {
  const projects_data = projects as Project[];
  return (
    <ProjectsViewContainer>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Text strong style={{ fontSize: "1.5em" }}>
          Projects
        </Text>
        <Row gutter={[16, 16]}>
          {projects_data.map((project) => (
            <Col key={project.title} span={8}>
              <ProjectsCard
                key={project.title}
                title={project.title}
                description={project.description}
                cover_image_url={project.cover_image_url}
                read_more_link={project.read_more_link}
              />
            </Col>
          ))}
        </Row>
      </Space>
    </ProjectsViewContainer>
  );
}

export default ProjectsView;
