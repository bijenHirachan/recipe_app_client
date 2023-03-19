import {
  Avatar,
  Box,
  Button,
  FormLabel,
  Heading,
  HStack,
  Input,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../redux/actions/userActions';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      setImagePreview(reader.result);
      setImage(file);
    };
  };

  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('name', name);
    myForm.append('email', email);
    myForm.append('password', password);
    myForm.append('file', image);

    dispatch(register(myForm));
  };

  return (
    <Box
      h={'95vh'}
      bg={'purple.100'}
      display="flex"
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Box w={['90%', '50%']} p={6} borderRadius={5}>
        <Heading textAlign="center" mt={24}>
          Welcome to Food World
        </Heading>

        <HStack mt={6} justifyContent={'center'}>
          <Avatar src={imagePreview} h={24} w={24} />
        </HStack>
        <form onSubmit={submitHandler}>
          <Box my={4}>
            <FormLabel fontWeight={'bold'} htmlFor="name" children="Name" />
            <Input
              id="name"
              type={'text'}
              placeholder="Enter your name"
              focusBorderColor="purple.400"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Box>
          <Box my={4}>
            <FormLabel
              fontWeight={'bold'}
              htmlFor="email"
              children="Email Address"
            />
            <Input
              id="email"
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
              id="password"
              type={'password'}
              placeholder="Enter your password"
              focusBorderColor="purple.400"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Box>
          <Box my={4}>
            <FormLabel
              fontWeight={'bold'}
              htmlFor="chooseAvatar"
              children="Choose Avatar"
            />

            <Input
              id="chooseAvatar"
              accept="image/*"
              type={'file'}
              placeholder="Enter your password"
              focusBorderColor="purple.400"
              css={{
                '&::file-selector-button': {
                  cursor: 'pointer',
                  marginLeft: '-5%',
                  width: '110%',
                  border: 'none',
                  height: '100%',
                  color: '#969286',
                  backgroundColor: '#D0BDF0',
                  fontSize: 'small',
                },
              }}
              onChange={changeImageHandler}
            />
          </Box>

          <Button
            my={4}
            w={'full'}
            type="submit"
            variant="outline"
            colorScheme={'purple'}
          >
            Sign Up
          </Button>

          <Box my={4}>
            Already Registered?{' '}
            <Link to={'/login'}>
              <Button variant="link" colorScheme="purple">
                Login
              </Button>{' '}
            </Link>
            here
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Register;
