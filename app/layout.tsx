"use client";

import { Layout } from "@/public/components/Layout";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body>
        <ChakraProvider value={defaultSystem}>
          <Layout>{children}</Layout>
        </ChakraProvider>
      </body>
    </html>
  );
}
