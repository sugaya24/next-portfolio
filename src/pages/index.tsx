import Head from 'next/head';
// import Image from 'next/image';
import { createClient } from 'contentful';

import styles from '@/styles/Home.module.css';
import { IBlogPost, IBlogPostFields } from '@types/generated/contentful';

type Props = {
  posts: IBlogPost[];
};

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || ``,
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || ``,
  });
  const res = await client.getEntries<IBlogPostFields>({
    content_type: `blogPost`,
  });

  return { props: { posts: res.items } };
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
        {posts.map((post: IBlogPost, index) => (
          <div key={index}>
            <h2>
              {index + 1}: {post.fields.title}
            </h2>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Home;
