import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Heading,
  Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const RecipeDetailsCard = ({ recipe }) => {
  return (
    <Card bg={'purple.300'} color="white">
      <Image
        h={'60%'}
        objectFit="cover"
        roundedTop={'md'}
        src={recipe.poster.url}
      />
      <CardHeader>
        <Heading textAlign={'center'} size="md">
          {recipe.title}
        </Heading>
      </CardHeader>

      <CardFooter justifyContent={'center'}>
        <Link to={`/recipedetails/${recipe._id}`}>
          <Button colorScheme={'purple'} variant={'link'}>
            View here
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RecipeDetailsCard;
