import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <Flex>
        <Box>
            <Link to="/cart"></Link>
            <Link to="/Order"></Link>
        </Box>
    </Flex>
    </>
  )
}

export default Navbar