import styled from "styled-components";
import ReactGA from "react-ga";

import AboutView from "./about/AboutView";
import RouterView from "./router/RouterView";
import { Col, Row } from "antd";

const HomeViewContainer = styled.div`
  margin: 0;
  padding: 0;
  max-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  position: relative;
  height: auto;
  width: 100%;
`;

function HomeView() {
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <HomeViewContainer>
      <Row>
        <Col md={{ span: 7 }} xxl={{ span: 7 }}>
          <AboutView />
        </Col>
        <Col md={{ span: 17 }} xxl={{ span: 17 }}>
          <RouterView />
        </Col>
      </Row>
    </HomeViewContainer>
  );
}

export default HomeView;
