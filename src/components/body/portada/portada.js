import { Box, Flex } from '@chakra-ui/react'
import { Reservar } from '../../botones/reservas'
import { Logo } from '../../logo'
import { datos } from './db'


export default async function Portada ({idioma}) {

    const datosPortada =( idioma==='es') ? datos?.esp : datos?.ing;
    const h1= datosPortada.portada.h1
    const h2= datosPortada.portada.h2
    const data = await getData();
    const img= await data[0]?.url


  return (
    <Box w={'100%'}>
        <Box 
        className='fondo' 
        minW={{base:'300px', lg:'100vw'}}
        minH={{base:'600px', lg:'600px'}}
        position={'relative'}
        backgroundImage={`url(${img})`}
        backgroundColor={'black'}
        backgroundAttachment={'fixed'}
        backgroundPosition={'center'}
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}>
            <Box 
                className='contenedor-titulo'
                position={'absolute'}
                left={0}
                top={0}
                width={'100%'}
                height={'100%'}
                backgroundColor={'rgba(44, 42, 42, 0.527)'}
                textAlign={'center'}>
                <Flex flexDir={'column'}>
                    <Flex 
                    margin={'3%'}
                    className='titulo'
                    justifyContent={'center'}
                    color={'white'}
                    padding={'18px'}
                    fontSize={'25px'}
                    flexDir={'column'}
                    letterSpacing={'10px'}
                    >
                    <h2>{h2}</h2>
                    </Flex>

                    <Flex flexDir={'column'} justifyContent={'center'} w={'90%'} margin={'auto'}>
                        <Reservar idioma={idioma} />
                    </Flex>
                    <Flex 
                        margin={'1%'}
                        padding={'2%'}
                        className='titulo'
                        justifyContent={'center'}
                        color={'white'}
                        fontSize={'25px'}
                        flexDir={'column'}
                        letterSpacing={'10px'}>
                        <h1>{h1}</h1>
                        <Logo width={'150px'}/>
                    </Flex>
                   
                </Flex>

            </Box>
        </Box>

        <Flex
             className='seccion'
             height={'auto'}
             alignItems={'center'}
             justifyContent={'center'}
             padding={'0 20'}
             >

        </Flex>
        
    </Box>
  )
}

export async function getData() {
    const res = await fetch('http://localhost:3000/api/get', { cache: 'no-store' });
    const data = await res.json();
    const portadaImages = data.filter(image => image.url.includes('/uploads/portada/'));
    
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return portadaImages
  }