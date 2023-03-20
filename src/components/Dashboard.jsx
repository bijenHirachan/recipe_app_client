import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  HStack,
  VStack,
  Stack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStats } from '../redux/actions/otherActions';
import Loading from './Loading';
import toast from 'react-hot-toast';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { BiFoodMenu } from 'react-icons/bi';
import { AiOutlineTags } from 'react-icons/ai';
import { Icon } from '@chakra-ui/react';

const Dashboard = () => {
  const { error, loading, stats } = useSelector(state => state.other);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStats());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
  }, [dispatch, error]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {stats && (
            <Box h={'90vh'} bg={'purple.100'} p={16} overflowY="auto">
              <VStack py={[16, 24]}>
                <Stack direction={['column', 'row']}>
                  <Card bg={'purple.300'} color="white">
                    <CardHeader>
                      <Heading fontSize={['xs', 'md']} textAlign="center">
                        No of Users
                      </Heading>
                    </CardHeader>
                    <CardBody>
                      <HStack justifyContent={'space-evenly'}>
                        <Icon
                          color={'white'}
                          as={HiOutlineUserGroup}
                          boxSize={[6, 12]}
                        />
                        <Heading fontSize={['sm', 'md']}>
                          {stats.usersCount}
                        </Heading>
                      </HStack>
                    </CardBody>
                  </Card>
                  <Card bg={'purple.300'} color="white">
                    <CardHeader>
                      <Heading fontSize={['xs', 'md']} textAlign="center">
                        No of Recipes
                      </Heading>
                    </CardHeader>
                    <CardBody>
                      <HStack justifyContent={'space-evenly'}>
                        <Icon
                          color={'white'}
                          as={BiFoodMenu}
                          boxSize={[6, 12]}
                        />
                        <Heading fontSize={['sm', 'md']}>
                          {stats.recipeCount}
                        </Heading>
                      </HStack>
                    </CardBody>
                  </Card>
                  <Card bg={'purple.300'} color="white">
                    <CardHeader>
                      <Heading fontSize={['xs', 'md']} textAlign="center">
                        No of Categories
                      </Heading>
                    </CardHeader>
                    <CardBody>
                      <HStack justifyContent={'space-evenly'}>
                        <Icon
                          color={'white'}
                          as={AiOutlineTags}
                          boxSize={[6, 12]}
                        />
                        <Heading fontSize={['sm', 'md']}>
                          {stats.categoryCount}
                        </Heading>
                      </HStack>
                    </CardBody>
                  </Card>
                </Stack>
                <Card bg={'purple.300'} color="white">
                  <CardHeader>
                    <Heading fontSize={['xs', 'md']} textAlign="center">
                      Most Popular Category
                    </Heading>
                    <Heading fontSize={['xs', 'md']} textAlign="center">
                      is
                    </Heading>
                    <Heading
                      my={2}
                      fontSize={['md', 'lg']}
                      color="purple.600"
                      textAlign="center"
                    >
                      {stats.popularCategory._id}
                    </Heading>
                    <Heading my={2} fontSize={['xs', 'md']} textAlign="center">
                      with
                    </Heading>
                    <Heading fontSize={['md', 'lg']} textAlign="center">
                      {stats.popularCategory.recipe_count} recipes
                    </Heading>
                  </CardHeader>
                </Card>
              </VStack>
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default Dashboard;
