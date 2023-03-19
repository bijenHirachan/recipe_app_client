import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import pizza from '../assets/pizza.mp4';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box bg="purple.100" p={[6, 16]}>
      <Stack
        minH={'80vh'}
        alignItems={'center'}
        justifyContent={['center', 'space-around']}
        flexDirection={['column', 'row']}
      >
        <Box
          display="flex"
          alignItems={['center', 'flex-end']}
          justifyContent={'center'}
          flexDirection={'column'}
          minW={['100%', '50%']}
          p={[0, 16]}
        >
          <Heading fontSize={['lg', '4xl']} textAlign={'center'}>
            Welcome to Food World
          </Heading>
          <Text fontSize={['sm', 'lg']} textAlign={'center'} my={2}>
            Add your recipes and share with friends
          </Text>
          <Link to={'/recipes'}>
            <Button mt={10} colorScheme={'purple'} variant="outline">
              Explore
            </Button>
          </Link>
        </Box>

        <Box pt={[10, 0]}>
          <video
            autoPlay
            src={pizza}
            controls
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
            disableRemotePlayback
            style={{
              border: 'none',
              borderRadius: '5px',
            }}
          ></video>
        </Box>
      </Stack>
    </Box>
  );
};

export default Home;
