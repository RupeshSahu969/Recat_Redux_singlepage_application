import React from 'react'
import { Box, Center, Flex, Heading, Icon, Image,Spacer,Text, useDisclosure } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
} from '@chakra-ui/react'

const Nav = () => {

  return (

    <Flex
    bg="white"
     borderBottom="0.25px solid #b1b3b5"
    p={1}
     align="center"
     
     justify="center"
    >
      <Link to="/">
        <p>Single Page Application</p>
         </Link>
         <Spacer/>
         
        <Link to="/cart" >
            <Button px={4} py={2}>Cart</Button>
            </Link>
            <Link to="/order">
            <Button px={4} py={2}>Order </Button>
            </Link>
          
           
            
             
        </Flex>
  )
}

export default Nav