import { Box, Button, FormLabel, Heading, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword, myProfile } from '../redux/actions/userActions';
import toast from 'react-hot-toast';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const dispatch = useDispatch();

  const { error, loading, message } = useSelector(state => state.user);

  const submitHandler = async e => {
    e.preventDefault();
    await dispatch(changePassword(oldPassword, newPassword));
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
  }, [dispatch, message, error]);

  return (
    <Box
      h={'90vh'}
      bg={'purple.100'}
      display="flex"
      justifyContent={'center'}
      alignItems={'center'}
    >
      {/* <Toaster /> */}
      <Box w={['90%', '50%']} p={6} borderRadius={5}>
        <Heading textAlign="center" mb={16}>
          Welcome to Food World
        </Heading>
        <form onSubmit={submitHandler}>
          <Box my={4}>
            <FormLabel
              fontWeight={'bold'}
              htmlFor="oldPassword"
              children="Old Password"
            />
            <Input
              id="oldPassword"
              borderColor={'blackAlpha.300'}
              type={'password'}
              placeholder="abc@example.com"
              focusBorderColor="purple.400"
              value={oldPassword}
              onChange={e => setOldPassword(e.target.value)}
            />
          </Box>
          <Box my={4}>
            <FormLabel
              fontWeight={'bold'}
              htmlFor="newPassword"
              children="New Password"
            />

            <Input
              id="newPassword"
              borderColor={'blackAlpha.300'}
              type={'password'}
              placeholder="Enter your password"
              focusBorderColor="purple.400"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
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
            Change Password
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default ChangePassword;
