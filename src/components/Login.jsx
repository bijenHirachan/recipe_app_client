import { Box, Button, FormLabel, Heading, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../redux/actions/userActions';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    dispatch(login(email, password));
  };

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
          <Box my={4}>
            <FormLabel
              fontWeight={'bold'}
              htmlFor="password"
              children="Password"
            />

            <Input
              borderColor={'blackAlpha.300'}
              type={'password'}
              placeholder="Enter your password"
              focusBorderColor="purple.400"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Box>

          <Box my={6}>
            <Link to="/forgotpassword">
              <Button fontSize={'sm'} variant={'link'}>
                Forgot Password?
              </Button>
            </Link>
          </Box>
          <Button
            my={4}
            w={'full'}
            type="submit"
            variant="outline"
            colorScheme={'purple'}
          >
            Login
          </Button>
          <Box my={4}>
            New User?{' '}
            <Link to={'/register'}>
              <Button colorScheme={'purple'} variant="link">
                Sign Up
              </Button>{' '}
            </Link>
            here
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
