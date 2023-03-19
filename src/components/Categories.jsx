import {
  Badge,
  Box,
  Button,
  FormLabel,
  Heading,
  HStack,
  Input,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCategory, loadCategories } from '../redux/actions/recipeActions';
import toast from 'react-hot-toast';

const Categories = () => {
  const [name, setName] = useState('');

  const { loading, error, message, categories } = useSelector(
    state => state.singleRecipe
  );

  const dispatch = useDispatch();

  const submitHandler = async e => {
    e.preventDefault();
    await dispatch(createCategory(name));
    dispatch(loadCategories());
    setName('');
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.message(message);
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
        <Text fontWeight={'bold'}>All categories</Text>

        <HStack overflowX={'auto'} py={1}>
          {categories.length > 0 &&
            categories.map(category => (
              <Badge key={category._id}>{category.name}</Badge>
            ))}
        </HStack>
        <form onSubmit={submitHandler}>
          <Box my={4}>
            <FormLabel fontWeight={'bold'} htmlFor="name" children="Category" />

            <Input
              borderColor={'blackAlpha.300'}
              type={'text'}
              placeholder="Enter category name"
              focusBorderColor="purple.400"
              value={name}
              onChange={e => setName(e.target.value)}
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
            Create
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Categories;
