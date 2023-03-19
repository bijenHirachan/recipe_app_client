import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';

const Footer = () => {
  return (
    <Box minH={'10vh'} bg={'purple.300'} p={4}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading children="All Rights Reserved" color={'white'} />
          <Heading
            fontFamily={'body'}
            fontSize="sm"
            children="@ Bijen Hirachan"
            color={'white'}
          />
        </VStack>
        <HStack
          spacing={['2', '10']}
          justifyContent="center"
          color={'white'}
          fontSize={50}
        >
          <a href="https://youtube.com" target={'_blank'} rel="noreferrer">
            <TiSocialYoutubeCircular />
          </a>
          <a href="https://instagram.com" target={'_blank'} rel="noreferrer">
            <TiSocialInstagramCircular />
          </a>
          <a href="https://github.com" target={'_blank'} rel="noreferrer">
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
