import { Seo } from "@/components/Seo";
import { Body } from "@/components/body/body";

export default function App(){
    return(
        <div>
            <Seo 
                title={'Restaurante en Los Abrigos | Arena Negra Restaurant'}
                metaName={"description"}    
                metaContent={'Disfruta de las mejores paellas y parrilladas de pescado local en Los Abrigos, Tenerife. Arena Negra Restaurant ofrece una experiencia única con vistas impresionantes y un servicio al cliente inmejorable.'}
                metaKey={'restaurante, Los Abrigos, paellas, parrillada de pescado, vistas, servicio al cliente'}
            />
            <Body/>
        </div>
    )
}