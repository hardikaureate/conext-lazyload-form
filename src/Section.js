import { Box } from '@chakra-ui/react'
import React from 'react'

export const Section = (props) => (
  <Box
    as="section"
    maxW="1440px"
    mx="auto"
    px={{ base: '4', md: '8', lg: '12' }}
    py={{ base: '6', md: '9', lg: '12' }}
    {...props}
  />
)
