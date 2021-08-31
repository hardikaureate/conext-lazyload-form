import React from 'react'
import {Flex, HStack, Icon, Link } from "@chakra-ui/react"
import { Section } from './Section'
import { AddIcon, CloseIcon, LockIcon, PhoneIcon } from '@chakra-ui/icons'
// import {
//     AccountIcon,
//     CartIcon,
//     HeartIcon,
//     Logo,
//     MenuIcon,
//     SearchIcon,
//     ShippingIcon,
//   } from './icons'

const Header = () => {
    return (
        <>
            <Section py={{ base: '4', md: '8' }} style={{marginTop:'50px',marginBottom:'30px'}}>
                <Flex align="center">
                    <Flex flex="1">
                        {/* <Icon as={MenuIcon} boxSize="4" display={{ base: 'initial', md: 'none' }} /> */}
                        <HStack spacing="8" display={{ base: 'none', md: 'flex' }}>
                            <Link to="#">Shop</Link>
                            <Link to="#">About</Link>
                            <Link to="#">Blog</Link>
                            <Link to="#">Contact</Link>
                        </HStack>
                    </Flex>
                    <img src="https://f.shgcdn.com/1810db65-6b0c-48cd-887d-4f020c84d5cc/" alt="SACHEU Beauty" />
                    <Flex flex="1" justify="flex-end">
                        {/* <Icon as={CartIcon} boxSize="4" display={{ base: 'initial', md: 'none' }} /> */}
                        <HStack spacing="8" display={{ base: 'none', md: 'flex' }}>
                            <Link to="#">US</Link>
                            <AddIcon w={16} h={16} color="red.500"/>
                            <CloseIcon w={16} h={16} color="red.500"/>
                            <LockIcon w={16} h={16} color="red.500"/>
                            <PhoneIcon w={16} h={16} color="red.500"/>
                        </HStack>
                    </Flex>
                </Flex>
            </Section>
        </>
    )
}

export default Header
