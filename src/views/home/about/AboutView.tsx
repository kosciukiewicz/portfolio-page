import { Avatar, Tag, Space, Typography } from "antd";
import styled from "styled-components";

import about from "../../../data/about.json";
import MyImage from "../../../assets/images/me.jpg";
import CV from "../../../assets/Witold Kościukiewicz - Machine Learning Engineer.pdf";
import { GithubFilled, LinkedinFilled, MailFilled } from "@ant-design/icons";
import { AboutData } from "../../../data/interfaces";

const { Paragraph, Text } = Typography;

const AboutViewContainer = styled.div`
  margin: 0px;
  padding: 24px 24px 24px 24px;
  border-radius: 0px 0px 24px 24px;
  background-color: ${(props) => props.theme.sidePanelBackground};
`;

const GrayedOutText = styled(Text)`
  color: #808080;
`;

const SkillTag = styled(Tag)`
  border-radius: 12px;
  font-size: 1em;
  padding: 4px 12px 4px 12px;
`;

const TechSkillTag = styled(SkillTag)`
  background-color: ${(props) => props.theme.tagBackgroundColor};
  border-width: 0px;
  color: ${(props) => props.theme.tagTextColor};
`;

const AboutParagraph = styled(Paragraph)`
  text-align: justify;
  margin-bottom: 0px;
`;

const AboutIcon = styled.a`
  font-size: 2em;
  color: #808080;
  cursor: pointer;
`;

function AboutView() {
  const about_data = about as AboutData;
  return (
    <AboutViewContainer>
      <Space size={24} direction="vertical">
        <Space size={8} direction="vertical">
          <Avatar size={128} src={MyImage}></Avatar>
          <Space size={0} direction="vertical">
            <Text strong style={{ fontSize: "2em" }}>
              {about.name}
            </Text>
            <Text style={{ fontSize: "1.1em" }}>{about.position}</Text>
            <GrayedOutText style={{ fontSize: "1em" }}>
              {about.location}
            </GrayedOutText>
          </Space>
          <Space size={8} direction="horizontal">
            <AboutIcon href={"mailto:" + about_data.email_address}>
              <MailFilled
                style={{
                  fontSize: "0.8em",
                  color: "${(props) => props.theme.sidePanelBackground}",
                }}
              />
            </AboutIcon>
            <AboutIcon href={about_data.github} target="_blank">
              <GithubFilled
                style={{
                  fontSize: "0.8em",
                  color: "${(props) => props.theme.sidePanelBackground}",
                }}
              />
            </AboutIcon>
            <AboutIcon href={about_data.linked_in} target="_blank">
              <LinkedinFilled
                style={{
                  fontSize: "0.8em",
                  color: "${(props) => props.theme.sidePanelBackground}",
                }}
              />
            </AboutIcon>
            <AboutIcon href={CV} target="_blank">
              <div
                style={{
                  fontSize: "0.6em",
                  color: "${(props) => props.theme.sidePanelBackground}",
                }}
              >
                CV
              </div>
            </AboutIcon>
          </Space>
        </Space>
        <Space
          size={8}
          direction="vertical"
          style={{ width: "100%", justifyContent: "center" }}
        >
          <GrayedOutText
            strong
            style={{ fontSize: "0.9em", letterSpacing: "0.1em" }}
          >
            About
          </GrayedOutText>
          <AboutParagraph> {about_data.about} </AboutParagraph>
        </Space>
        <Space size={8} direction="vertical">
          <GrayedOutText
            strong
            style={{ fontSize: "0.9em", letterSpacing: "0.1em" }}
          >
            Skills
          </GrayedOutText>

          <Space size={16} direction="vertical">
            {about_data.skills.map((about_skill) => (
              <Space key={about_skill.skill_type} size={8} direction="vertical">
                <GrayedOutText
                  strong
                  style={{ fontSize: "0.8em", letterSpacing: "0.1em" }}
                >
                  {about_skill.skill_type}
                </GrayedOutText>
                <Space size={4} direction="horizontal" wrap>
                  {about_skill.skills.map((skill) => (
                    <TechSkillTag key={skill}>{skill}</TechSkillTag>
                  ))}
                </Space>
              </Space>
            ))}
          </Space>
        </Space>
      </Space>
    </AboutViewContainer>
  );
}

export default AboutView;
