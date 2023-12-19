import { ArenaContex } from "@/context/arenaProvider";
import { Box, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { useContext } from "react";
import { datos } from "./db";

export const NavLink = () => {

    const {idioma}= useContext(ArenaContex);
    const Links =( idioma==='esp')
    ? datos?.esp.navbar.links
    : datos?.ing.navbar.links;
    
        return (
        <HStack as={'nav'} spacing={4}>
              {Links?.map((e) => (              
                <Box key={e.title}>
                <Link href={e.url}>
                {e.title}
                </Link>
                </Box>
              ))}
        </HStack>
    )
  }