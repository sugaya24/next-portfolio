import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Heading,
  HStack,
  Tag,
  Text,
  Image,
  Link as CuiLink,
  Divider,
  Spacer,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { worksData } from '@/data/worksData';
import { FaExternalLinkAlt } from 'react-icons/fa';

export type TWorkData = {
  id: number;
  title: string;
  src: string;
  slug: string;
  stack: string[];
  stackIcon?: any;
  description: string;
  link: {
    url?: string;
    github?: string;
  };
};

const WorkDetail = () => {
  const { query } = useRouter();
  const [workData, setWorkData] = useState<TWorkData | undefined>(undefined);
  const { title, src, stack, description, link } = workData || {};

  useEffect(() => {
    const data: TWorkData | undefined = worksData.find(
      (work: TWorkData) => work.slug === query.title,
    );
    setWorkData(data || undefined);
  }, [query]);

  return (
    <Box w={`100%`}>
      <Box my={`24px`}>
        <Heading as={`h1`}>{title}</Heading>
        <Box p={`16px`}>
          <Image src={src} borderRadius={4} alt={title} />
        </Box>
        <HStack className={`web-url`} mt={`24px`}>
          <Text as={`h3`} fontWeight={`600`}>
            URL
          </Text>
          <CuiLink href={link?.url}>
            <HStack>
              <Box>
                <Text wordBreak={`break-word`}>{link?.url}</Text>
              </Box>
              <Spacer />
              <Box>
                <FaExternalLinkAlt />
              </Box>
            </HStack>
          </CuiLink>
        </HStack>
        <HStack className={`github-link`} w={`100%`} mt={`8px`}>
          <Text as={`h3`} fontWeight={`600`}>
            Github
          </Text>
          <CuiLink href={link?.github}>
            <HStack>
              <Box>
                <Text wordBreak={`break-word`}>{link?.github}</Text>
              </Box>
              <Spacer />
              <Box h={4} w={4}>
                <FaExternalLinkAlt />
              </Box>
            </HStack>
          </CuiLink>
        </HStack>
        {stack && (
          <HStack mt={`8px`} w={`100%`}>
            <Text as={`h3`} fontWeight={`600`}>
              Stack
            </Text>
            <HStack>
              <Wrap>
                {stack.map((stack) => (
                  <WrapItem key={stack}>
                    <Tag>{stack}</Tag>
                  </WrapItem>
                ))}
              </Wrap>
            </HStack>
          </HStack>
        )}
        <Divider mt={`24px`} />
        <Box mt={`24px`}>
          <Text>{description}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default WorkDetail;
