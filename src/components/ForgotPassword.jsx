import { Box, Button, FormLabel, Heading, Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../redux/actions/userActions';
import toast from 'react-hot-toast';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const { error, message, loading } = useSelector(state => state.user);

  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    dispatch(forgotPassword(email));
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
            <FormLabel
              fontWeight={'bold'}
              htmlFor="email"
              children="Email Address"
            />
            <Input
              borderColor={'blackAlpha.300'}
              type={'email'}
              placeholder="abc@example.com"
              focusBorderColor="purple.400"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Box>

          <Button
            my={4}
            w={'full'}
            type="submit"
            variant="outline"
            colorScheme={'purple'}
            isLoading={loading}
          >
            Send
          </Button>
        </form>
      </Box>
    </Box>
  );
};
export default ForgotPassword;
