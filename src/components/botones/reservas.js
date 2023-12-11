import { ArenaContex } from '@/context/arenaProvider'
import { datos } from '@/data/datos'
import { Button, Link } from '@chakra-ui/react';
import React, { useContext } from 'react'

export const Reservar = () => {
    const {idioma}= useContext(ArenaContex);
  return (
    <Button border={'1px black solid'}>
    {(idioma === datos.esp)?
      <Link href={`https://api.whatsapp.com/send/?phone=34648416513`} isExternal>Reservar</Link>
      : <Link href={`https://api.whatsapp.com/send/?phone=34648416513`} isExternal>Book a Table</Link>
    }
  </Button>
  )
}
