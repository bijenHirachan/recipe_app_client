import {
  Box,
  Button,
  FormLabel,
  Heading,
  Image,
  Input,
  Textarea,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createRecipe } from '../redux/actions/recipeActions';
import toast from 'react-hot-toast';

const CreateRecipe = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  const { error, message, loading } = useSelector(state => state.recipe);

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

  const submitHandler = async e => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.append('title', title);
    myForm.append('description', description);
    myForm.append('file', image);
    await dispatch(createRecipe(myForm));
    setTitle('');
    setDescription('');
    setImagePreview('');
    setImage('');
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
      h={'95vh'}
      bg={'purple.100'}
      display="flex"
      justifyContent={'center'}
      alignItems={'center'}
    >
      {/* <Toaster /> */}
      <Box w={['90%', '50%']} p={6} borderRadius={5}>
        <Heading textAlign="center" mt={24}>
          Welcome to Food World
        </Heading>

        <form onSubmit={submitHandler}>
          <Box my={4}>
            <FormLabel fontWeight={'bold'} htmlFor="title" children="Title" />
            <Input
              id="title"
              type={'text'}
              placeholder="Enter title"
              focusBorderColor="purple.400"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </Box>
          <Box my={4}>
            <FormLabel
              fontWeight={'bold'}
              htmlFor="description"
              children="Description"
            />
            <Textarea
              id="description"
              type={'text'}
              placeholder="Enter description"
              focusBorderColor="purple.400"
              value={description}
              onChange={e => setDescription(e.target.value)}
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
          <Box my={4}>
            <Image src={imagePreview} />
          </Box>

          <Button
            my={4}
            w={'full'}
            type="submit"
            variant="outline"
            colorScheme={'purple'}
            isLoading={loading}
          >
            Create
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default CreateRecipe;
