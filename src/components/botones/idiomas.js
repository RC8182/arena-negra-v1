import { ArenaContex } from '@/context/arenaProvider';
import { datos } from '@/data/datos'
import { Button } from '@chakra-ui/react';
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
    <div>
        {(idioma === datos.ing)?
        <Button border={'1px black solid'} onClick={esp}>Español?</Button>:
        <Button border={'1px black solid'} onClick={ing}>English?</Button>}
    </div>
  )
}
