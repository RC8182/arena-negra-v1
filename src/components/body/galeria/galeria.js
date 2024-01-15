'use client'
import { Box, Flex, Heading, } from "@chakra-ui/react";;
import { Parallax } from "@/components/parallax/parallax";
import { datos } from "./db";
import { useEffect, useState } from "react";


export default function Galeria({idioma}) {
  const [imgGaleria, setImgGaleria] = useState([]);
  const datosGaleria =( idioma==='es') ? datos?.esp : datos?.ing;
  const titulo= datosGaleria.galeria.titulo;
  useEffect(() => {
    fetch('./api/get')
        .then(response => response.json())
        .then(data => {
            const img = data.map(item => item);
            const galeriaImages = img.filter(image => image.url.includes('/uploads/galeria/'));
            setImgGaleria(galeriaImages);
        })
        .catch(error => console.error('Error:', error));
}, []);

  return (
    <Box backgroundColor={'black'} 
    color={'white'} 
    w={'100%'}
    minW={{base:'300px', lg:'100vw'}}
    minH={{base:'600px', lg:'600px'}}>
    <Box >
      <Flex flexDir={'column'} 
        align={'center'}
        flexWrap={'wrap'}>
        <Heading id="galeria">{titulo}</Heading>        
         {imgGaleria?.map((e,i)=>{
          return <Parallax img={e.url} key={i} />
         })}

      </Flex>
    </Box>
    </Box>
  )
}