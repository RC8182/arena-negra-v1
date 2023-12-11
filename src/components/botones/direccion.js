import { ArenaContex } from '@/context/arenaProvider'
import { datos } from '@/data/datos'
import { Button, Link } from '@chakra-ui/react';
import React, { useContext } from 'react'

export const Direccion = () => {
    const {idioma}= useContext(ArenaContex);
  return (
    <Button border={'1px black solid'}>
    {(idioma === datos.ing)?
      <Link href={`https://www.google.es/maps/dir//28.0289615,-16.5932594/@28.0289197,-16.5930625,20.75z?entry=ttu`} isExternal>Direction</Link>
      : <Link href={`https://www.google.es/maps/dir//28.0289615,-16.5932594/@28.0289197,-16.5930625,20.75z?entry=ttu`} isExternal>Cómo Llegar</Link>
    }
  </Button>
  )
}
