import { ArenaContex } from '@/context/arenaProvider';
import { Box, Button } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useContext } from 'react'

export const Idiomas = () => {
    const{idioma, setIdioma}= useContext(ArenaContex);
    const ing=()=>{
        return setIdioma('ing');
    }
    const esp=()=>{
        return setIdioma('esp');
    }
  return (
    <Box textColor={'white'}>
        {(idioma === 'ing')?
        <Link href="#" onClick={esp}>Español?</Link>:
        <Link href="#" onClick={ing}>English?</Link>}
    </Box>
  )
}
