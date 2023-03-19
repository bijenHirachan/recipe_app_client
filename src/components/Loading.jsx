import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

const Loading = () => {
  return (
    <Box h={'100vh'} bg={'purple.100'} py={24} px={6}>
      <Heading children="Loading" textAlign={'center'} />
    </Box>
  );
};

export default Loading;
