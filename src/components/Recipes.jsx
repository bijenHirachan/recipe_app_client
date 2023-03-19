import { Box, Card, CardBody, Heading, SimpleGrid } from '@chakra-ui/react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipes } from '../redux/actions/recipeActions';
import Loading from './Loading';
import RecipeDetailsCard from './RecipeDetailsCard';

const Recipes = () => {
  const { error, message, loading, recipes } = useSelector(
    state => state.recipe
  );
  const dispatch = useDispatch();

  useState(() => {
    dispatch(getAllRecipes());
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
    <Box h={'90vh'} bg={'purple.100'} py={24} px={6} overflowY="auto">
      <Heading children="Recipes" textAlign={'center'} mb={16} />
      <SimpleGrid
        // templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        templateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr 1fr']}
        spacing={4}
      >
        {loading ? (
          <Loading />
        ) : recipes && recipes.length > 0 ? (
          recipes.map(recipe => (
            <RecipeDetailsCard key={recipe._id} recipe={recipe} />
          ))
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
      </SimpleGrid>
    </Box>
  );
};

export default Recipes;
