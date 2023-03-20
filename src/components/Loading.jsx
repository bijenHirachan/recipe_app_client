import { Spinner, VStack } from '@chakra-ui/react';

const Loading = () => {
  return (
    <VStack h={'100vh'} bg={'purple.100'} justifyContent="center">
      <div style={{ transform: 'scale(4)' }}>
        <Spinner
          thickness="2px"
          speed="0.65s"
          emptyColor="transparent"
          color="purple.500"
          size={'xl'}
        />
      </div>
    </VStack>
  );
};

export default Loading;
