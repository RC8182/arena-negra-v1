import { Body } from "@/components/body/body";
import FootBar from "@/components/footer/footBar";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/navbar";
import { HStack } from "@chakra-ui/react";

export default function App(){
    return(
        <div>
        <NavBar/>
        <Body/>
        <Footer/>
        <HStack display={{ base: 'flex', md: 'none' }}>
          <FootBar/>
        </HStack>
        </div>
    )
}

