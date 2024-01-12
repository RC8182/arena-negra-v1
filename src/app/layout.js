import './globals.css'
import { ArenaProvider } from '@/context/arenaProvider'
import { Providers } from './providers'



export const metadata = {
  title: 'Restaurante en Los Abrigos - Arena Negra',
  description: 'Disfruta de las mejores paellas y parrilladas de pescado local en Los Abrigos, Tenerife. Arena Negra Restaurant ofrece una experiencia única con vistas impresionantes y un servicio al cliente inmejorable.',
  keywords: 'Restaurante, Paella, Mariscos, Pescado Local, Los Abrigos, Tenerife, Vistas al Mar, Servicio Excelente, Restaurante en los Abrigos, Donde comer pescado en los abrigos, donde comer paella en los abrigos'
}

export default function RootLayout({ children }) {

  return (
    <html lang='es'>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="google-site-verification" content="Rm2sDQs-MVKtHT9LyDkRsSFVTAVbA0OHFvWdRa7I3F8" />
        <meta name="theme-color" content="black"></meta>
      <body>
        <Providers>
          <ArenaProvider>
            {children}
          </ArenaProvider>
        </Providers>
      </body>
    </html>
  )
}
