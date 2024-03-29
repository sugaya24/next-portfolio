import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { IBlogPostFields } from '../../@types/generated/contentful';
import { Entry } from 'contentful';
import { Heading, Box, Link as CuiLink, Tag, HStack } from '@chakra-ui/react';
import '../styles/Home.module.css';
import moment from 'moment';

type Props = {
  post: Entry<IBlogPostFields>;
};

const Post: React.FC<Props> = ({ post }) => {
  const { title, slug } = post.fields;
  const { tags } = post.metadata;
  const { createdAt } = post.sys;
  const [tagsName, setTagsName] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const tagsArr = tags.map((tag) => {
        return [`tag`, tag.sys.id];
      });
      const params = new URLSearchParams(tagsArr);
      const res = await fetch(`/api/tags/?${params}`);
      return res.json();
    };
    fetchData().then((data) => setTagsName(data.tags));
    return () => {
      fetchData();
    };
  }, []);

  return (
    <Box w={`full`} rounded={`lg`} padding={`2`}>
      <Link href={`/posts/${slug}`}>
        <Heading as={`h2`} size={`lg`} mb={`2`}>
          <CuiLink>{title}</CuiLink>
        </Heading>
      </Link>
      <HStack mb={2}>
        {tagsName.map((tag) => (
          <Tag key={tag} borderRadius={`full`} alignItems={`center`}>
            {tag}
          </Tag>
        ))}
      </HStack>
      <p>{moment(createdAt).format(`MMMM DD, YYYY`)}</p>
    </Box>
  );
};

export default Post;
