import Head from 'next/head';
// import Image from 'next/image';
import { createClient, EntryCollection } from 'contentful';

import { IBlogPostFields } from '../../@types/generated/contentful';
import { Box } from '@chakra-ui/react';
import Works from '@/components/Works';
import About from '@/components/About';
import Posts from '@/components/Posts';

type Props = {
  posts: EntryCollection<IBlogPostFields>;
};

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || ``,
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || ``,
  });
  const res = await client.getEntries<IBlogPostFields>({
    content_type: `blogPost`,
  });

  return { props: { posts: res } };
}

const Home: React.FC<Props> = ({ posts }) => {
  return (
    <Box className={`children`}>
      <Head>
        <title>Yuki Sugaya Portfolio</title>
        <meta name="description" content="Yuki Sugaya Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box className={`main`}>
        <About />
        <Works />
        <Posts posts={posts} />
      </Box>
    </Box>
  );
};

export default Home;
