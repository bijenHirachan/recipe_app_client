import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  VStack,
  HStack,
  Img,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
// import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Link } from 'react-router-dom';
import { RiDashboardFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/userActions';
import logo from '../assets/logo.svg';
import { AiOutlineHome } from 'react-icons/ai';
import { BiFoodMenu, BiFolderOpen } from 'react-icons/bi';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { CgProfile, CgLogOff, CgLogIn } from 'react-icons/cg';
import { BsPersonCheck } from 'react-icons/bs';
import { HiOutlineArchive } from 'react-icons/hi';

const Header = ({ isAuthenticated }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  const logoutHandler = e => {
    e.preventDefault();
    dispatch(logout());
    onClose();
  };

  return (
    <>
      {/* <ColorModeSwitcher /> */}
      <Button
        colorScheme="purple"
        onClick={onOpen}
        width={12}
        height={12}
        position="fixed"
        left={6}
        top={6}
        zIndex={1}
      >
        <HamburgerIcon />
      </Button>
      <Drawer
        colorScheme={'purple'}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent bg={'purple.200'}>
          <HStack justifyContent={'center'}>
            <Img mt={24} src={logo} w={'75%'} />
          </HStack>
          <VStack my={24} alignItems={'flex-start'} pl={20}>
            <Link to={'/'}>
              <Button
                leftIcon={<AiOutlineHome />}
                onClick={onClose}
                colorScheme={'purple'}
                variant="ghost"
              >
                Home
              </Button>
            </Link>
            <Link to={'/recipes'}>
              <Button
                leftIcon={<BiFoodMenu />}
                onClick={onClose}
                colorScheme={'purple'}
                variant="ghost"
              >
                Recipes
              </Button>
            </Link>
            {isAuthenticated && (
              <>
                <Link to={'/myrecipes'}>
                  <Button
                    leftIcon={<BiFolderOpen />}
                    onClick={onClose}
                    colorScheme={'purple'}
                    variant="ghost"
                  >
                    My Recipes
                  </Button>
                </Link>
                <Link to={'/createrecipe'}>
                  <Button
                    leftIcon={<AiOutlineFileAdd />}
                    onClick={onClose}
                    colorScheme={'purple'}
                    variant="ghost"
                  >
                    Create Recipe
                  </Button>
                </Link>
                <Link to={'/categories'}>
                  <Button
                    leftIcon={<HiOutlineArchive />}
                    onClick={onClose}
                    colorScheme={'purple'}
                    variant="ghost"
                  >
                    Categories
                  </Button>
                </Link>
              </>
            )}
          </VStack>

          <VStack position={'fixed'} bottom={6} left={16}>
            {isAuthenticated ? (
              <VStack>
                <HStack>
                  <Link to={'/profile'}>
                    <Button
                      leftIcon={<CgProfile />}
                      onClick={onClose}
                      variant={'outline'}
                      colorScheme="purple"
                    >
                      Profile
                    </Button>
                  </Link>

                  <Button
                    leftIcon={<CgLogOff />}
                    onClick={logoutHandler}
                    variant={'outline'}
                    colorScheme="purple"
                  >
                    Log Out
                  </Button>
                </HStack>
                <Link to={'/dashboard'}>
                  <Button
                    onClick={onClose}
                    variant={'solid'}
                    colorScheme="purple"
                  >
                    <RiDashboardFill style={{ margin: '4px' }} />
                    Dashboard
                  </Button>
                </Link>
              </VStack>
            ) : (
              <HStack>
                <Link to={'/login'}>
                  <Button
                    leftIcon={<CgLogIn />}
                    onClick={onClose}
                    variant={'outline'}
                    colorScheme="purple"
                  >
                    Log In
                  </Button>
                </Link>

                <Link to={'/register'}>
                  <Button
                    leftIcon={<BsPersonCheck />}
                    onClick={onClose}
                    variant={'solid'}
                    colorScheme="purple"
                  >
                    Sign Up
                  </Button>
                </Link>
              </HStack>
            )}
          </VStack>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
