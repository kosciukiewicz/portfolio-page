import { ConfigProvider, Space } from "antd";
import styled from "styled-components";
import ExperienceView from "./experience/ExperienceView";
import ProjectsView from "./projects/ProjectsView";
import ResearchView from "./research/ResearchView";
import PostView from "./post/PostView";
import { Route, Routes } from "react-router-dom";

const RouterViewContainer = styled.div`
  margin-top: 0;
  padding-top: 24px;
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.mainBackground};
`;

function RouterView() {
  return (
    <RouterViewContainer>
      <ConfigProvider>
        <Routes>
          <Route path="/projects/:post" element={<PostView />} />
          <Route
            path="*"
            element={
              <Space size={48} direction="vertical">
                <ExperienceView />
                <ProjectsView />
                <ResearchView />
              </Space>
            }
          />
        </Routes>
      </ConfigProvider>
    </RouterViewContainer>
  );
}

export default RouterView;
