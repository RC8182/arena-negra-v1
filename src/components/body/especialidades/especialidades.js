'use client'
import { ArenaContex } from '@/context/arenaProvider'
import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Productos } from './productos'



export const Especialidades = () => {
    const  {idioma}= useContext(ArenaContex)
    const titulo= idioma.especialidades.titulo

    const productos= idioma.especialidades.productos;

    return (
        <Box backgroundColor={'black'} color={'white'} w={'100%'}         minW={{base:'400px', lg:'100vw'}}
        minH={{base:'600px', lg:'600px'}}>
                <Box margin={'5%'} >
                  <Stack spacing={0} align={'center'}>
                    <Heading>{titulo}</Heading>

                  </Stack>
                  <Stack
                    margin={'3%'}
                    direction={{ base: 'column', lg: 'row' }}
                    spacing={{ base: 10, md: 4, lg: 12 }}
                    align={'center'}
                    justifyContent={'center'}>
                    
                    {productos.map((e,i)=>{
                        return(
                            <div key={i}>
                            <Productos img={e.img} alt={e.alt} titulo={e.titulo} texto={e.texto}/>
                            </div> 
                            ) 
                            })
                            }
                  </Stack>

                </Box>
              </Box>
            )
}
