import { Card } from "antd";
import { images } from "../../../../assets/images/images";
import { styled } from "styled-components";

interface ProjectsCardProps {
  title: string;
  description: string;
  cover_image_url: string;
  read_more_link: string;
}

const ReadMoreLink = styled.a`
  color: ${(props) => props.theme.colorPrimary};
  font-weight: bold;
  margin-left: 12px;
`;

function ProjectsCard(props: ProjectsCardProps) {
  return (
    <Card
      hoverable
      bordered={true}
      style={{ height: "330px" }}
      cover={
        <img
          style={{ height: "160px", objectFit: "cover" }}
          alt="example"
          src={images[props.cover_image_url]}
        />
      }
    >
      <Card.Meta
        title={props.title}
        description={
          <div>
            {props.description}
            <ReadMoreLink href={props.read_more_link}>Read More</ReadMoreLink>
          </div>
        }
      />
    </Card>
  );
}

export default ProjectsCard;
