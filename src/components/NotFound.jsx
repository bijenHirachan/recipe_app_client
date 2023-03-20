import { Box, Heading, VStack } from '@chakra-ui/react';
import { ImSad } from 'react-icons/im';

const NotFound = () => {
  return (
    <Box h={'90vh'} bg={'purple.100'} py={24} px={[6, 24]} overflowY="auto">
      <VStack justifyContent={'center'} height="40vh" gap={6}>
        <ImSad size={100} color="#805ad5" />
        <Heading color={'purple.500'}>404 | Not Found</Heading>
      </VStack>
    </Box>
  );
};

export default NotFound;
