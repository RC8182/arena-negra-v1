'use client'
import { datos } from '@/data/datos';
import React, { createContext, useState, useEffect } from 'react'

export const ArenaContex = createContext();

export const ArenaProvider = ({children}) => {
    const [idioma, setIdioma] = useState(datos.esp);
    const [imgGallery, setImgGallery] = useState([]);
    const [imgFrontPage, setImgFrontPage] = useState([]);

    useEffect(() => {
        fetch('api/get')
            .then(response => response.json())
            .then(data => {
                const img = data.map(item => item);
                const galleryImages = img.filter(image => image.url.includes('/uploads/galeria/'));
                setImgGallery(galleryImages);
                const frontPageImages = img.filter(image => image.url.includes('/uploads/portada/'));
                setImgFrontPage(frontPageImages);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    const data = {idioma, setIdioma, imgGallery, imgFrontPage }

    return (
        <ArenaContex.Provider value={data}>
            {children}
        </ArenaContex.Provider>
    )
}
