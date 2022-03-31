import {  Image, Flex, Button,  HStack , chakra } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import Logo from '../assets/logo.svg';

export const Navbar = () => {

  return (
    <chakra.header id="header">
      <Flex
        w="100%"
        px="6"
        py="5"
        align="center"
        justify="space-between"
      >
        <Image src={Logo} h="50px" />
        <HStack>
          <Link to="/">
            <Button variant="nav">
                Ir a home
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="nav">
                Ir a registro
            </Button>
          </Link>
        </HStack>
      </Flex>
    </chakra.header>
  )
}
