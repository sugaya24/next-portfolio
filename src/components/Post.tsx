import React from 'react';
import Link from 'next/link';
import { IBlogPostFields } from '../../@types/generated/contentful';
import { Entry } from 'contentful';
import { Heading, Box, Link as CuiLink, Tag, HStack } from '@chakra-ui/react';
import '../styles/Home.module.css';
import moment from 'moment';

type Props = {
  post: Entry<IBlogPostFields>;
};

const Post: React.FC<Props> = ({ post }) => {
  const { title, slug } = post.fields;
  const { tags } = post.metadata;
  const { createdAt } = post.sys;

  return (
    <Box w={`full`} rounded={`lg`} padding={`2`} marginBottom={`4`}>
      <Link href={`/posts/${slug}`}>
        <Heading as={`h2`} size={`lg`} mb={`2`}>
          <CuiLink>{title}</CuiLink>
        </Heading>
      </Link>
      <HStack mb={2}>
        {tags.map(({ sys }) => (
          <Tag key={sys.id} borderRadius={`full`} alignItems={`center`}>
            {sys.id}
          </Tag>
        ))}
      </HStack>
      <p>{moment(createdAt).format(`MMMM DD, YYYY`)}</p>
    </Box>
  );
};

export default Post;
