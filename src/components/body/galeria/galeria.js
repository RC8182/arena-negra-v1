'use client'
import { Box, Flex, Heading, } from "@chakra-ui/react";
import { ArenaContex } from "@/context/arenaProvider";
import { useContext } from "react";
import { Parallax } from "@/components/parallax/parallax";


export default function Galeria() {

  const {idioma, imgGallery}= useContext(ArenaContex);
  const titulo= idioma.galeria.titulo;

  return (
    <Box backgroundColor={'black'} 
    color={'white'} 
    w={'100%'}
    minW={{base:'400px', lg:'100vw'}}
    minH={{base:'600px', lg:'600px'}}>
    <Box >
      <Flex flexDir={'column'} 
        align={'center'}
        flexWrap={'wrap'}>
        <Heading id="galeria">{titulo}</Heading>        
         {imgGallery?.map((e,i)=>{
          return <Parallax img={e.url} key={i} />
         })}

      </Flex>
    </Box>
    </Box>
  )
}