import Head from 'next/head';
// import Image from 'next/image';
import { createClient, EntryCollection } from 'contentful';

import styles from '@/styles/Home.module.css';
import { IBlogPostFields } from '../../@types/generated/contentful';
import Post from '@/components/Post';

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
    <div className={styles.container}>
      <Head>
        <title>Yuki Sugaya Portfolio</title>
        <meta name="description" content="Yuki Sugaya Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Yuki Sugaya</h1>
        {posts.items.map((post, index) => (
          <Post key={index} post={post} index={index} />
        ))}
      </main>
    </div>
  );
};

export default Home;
