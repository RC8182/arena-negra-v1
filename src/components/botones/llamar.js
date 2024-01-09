import { ArenaContex } from '@/context/arenaProvider';
import { Box } from '@chakra-ui/react';
import React, { useContext } from 'react'

export const Llamar = (props) => {
    const {idioma}=useContext(ArenaContex)
    const phoneNumber= props.phone;

    return (
      <Box textColor={'white'}>
        {(idioma === 'ing') ?
          <a href={`tel:${phoneNumber}`} ><span style={{whiteSpace: 'nowrap'}}>Call Now</span></a>
          : <a href={`tel:${phoneNumber}`} >Llamar</a>
        }
      </Box>
    )
      }    