import React from 'react';
import { useRouter } from 'next/router';
import { Box, Center, Heading, Spinner } from '@chakra-ui/react';
import Pagination from '@/components/Pagination';
import { createClient } from 'contentful';
import { IBlogPostFields } from '../../../../@types/generated/contentful';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Entry } from 'contentful';
import { ParsedUrlQuery } from 'querystring';
import { colors } from 'lib/theme';
import Post from '@/components/Post';
import Head from 'next/head';

const PER_PAGE = 5;

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || ``,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || ``,
});

type Props = {
  posts: Entry<IBlogPostFields>[];
  totalCount: number;
  currentPage: number;
};

interface Params extends ParsedUrlQuery {
  slug: string;
  id: string | any;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.getEntries<IBlogPostFields>({
    content_type: `blogPost`,
  });
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const paths = range(1, Math.ceil(res.items.length / PER_PAGE)).map((id) => {
    return { params: { id: `${id}` } };
    // return `/posts/page/${id}`;
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const allPost = await client.getEntries<IBlogPostFields>({
    content_type: `blogPost`,
  });
  const { items } = await client.getEntries<IBlogPostFields>({
    content_type: `blogPost`,
    limit: PER_PAGE,
    skip: PER_PAGE * (params?.id - 1),
  });
  if (!items.length) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      posts: items,
      totalCount: allPost.items.length,
      currentPage: params?.id,
    },
    revalidate: 1,
  };
};

const PostPageId: React.VFC<Props> = ({ posts, totalCount, currentPage }) => {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <Center h={`100%`}>
        <Spinner size={`xl`} />;
      </Center>
    );
  }
  return (
    <>
      <Head>
        <title>Posts | Yuki Sugaya Portfolio</title>
        <meta name="description" content="Yuki Sugaya Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box pb={`16`}>
        <Heading
          as={`h2`}
          p={2}
          bgClip={`text`}
          bgGradient={colors.headingGradient}
        >
          Posts
        </Heading>
        {posts.map((post) => (
          <Box key={post.fields.slug} mb={`2`}>
            <Post post={post} />
          </Box>
        ))}
        <Center w={`100%`} p={`4`} position={`absolute`} bottom={`0`}>
          <Pagination totalCount={totalCount} currentPage={currentPage} />
        </Center>
      </Box>
    </>
  );
};

export default PostPageId;
