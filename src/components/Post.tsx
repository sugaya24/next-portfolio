import React from 'react';
import Link from 'next/link';
import { IBlogPostFields } from '../../@types/generated/contentful';
import { Entry } from 'contentful';
import { Heading, Box, Link as CuiLink } from '@chakra-ui/react';
import moment from 'moment';

type Props = {
  post: Entry<IBlogPostFields>;
  index: number;
};

const Post: React.FC<Props> = ({ post, index }) => {
  const { title, slug } = post.fields;
  const { createdAt } = post.sys;

  return (
    <Box
      w={`full`}
      boxShadow={`lg`}
      rounded={`lg`}
      padding={`8`}
      marginBottom={`4`}
    >
      <Link href={`/posts/${slug}`}>
        <Heading as="h4">
          <CuiLink>
            {index + 1}: {title} {slug}
          </CuiLink>
        </Heading>
      </Link>
      <p>{moment(createdAt).format(`MMM Do YY, hh:mm:ss`)}</p>
    </Box>
  );
};

export default Post;
