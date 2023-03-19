import {
  Avatar,
  Box,
  Button,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading';

const Profile = () => {
  const { error, message, loading, user } = useSelector(state => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Box
          h={'90vh'}
          bg={'purple.100'}
          py={24}
          px={6}
          display="flex"
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box
            bg={'purple.200'}
            color="purple.600"
            px={[6, 16]}
            py={10}
            boxShadow="base"
            rounded={'md'}
          >
            <Stack
              direction={['column', 'row']}
              alignItems={'center'}
              spacing={16}
            >
              <Box>
                <Avatar
                  size={'2xl'}
                  src={user.avatar.url}
                  css={{
                    boxShadow:
                      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                  }}
                />
              </Box>
              <VStack alignItems={['center', 'flex-end']}>
                <Heading size={'lg'}>{user.name}</Heading>
                <Text fontWeight={'bold'} textDecoration="underline">
                  {user.email}
                </Text>
              </VStack>
            </Stack>

            <Box
              display={'flex'}
              mt={6}
              alignItems="center"
              justifyContent={'space-evenly'}
              gap={2}
            >
              <Link to={'/updateprofile'}>
                <Button colorScheme={'purple'} variant="outline">
                  Update Profile
                </Button>
              </Link>
              <Link to={'/changepassword'}>
                <Button colorScheme={'purple'} variant="outline">
                  Change Password
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Profile;
