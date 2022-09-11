import React from 'react';
import Link from 'next/link';
import { EntryCollection } from 'contentful';
import { IBlogPostFields } from '../../@types/generated/contentful';
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Heading,
  Icon,
} from '@chakra-ui/react';
import { colors } from '../../lib/theme';
import Post from './Post';
import { AiOutlineRight } from 'react-icons/ai';

type Props = {
  posts: EntryCollection<IBlogPostFields>;
};

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <Box className={`posts`}>
      <Heading
        as={`h2`}
        px={2}
        mb={8}
        bgClip={`text`}
        bgGradient={colors.headingGradient}
      >
        Posts
      </Heading>
      <Box mb={`4`}>
        {posts.items.map((post) => (
          <Box key={post.fields.slug} mb={`2`}>
            <Post post={post} />
          </Box>
        ))}
      </Box>
      <Center mb={`8`}>
        <Link href={`/posts/page/1`}>
          <ButtonGroup>
            <Button colorScheme={`teal`} textTransform={`uppercase`}>
              Read More &nbsp; <Icon as={AiOutlineRight} />
            </Button>
          </ButtonGroup>
        </Link>
      </Center>
    </Box>
  );
};

export default Posts;
