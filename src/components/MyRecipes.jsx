import { Box, Card, CardBody, Heading, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyRecipes } from '../redux/actions/recipeActions';
import Loading from './Loading';
import RecipeCard from './RecipeCard';
import toast from 'react-hot-toast';

const MyRecipes = () => {
  const { loading, error, message, myRecipes } = useSelector(
    state => state.recipe
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyRecipes());
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
        <Box h={'90vh'} bg={'purple.100'} py={24} px={[6, 24]} overflowY="auto">
          <Heading children="My Recipes" textAlign={'center'} my={6} />

          {myRecipes && myRecipes.length > 0 ? (
            <SimpleGrid
              templateColumns={[
                '1fr',
                '1fr 1fr',
                '1fr 1fr 1fr',
                '1fr 1fr 1fr 1fr',
              ]}
              spacing={4}
            >
              {myRecipes.map(recipe => (
                <RecipeCard key={recipe._id} recipe={recipe} />
              ))}
            </SimpleGrid>
          ) : (
            <Card>
              <CardBody my={6}>
                <Heading
                  size={'md'}
                  children="No recipes yet"
                  textAlign={'center'}
                />
              </CardBody>
            </Card>
          )}
        </Box>
      )}
    </>
  );
};

export default MyRecipes;
