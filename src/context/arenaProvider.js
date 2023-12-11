'use client'
import { datos } from '@/data/datos';
import React, { createContext, useState } from 'react'

export const ArenaContex= createContext();


export const ArenaProvider = ({children}) => {
    const [idioma, setIdioma]= useState(datos.esp);

    const data={idioma, setIdioma}

  return (
    <ArenaContex.Provider value={data} >
        {children}
    </ArenaContex.Provider>
  )
}
