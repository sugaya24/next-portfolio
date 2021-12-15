import React from 'react';
import { GetStaticProps } from 'next';
import { createClient, EntryCollection } from 'contentful';
import { IBlogPostFields } from '../../@types/generated/contentful';
import { Box, Heading } from '@chakra-ui/react';
import { colors } from 'lib/theme';
import Post from '@/components/Post';

type Posts = {
  posts: EntryCollection<IBlogPostFields>;
};

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || ``,
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || ``,
  });
  const res = await client.getEntries<IBlogPostFields>({
    content_type: `blogPost`,
  });

  return { props: { posts: res } };
};

const PostsPage: React.VFC<Posts> = ({ posts }) => {
  return (
    <Box>
      <Heading
        as={`h2`}
        p={2}
        bgClip={`text`}
        bgGradient={colors.headingGradient}
      >
        Posts
      </Heading>
      {posts.items.map((post) => (
        <Box key={post.fields.slug} mb={`2`}>
          <Post post={post} />
        </Box>
      ))}
    </Box>
  );
};

export default PostsPage;
