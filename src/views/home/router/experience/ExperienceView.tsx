import { Space, Steps, Typography } from "antd";
import styled from "styled-components";
import eduction from "../../../../data/education.json";
import experience from "../../../../data/experience.json";
import { EducationItem, ExperienceItem } from "../../../../data/interfaces";

const { Text } = Typography;

const ExperienceViewContainer = styled.div`
  margin-left: 48px;
`;

const ExperienceTitle = styled(Text)`
  font-spacing: 0.1em;
  font-size: 1em;
  color: black;
  font-weight: bold;
`;

const TimePeriodText = styled(Text)`
  font-spacing: 0.1em;
  color: #808080;
`;

const ExperienceItemDescriptionContainer = styled.div`
  max-width: 85%;
  text-align: justify;
`;

function ExperienceView() {
  const eduction_data = eduction as EducationItem[];
  const sorted_eduction_data = eduction_data.sort(
    (e1, e2) => e1.order - e2.order,
  );

  const experience_data = experience as ExperienceItem[];
  const sorted_experience_data = experience_data.sort(
    (e1, e2) => e1.order - e2.order,
  );

  return (
    <ExperienceViewContainer>
      <Space direction="vertical">
        <Text strong style={{ fontSize: "1.5em" }}>
          Experience
        </Text>
        <Steps
          progressDot
          current={2}
          direction="vertical"
          items={sorted_experience_data.map((experience_item) => {
            return {
              title: (
                <div>
                  <Space direction="horizontal">
                    <ExperienceTitle>
                      {experience_item.organization}
                    </ExperienceTitle>{" "}
                    <TimePeriodText>{experience_item.years}</TimePeriodText>
                  </Space>
                </div>
              ),
              description: (
                <ExperienceItemDescriptionContainer>
                  <Space direction="vertical">
                    <TimePeriodText strong>
                      {experience_item.title}
                    </TimePeriodText>
                    <Text style={{ fontSize: "1em" }}>
                      {experience_item.description}
                    </Text>
                  </Space>
                </ExperienceItemDescriptionContainer>
              ),
            };
          })}
        />
        <Text strong style={{ fontSize: "1.5em" }}>
          Education
        </Text>
        <Steps
          progressDot
          current={2}
          direction="vertical"
          items={sorted_eduction_data.map((education_item) => {
            return {
              title: (
                <div>
                  <Space direction="horizontal">
                    <ExperienceTitle>{education_item.title}</ExperienceTitle>{" "}
                    <TimePeriodText>{education_item.years}</TimePeriodText>
                  </Space>
                </div>
              ),
              description: (
                <div>
                  <Space direction="vertical">
                    <TimePeriodText style={{ fontSize: "1em" }}>
                      {education_item.organization}
                    </TimePeriodText>
                  </Space>
                </div>
              ),
            };
          })}
        />
      </Space>
    </ExperienceViewContainer>
  );
}

export default ExperienceView;
