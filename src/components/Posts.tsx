import React from 'react';
import { EntryCollection } from 'contentful';
import { IBlogPostFields } from '../../@types/generated/contentful';
import { Box, Heading } from '@chakra-ui/react';
import { colors } from '../../lib/theme';
import Post from './Post';

type Props = {
  posts: EntryCollection<IBlogPostFields>;
};

const Posts: React.FC<Props> = ({ posts }) => {
  console.log(posts);

  return (
    <Box className={`posts`}>
      <Heading
        as={`h2`}
        p={2}
        bgClip={`text`}
        bgGradient={colors.headingGradient}
      >
        Posts
      </Heading>
      {posts.items.map((post, index) => (
        <Post key={index} post={post} index={index} />
      ))}
    </Box>
  );
};

export default Posts;
