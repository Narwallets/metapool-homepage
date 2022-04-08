import type { NextPage } from "next";
import {
  VStack,
  Center,
  Text,
  Box,
  Image,
  Flex,
  keyframes,
} from "@chakra-ui/react";

const Hero: NextPage = () => {
  return (
    <>
      <Box overflow="hidden" w="100%" h="668px" position="relative">
        <VStack
          w="100%"
          h="100%"
          spacing="0"
          _before={{
            animation: `${keyframes`
                from {transform: rotate(-25deg);}
                to {transform: rotate(25deg)}
              `} infinite 5s linear alternate`,
            content: '""',
            position: "absolute",
            bgRepeat: "no-repeat",
            bgSize: "cover",
            w: "200%",
            h: "200%",
            top: "-50%",
            left: "-50%",
            zIndex: "-1",
            bg: "#F2F2F2 url('bg-home-main.svg') center center",
          }}
        >
          <Flex
            w="100%"
            justifyContent="space-between"
            alignItems="center"
            direction="row"
            py="2rem"
            px="4rem"
          >
            <Image alt="logo" src={"logo.svg"} w="202" h="34" />
            <Box
              as="button"
              p={4}
              fontWeight="semibold"
              borderRadius="30px"
              bg="transparent"
              border="2px"
              py="14px"
              px="44px"
            >
              <Text fontWeight="semibold">Start staking</Text>
            </Box>
          </Flex>
          <Center
            color="#0F172A"
            fontSize="8xl"
            fontWeight="bold"
            textAlign="center"
            lineHeight="90%"
            pt="5rem"
          >
            Stake NEAR,
            <br /> maximise returns
          </Center>
          <Center fontSize="2xl" fontWeight="bold" textAlign="center" py="4rem">
            <p>
              Receive stNEAR to access liquidity without having to sell your
              assets.
            </p>
          </Center>
          <Center>
            <Box
              as="button"
              p={4}
              color="white"
              fontWeight="semibold"
              bg="#0F172A"
              borderRadius="30px"
              border="2px"
              borderColor="#0F172A"
              py="14px"
              px="44px"
            >
              <Text fontWeight="normal">Start staking</Text>
            </Box>
          </Center>
        </VStack>
      </Box>
    </>
  );
};

export default Hero;
