import { ArenaContex } from '@/context/arenaProvider';
import { datos } from '@/data/datos'
import { Box, Button } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useContext } from 'react'

export const Idiomas = () => {
    const{idioma, setIdioma}= useContext(ArenaContex);
    const ing=()=>{
        return setIdioma(datos.ing);
    }
    const esp=()=>{
        return setIdioma(datos.esp);
    }
  return (
    <Box textColor={'white'}>
        {(idioma === datos.ing)?
        <Link href="#" onClick={esp}>Español?</Link>:
        <Link href="#" onClick={ing}>English?</Link>}
    </Box>
  )
}
