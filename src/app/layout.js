import './globals.css'
import Footer from '@/components/footer/footer'
import { ArenaProvider } from '@/context/arenaProvider'
import NavBar from '@/components/navbar/navbar'
import { Providers } from './providers'
import  FootBar  from '@/components/footer/footBar'
import { HStack } from '@chakra-ui/react'



export const metadata = {
  title: 'Arena Negra Restaurante - Los Abrigos, Tenerife',
  description: 'Disfruta de las mejores paellas y parrilladas de pescado local en Los Abrigos, Tenerife. Arena Negra Restaurant ofrece una experiencia única con vistas impresionantes y un servicio al cliente inmejorable.',
  keywords: 'Restaurante, Paella, Mariscos, Pescado Local, Los Abrigos, Tenerife, Vistas al Mar, Servicio Excelente, Restaurante en los Abrigos'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <ArenaProvider>
            <NavBar/>
          {children}
          <Footer/>
          <HStack display={{ base: 'flex', md: 'none' }}>
          <FootBar/>
          </HStack>
          </ArenaProvider>
        </Providers>
      </body>
    </html>
  )
}
