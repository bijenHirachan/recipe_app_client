import { Box, Button, FormLabel, Heading, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { myProfile, updateProfile } from '../redux/actions/userActions';
import toast from 'react-hot-toast';

const UpdateProfile = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const dispatch = useDispatch();

  const { error, message, loading } = useSelector(state => state.user);

  const submitHandler = async e => {
    e.preventDefault();
    await dispatch(updateProfile(name, email));
    dispatch(myProfile());
  };

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
    <Box
      h={'90vh'}
      bg={'purple.100'}
      display="flex"
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Box w={['90%', '50%']} p={6} borderRadius={5}>
        <Heading textAlign="center" mb={16}>
          Welcome to Food World
        </Heading>
        <form onSubmit={submitHandler}>
          <Box my={4}>
            <FormLabel fontWeight={'bold'} htmlFor="name" children="Name" />
            <Input
              id="name"
              borderColor={'blackAlpha.300'}
              type={'text'}
              focusBorderColor="purple.400"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Box>
          <Box my={4}>
            <FormLabel fontWeight={'bold'} htmlFor="email" children="Email" />

            <Input
              id="email"
              borderColor={'blackAlpha.300'}
              type={'email'}
              focusBorderColor="purple.400"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Box>

          <Button
            isLoading={loading}
            my={4}
            w={'full'}
            type="submit"
            variant="outline"
            colorScheme={'purple'}
          >
            Update Profile
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default UpdateProfile;
