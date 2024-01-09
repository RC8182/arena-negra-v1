'use client'
import React, { createContext, useState, useEffect } from 'react'

export const ArenaContex = createContext();
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('./api/get')
    const data = await res.json()
   
    // Pass data to the page via props
    return { props: { data } }
  }

export const ArenaProvider = ({children, }) => {

    const [idioma, setIdioma] = useState('esp');
    const [imgGaleria, setImgGaleria] = useState([]);
    const [imgPortada, setImgPortada] = useState([]);
    const [imgEspecialidades, setImgEspecialidades] = useState([]);

    useEffect(() => {
        fetch('./api/get')
            .then(response => response.json())
            .then(data => {
                const img = data.map(item => item);
                const galeriaImages = img.filter(image => image.url.includes('/uploads/galeria/'));
                setImgGaleria(galeriaImages);
                const portadaImages = img.filter(image => image.url.includes('/uploads/portada/'));
                setImgPortada(portadaImages);
                const especialidadesImages = img.filter(image => image.url.includes('/uploads/especialidades/'));
                setImgEspecialidades(especialidadesImages);
            })
            .catch(error => console.error('Error:', error));
    }, []);
    

    const data = {idioma, setIdioma, imgGaleria, imgPortada, imgEspecialidades }

    return (
        <ArenaContex.Provider value={data}>
            {children}
        </ArenaContex.Provider>
    )
}
