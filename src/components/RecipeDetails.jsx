import {
  Badge,
  Box,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { singleRecipe } from '../redux/actions/recipeActions';
import Loading from './Loading';
import { BiPurchaseTag } from 'react-icons/bi';
import { AiOutlineArrowRight } from 'react-icons/ai';

const RecipeDetails = () => {
  const params = useParams();

  const { recipe, loading } = useSelector(state => state.singleRecipe);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(singleRecipe(params.id));
  }, [dispatch, params.id]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        recipe && (
          <Box
            h={'90vh'}
            bg={'purple.100'}
            py={[20, 6]}
            px={6}
            overflowY="auto"
          >
            <Heading py={16} textAlign="center">
              {recipe.title}
            </Heading>
            <HStack justifyContent={'center'}>
              <Image
                w={['350px', '700px']}
                h={['250px', '500px']}
                objectFit={'cover'}
                src={recipe.poster.url}
              />
            </HStack>
            <HStack my={3} justifyContent={'center'} overflowX="auto">
              {recipe.categories && recipe.categories.length > 0
                ? recipe.categories.map(category => (
                    <Badge
                      key={category._id}
                      display="flex"
                      gap={2}
                      alignItems="center"
                      p={1}
                    >
                      <BiPurchaseTag />
                      {category.name}
                    </Badge>
                  ))
                : null}
            </HStack>

            <Text my={6} textAlign="center">
              {recipe.description}
            </Text>

            <VStack my={6}>
              {recipe.steps && recipe.steps.length > 0 ? (
                <>
                  <Heading size={'lg'}>Steps:</Heading>
                  {recipe.steps.map(step => (
                    <HStack key={step._id}>
                      <AiOutlineArrowRight />
                      <Text>{step.description}</Text>
                    </HStack>
                  ))}
                </>
              ) : null}
            </VStack>
          </Box>
        )
      )}
    </>
  );
};

export default RecipeDetails;
