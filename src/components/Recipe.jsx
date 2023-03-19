import {
  Badge,
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCategory,
  addStep,
  deleteRecipe,
  deleteStep,
  removeCategory,
  singleRecipe,
} from '../redux/actions/recipeActions';
import toast from 'react-hot-toast';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';

const Recipe = () => {
  const params = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [newStep, setNewStep] = useState();

  const { error, loading, recipe, message, categories } = useSelector(
    state => state.singleRecipe
  );

  useEffect(() => {
    dispatch(singleRecipe(params.id));
  }, [dispatch, params.id]);

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

  const addStepHandler = async e => {
    e.preventDefault();
    await dispatch(addStep(params.id, newStep));
    dispatch(singleRecipe(params.id));
  };

  const deleteStepHandler = async id => {
    await dispatch(deleteStep(params.id, id));
    dispatch(singleRecipe(params.id));
  };

  const addCategoryHandler = async id => {
    await dispatch(addCategory(params.id, id));
    dispatch(singleRecipe(params.id));
  };

  const deleteCategoryHandler = async id => {
    await dispatch(removeCategory(params.id, id));
    dispatch(singleRecipe(params.id));
  };

  const deleteRecipeHandler = async () => {
    await dispatch(deleteRecipe(params.id));
    navigate('/myrecipes');
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Box
          h={'90vh'}
          bg={'purple.100'}
          py={[20, 6]}
          px={[6, 6, 6, 6, 64]}
          overflowY="auto"
        >
          {recipe && (
            <Box m={[2, 24]}>
              <Heading
                children={recipe.title}
                size={['md', 'lg']}
                textAlign="center"
                py={16}
              />
              <VStack gap={4}>
                <Image
                  w={['350px', '700px']}
                  h={['250px', '500px']}
                  objectFit={'cover'}
                  src={recipe.poster.url}
                />
                <Text>{recipe.description}</Text>
              </VStack>

              {recipe.categories.length > 0 && (
                <Box my={6}>
                  <Heading mb={3} size={'md'} children="Categories:" />
                  <HStack alignItems={'flex-start'} overflowX="auto">
                    {recipe.categories.map(category => (
                      <Badge
                        key={category._id}
                        fontSize="sm"
                        display="flex"
                        alignItems={'center'}
                        gap={2}
                      >
                        {category.name}
                        <Button
                          onClick={() => deleteCategoryHandler(category._id)}
                        >
                          <AiOutlineMinusSquare />
                        </Button>
                      </Badge>
                    ))}
                  </HStack>
                </Box>
              )}

              <Box>
                <Text size={'sm'} fontWeight="bold">
                  Add Categories from the list below (Scroll right for more)
                </Text>

                <HStack alignItems={'flex-start'} py={2} overflowX="auto">
                  {categories &&
                    categories.map(category => (
                      <Badge key={category._id}>
                        {category.name}
                        <Button
                          onClick={() => addCategoryHandler(category._id)}
                        >
                          <AiOutlinePlusSquare />
                        </Button>
                      </Badge>
                    ))}
                </HStack>
              </Box>

              {recipe.steps.length > 0 ? (
                <Box my={6}>
                  <Heading mb={3} size={'md'} children="Steps:" as={'span'} />

                  <VStack alignItems={'flex-start'}>
                    {recipe.steps.map(step => (
                      <HStack
                        justifyContent={['space-between']}
                        key={step.step}
                        width="full"
                      >
                        <span fontSize="sm">{step.description}</span>
                        <Button
                          variant={'link'}
                          colorScheme="red"
                          fontSize={'sm'}
                          onClick={() => deleteStepHandler(step._id)}
                        >
                          Delete Step
                        </Button>
                      </HStack>
                    ))}
                  </VStack>
                </Box>
              ) : null}
              <Box mt={3}>
                <form onSubmit={addStepHandler}>
                  <Input
                    placeholder="Add Step"
                    focusBorderColor="purple.500"
                    onChange={e => setNewStep(e.target.value)}
                  />
                </form>
              </Box>

              <Divider />

              <Box mt={16}>
                <form onSubmit={deleteRecipeHandler}>
                  <Button
                    w={'full'}
                    type="submit"
                    colorScheme={'red'}
                    variant="outline"
                  >
                    Delete Recipe
                  </Button>
                </form>
              </Box>
            </Box>
          )}
        </Box>
      )}
    </>
  );
};

export default Recipe;
