import styled from "styled-components";

import publications from "../../../../data/publications.json";
import { Publication } from "../../../../data/interfaces";
import { Divider, List, Space, Tag, Typography } from "antd";
import Markdown from "react-markdown";
import Link from "antd/es/typography/Link";
const { Text } = Typography;

const ResearchViewContainer = styled.div`
  margin-left: 48px;
`;

const ResearchListItem = styled.div`
  margin-top: 12px;
  p {
    margin: 0px;
  }
`;

const PublicationTitle = styled(Text)`
  font-spacing: 0.1em;
  font-size: 1.3em;
  color: black;
  font-weight: bold;
`;

const ConferenceTag = styled(Tag)`
  background-color: ${(props) => props.theme.tagBackgroundColor};
  border-width: 0px;
  color: ${(props) => props.theme.tagTextColor};
  margin-top: 18px;
  min-width: 80px;
  text-align: center;
  font-size: 1.2em;
  padding: 8px 12px 8px 12px;
`;

const DescriptionSpace = styled(Space)`
  gap: 24px;
  height: 16px;
`;

const PublicationLink = styled(Link)`
  font-weight: bold;
`;

function ResearchView() {
  const publicationsData = publications as Publication[];
  const groupedPublications = publicationsData.reduce(
    (groups: { [key: number]: [Publication] }, publication) => {
      const groupBy = publication.year;
      const group = groups[groupBy] || [];
      group.push(publication);
      groups[groupBy] = group;
      return groups;
    },
    {},
  );

  return (
    <ResearchViewContainer>
      <Space direction="vertical">
        <Text strong style={{ fontSize: "1.5em" }}>
          Selected publications
        </Text>
        {Object.entries(groupedPublications)
          .reverse()
          .map(([year, yearPublications]) => (
            <div key={year}>
              <Divider
                key={`divider` + year}
                orientation="left"
                orientationMargin="0"
              >
                <Text strong>{year}</Text>
              </Divider>
              <List
                key={`list` + year}
                itemLayout="vertical"
                size="default"
                dataSource={yearPublications}
                renderItem={(publication) => (
                  <ResearchListItem key={publication.title}>
                    <Space size={24} direction="horizontal">
                      <ConferenceTag>{publication.conference}</ConferenceTag>
                      <PublicationTitle>{publication.title}</PublicationTitle>
                    </Space>
                    <br />
                    <DescriptionSpace direction="horizontal">
                      <ConferenceTag style={{ visibility: "hidden" }}>
                        {publication.conference}
                      </ConferenceTag>
                      <Markdown>{publication.authors}</Markdown>
                    </DescriptionSpace>
                    <DescriptionSpace
                      direction="horizontal"
                      style={{ width: "90%", marginTop: "12px" }}
                    >
                      <ConferenceTag style={{ visibility: "hidden" }}>
                        {publication.conference}
                      </ConferenceTag>
                      <Text italic>
                        {publication.proceedings} ({publication.year})
                      </Text>
                    </DescriptionSpace>
                    <br />
                    <DescriptionSpace
                      direction="horizontal"
                      style={{ height: "16px", marginTop: "8px" }}
                    >
                      <ConferenceTag style={{ visibility: "hidden" }}>
                        {publication.conference}
                      </ConferenceTag>
                      <Space
                        size={8}
                        style={{ height: "16px" }}
                        direction="horizontal"
                      >
                        {publication.links !== undefined
                          ? publication.links.map((link) => (
                              <PublicationLink
                                key={link.name}
                                href={link.url}
                                target="_blank"
                              >
                                {link.name}
                              </PublicationLink>
                            ))
                          : null}
                      </Space>
                    </DescriptionSpace>
                  </ResearchListItem>
                )}
              />
            </div>
          ))}
      </Space>
    </ResearchViewContainer>
  );
}

export default ResearchView;
