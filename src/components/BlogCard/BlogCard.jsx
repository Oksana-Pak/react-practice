import { formatDistanceToNow } from 'date-fns';
import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName,
  Date as PostedDate,
} from './BlogCard.styled';

export const BlogCard = ({ poster, tag, title, description, name, avatar, postedAt }) => {
  return (
    <Card>
      <CardHeader>
        <CardPoster src={poster} alt={tag} />
      </CardHeader>
      <CardBody>
        <Tag>{tag}</Tag>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
      <CardFooter>
        <UserBox>
          <Avatar src={avatar} alt={name} />
          <UserInfo>
            <UserName>{name}</UserName>
            <PostedDate>{formatDistanceToNow(new Date(postedAt))}</PostedDate>
          </UserInfo>
        </UserBox>
      </CardFooter>
    </Card>
  );
};
