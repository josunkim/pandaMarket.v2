"use client";

import {
  Box,
  Button,
  HStack,
  Image,
  Link,
  LinkProps,
  useMediaQuery,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Header: NextPage = () => {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(false);

  const [mediumScreen] = useMediaQuery(["(max-width:744px)"], {
    ssr: true,
    fallback: [false],
  });

  const [smallScreen] = useMediaQuery(["(max-width:375px)"], {
    ssr: true,
    fallback: [false],
  });

  return (
    <HStack
      w={"full"}
      h={68}
      px={mediumScreen ? 6 : 200}
      justifyContent={"space-between"}
      whiteSpace={"nowrap"}
    >
      <HStack gap={smallScreen ? "7px" : 6}>
        <Link w={smallScreen ? 81 : 153} h={smallScreen ? 40 : 51} href="/">
          <Image
            src={smallScreen ? "/assets/판다마켓.png" : "/assets/logo.png"}
            alt="logo_icon"
          />
        </Link>
        <Box
          fontWeight={700}
          fontSize={mediumScreen || smallScreen ? "16px" : "18px"}
          textAlign={"center"}
          gap={smallScreen ? 8 : 0}
        >
          <Button variant={"plain"} px={smallScreen ? 0 : 15} py={21}>
            자유게시판
          </Button>
          <Button
            px={smallScreen ? 0 : 15}
            py={21}
            onClick={() => {
              router.push("/store");
            }}
          >
            중고마켓
          </Button>
        </Box>
      </HStack>

      {!isLogin ? (
        <Link {...LinkBtnStyle} onClick={() => {}}>
          로그인
        </Link>
      ) : (
        <Image
          onClick={() => setIsLogin(!isLogin)}
          src="/assets/ic_login.png"
          alt="login"
        />
      )}
    </HStack>
  );
};

const LinkBtnStyle: LinkProps = {
  fontWeight: 600,
  textAlign: "center",
  px: 23,
  py: 3,
  bgColor: "#3692FF",
  borderRadius: 8,
  color: "white",
  href: "/login",
};
