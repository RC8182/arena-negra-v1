'use client'
import { Box, Flex, HStack} from '@chakra-ui/react'
import { Llamar } from '../botones/llamar';
import { Idiomas } from '../botones/idiomas';
import { Direccion } from '../botones/direccion';

export default function FootBar() {


  return (
<Box 
    bg={'black'}
    pos={'fixed'} 
    overflow={'hidden'} 
    bottom={0} 
    w={'100%'}
    h={50}
    borderTop={'2px solid white'}
    borderTopLeftRadius={'15px'}
    borderTopRightRadius={'15px'}
>  
    <Flex flexDir={'row'} px={10} alignItems={'center'} justifyContent={'center'}>
        <HStack display={{ base: 'flex', md: 'none' }} w={'33%'} justifyContent={'flex-start'}>
        <Llamar phone={+34648416513}/>
        </HStack>
        <HStack display={{ base: 'flex', md: 'none' }} w={'33%'} justifyContent={'center'}>
        <Direccion />
        </HStack>
        <HStack display={{ base: 'flex', md: 'none' }} w={'33%'} justifyContent={'flex-end'}>
        <Idiomas/>
        </HStack>
    </Flex>
</Box>

  )
}
