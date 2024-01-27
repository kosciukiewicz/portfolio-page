import styled from "styled-components";
import { List, Space, Typography, Tag } from "antd";

import projects from "../../../../data/projects.json";
import { Projects } from "../../../../data/interfaces";

const { Text } = Typography;

const ProjectsViewContainer = styled.div`
  margin-left: 48px;
`;

const ReadMoreLink = styled.a`
  color: ${(props) => props.theme.colorPrimary};
  font-weight: bold;
  margin-left: 12px;
`;

const ProjectTag = styled(Tag)`
  border-radius: 12px;
  font-size: 1em;
  padding: 4px 12px 4px 12px;
  background-color: ${(props) => props.theme.tagBackgroundColor};
  border-width: 0px;
  color: ${(props) => props.theme.tagTextColor};
`;

function ProjectsView() {
  const projects_data = projects as Projects;
  return (
    <ProjectsViewContainer>
      <Space direction="vertical" style={{ width: "70%" }}>
        <Text strong style={{ fontSize: "1.5em" }}>
          Projects
        </Text>
        <List
          itemLayout="vertical"
          dataSource={projects_data.projects}
          renderItem={(item) => (
            <List.Item
              key={item.title}
              actions={[
                <div key="tags">
                  {item.tags.map((project_tag) => (
                    <ProjectTag key={project_tag}>{project_tag}</ProjectTag>
                  ))}
                </div>,
              ]}
            >
              <List.Item.Meta
                title={item.title}
                description={
                  <div style={{ color: "black" }}>
                    {item.description}
                    <ReadMoreLink href={item.read_more_link}>
                      Read More
                    </ReadMoreLink>
                  </div>
                }
              />
            </List.Item>
          )}
        />
        <Text strong style={{ fontSize: "1.5em" }}>
          Ongoing Projects
        </Text>
        <List
          itemLayout="horizontal"
          dataSource={projects_data.in_progress}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                description={
                  <div style={{ color: "black" }}>
                    <strong>{item.title}</strong> - {item.description}
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </Space>
    </ProjectsViewContainer>
  );
}

export default ProjectsView;
