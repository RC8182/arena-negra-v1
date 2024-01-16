'use client'
import { Box, Flex, Heading, } from "@chakra-ui/react";
import { Parallax } from "@/components/parallax/parallax";
import { datos } from "./db";
import { useEffect, useState } from "react";


export default function Galeria({idioma}) {
   const [imgGaleria, setImgGaleria] = useState([]);

  const datosGaleria =( idioma==='es') ? datos?.esp : datos?.ing;
  const titulo= datosGaleria.galeria.titulo;

  useEffect(() => {
    const fetchData = async () => {
        const data = await getData();
        console.log(data, 'esto es data');
        setImgGaleria(data);
    };

    fetchData();
}, []);
  console.log(imgGaleria)
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
         {imgGaleria.map((e,i)=>{
          return <Parallax img={e.url} alt={e.alt} key={i} /> 
         })}

      </Flex>
    </Box>
    </Box>
  )
}

async function getData() {
  const res = await fetch('http://localhost:3000/api/get');
  const data = await res.json();
  const galeriaImages = data.filter(image => image.url.includes('/uploads/galeria/'));
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return galeriaImages
}