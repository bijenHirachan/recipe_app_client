import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Heading,
  Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <Card bg={'purple.300'} color="white">
      <Image
        h={'60%'}
        objectFit="cover"
        src={recipe.poster.url}
        roundedTop={'md'}
      />
      <CardHeader>
        <Heading textAlign={'center'} size="md">
          {recipe.title}
        </Heading>
      </CardHeader>

      <CardFooter justifyContent={'center'}>
        <Link to={`/recipes/${recipe._id}`}>
          <Button variant={'link'}>View here</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
