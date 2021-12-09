import Head from 'next/head';
// import Image from 'next/image';
import { createClient, EntryCollection } from 'contentful';

import styles from '@/styles/Home.module.css';
import { IBlogPostFields } from '../../@types/generated/contentful';
import { Box } from '@chakra-ui/react';
import Post from '@/components/Post';
import Works from '@/components/Works';

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
    <Box className={`index`}>
      <Head>
        <title>Yuki Sugaya Portfolio</title>
        <meta name="description" content="Yuki Sugaya Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Works />
        {posts.items.map((post, index) => (
          <Post key={index} post={post} index={index} />
        ))}
      </main>
    </Box>
  );
};

export default Home;
