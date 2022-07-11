import { Box, Button, ButtonGroup, Flex, Link, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import { BsArrowDown } from "react-icons/bs";
import DarkMode from "../DarkMode/Darkmode";
import { useRouter } from "next/router";
const Navbar = () => {
  const [about, setAbout] = useState(false);
  const [projects, setProjects] = useState(false);
  const [exp, setExp] = useState(false);
  const [con, setCon] = useState(false);
  const [home, setHome] = useState(false);
  const route = useRouter();

  useEffect(() => {
    if (route.pathname == "/about") {
      setAbout(true);
    }
    if (route.pathname == "/projects") {
      setProjects(true);
    }
    if (route.pathname == "/experience") {
      setExp(true);
    }
    if (route.pathname == "/") {
      setHome(true);
    }
  }, [route]);
  return (
    <Flex
      position={"relative"}
      p={2}
      display={{ base: "none", md: "flex" }}
      justifyContent="space-between"
      alignItems="center"
      bgColor="#864879"
    >
      <Link href="/" textDecoration="none!important">
        <Box
          color={"white"}
          fontWeight={"bold"}
          fontSize={"xl"}
          className="font-mono"
        >
          Portfolio
        </Box>
        <Text fontSize={"s"} color={"white"} className="font-sans">
          FullStack Webdev & DL
        </Text>
      </Link>
      <Box>
        <ButtonGroup color={"black"}>
          <Link href="/about">
            <Button backgroundColor="#FFAB76">
              About {about ? <BsArrowDown /> : " "}
            </Button>
          </Link>
          <Link href="/projects">
            <Button backgroundColor="#FFAB76">
              Projects {projects ? <BsArrowDown /> : " "}
            </Button>
          </Link>
          <Link href="/experience">
            <Button backgroundColor="#FFAB76">
              Experience {exp ? <BsArrowDown /> : " "}
            </Button>
          </Link>
        </ButtonGroup>
      </Box>
      <Box mr={"3rem"}>
        <ButtonGroup m={2}>
          <a href="https://github.com/hari0409" target="_blank">
            <SiGithub size={"2.25em"} />
          </a>
          <a href="https://www.linkedin.com/in/hari-baskar-s" target="_blank">
            <SiLinkedin size={"2.25em"} />
          </a>
          <a href="https://twitter.com/HariBaskar04" target="_blank">
            <SiTwitter size={"2.25em"} />
          </a>
          <DarkMode />
        </ButtonGroup>
      </Box>
    </Flex>
  );
};

export default Navbar;
