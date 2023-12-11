import { ArenaContex } from "@/context/arenaProvider";
import { Box, Flex, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { useContext } from "react";

export const NavLink = () => {

    const {idioma}= useContext(ArenaContex);
    const Links = idioma?.navbar.links;
    
        return (
        <HStack as={'nav'} spacing={4}>
              {Links.map((e) => (              
                <Box key={e.title}>
                <Link href={e.url}>
                {e.title}
                </Link>
                </Box>
              ))}
        </HStack>
    )
  }