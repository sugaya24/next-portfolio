import React from 'react';
import { createClient, Entry } from 'contentful';
import { IBlogPostFields } from '../../../@types/generated/contentful';
import {
  Heading,
  Tag,
  HStack,
  Divider,
  Text,
  Container,
} from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import remarkGfm from 'remark-gfm';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticProps } from 'next';
import moment from 'moment';

export interface Posts {
  posts: Entry<IBlogPostFields>;
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || ``,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || ``,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries<IBlogPostFields>({
    content_type: `blogPost`,
  });
  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Posts, Params> = async ({
  params,
}) => {
  const { items } = await client.getEntries<IBlogPostFields>({
    content_type: `blogPost`,
    'fields.slug': params!.slug,
  });
  return {
    props: { posts: items[0] },
  };
};

const PostDetails: React.VFC<Posts> = ({ posts }) => {
  const { title, article } = posts.fields;
  const { createdAt } = posts.sys;
  const { tags } = posts.metadata;

  return (
    <Container maxW={`container.lg`}>
      <Heading py={4} as={`h1`} size={`2xl`}>
        {title}
      </Heading>
      <HStack mb={2}>
        {tags.map(({ sys }) => (
          <Tag key={sys.id} borderRadius={`full`} alignItems={`center`}>
            {sys.id}
          </Tag>
        ))}
      </HStack>
      <Text py={2}>{moment(createdAt).format(`MMMM DD, YYYY`)}</Text>
      <Divider />
      <ReactMarkdown
        components={ChakraUIRenderer()}
        remarkPlugins={[remarkGfm]}
      >
        {article}
      </ReactMarkdown>
    </Container>
  );
};

export default PostDetails;
