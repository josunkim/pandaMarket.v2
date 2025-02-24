import { Box, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ReactNode } from "react";

type LayoutProps = { children: ReactNode };

export const Layout: NextPage<LayoutProps> = ({ children }) => (
  <VStack w={"full"} h={"full"} gap={0} fontFamily={"Pretendard"}>
    <Header />
    <Box minH={"100vh"}>{children}</Box>
    <Footer />
  </VStack>
);
