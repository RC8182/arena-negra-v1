'use client'
import { Box, Flex, Heading, } from "@chakra-ui/react";
import { ArenaContex } from "@/context/arenaProvider";
import { useContext } from "react";
import { Parallax } from "@/components/parallax/parallax";
import imgV from '../../../../public/images/800/gentealmorzando.jpg'
import imgH from '../../../../public/images/1460/gentealmorzando.jpg'
import imgV1 from '../../../../public/images/800/cocktails.jpg'
import imgH1 from '../../../../public/images/1460/cocktails.jpg'
import imgV2 from '../../../../public/images/800/ginTonic.jpg'
import imgH2 from '../../../../public/images/1460/ginTonic.jpg'
import imgV3 from '../../../../public/images/800/vistas.jpg'
import imgH3 from '../../../../public/images/1460/vistas.jpg'
import imgV4 from '../../../../public/images/800/caption.jpg'
import imgH4 from '../../../../public/images/1460/caption.jpg'

export default function Galeria() {

  const {idioma}= useContext(ArenaContex);
  const titulo= idioma.galeria.titulo;

  return (
    <Box backgroundColor={'black'} color={'white'} w={'100%'}>
    <Box margin={'5px'} >
      <Flex flexDir={'column'} 
        align={'center'}
        flexWrap={'wrap'}>
        <Heading id="galeria">{titulo}</Heading>        
         {/* <Flex marginTop={'3%'}> */}
          <Parallax imgv={imgV} imgh={imgH}/>
          <Parallax imgv={imgV1} imgh={imgH1}/>
          <Parallax imgv={imgV2} imgh={imgH2}/>
          <Parallax imgv={imgV3} imgh={imgH3}/>
          <Parallax imgv={imgV4} imgh={imgH4}/>
         {/* </Flex>  */}
      </Flex>
    </Box>
    </Box>
  )
}