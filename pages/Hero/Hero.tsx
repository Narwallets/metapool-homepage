import type { NextPage } from "next";
import { VStack, Center, Box, Image, Flex, keyframes } from "@chakra-ui/react";
import MetapoolData from "./MetapoolData";

const Hero: NextPage = () => {
  return (
    <>
      <Box overflow="hidden" w="100%" position="relative">
        <VStack
          w="100%"
          h="100%"
          spacing="0"
          _before={{
            animation: `${keyframes`
                from {transform: rotate(-20deg);}
                to {transform: rotate(10deg)}
              `} infinite 3s ease-in-out alternate`,
            content: '""',
            position: "absolute",
            bgRepeat: "no-repeat",
            bgSize: "cover",
            w: "200%",
            h: "200%",
            top: "-50%",
            left: "-50%",
            zIndex: "-1",
            bg: "#F2F2F2 url('bg-home-main.svg')",
            backgroundPositionX: "center",
            backgroundPositionY: "top",
            maskImage:
              "-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
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
              fontFamily={["Inter", "sans-serif"]}
              borderRadius="30px"
              border="2px"
              py="14px"
              px="44px"
            >
              Start staking
            </Box>
          </Flex>
          <Center>
            <Box
              textStyle="h1"
              color="#0F172A"
              textAlign="center"
              lineHeight="90%"
              pt="5rem"
            >
              Stake NEAR,
              <br /> maximise returns
            </Box>
          </Center>
          <Center py="4rem">
            <Box
              textStyle="h4"
              color="#0F172A"
              textAlign="center"
              lineHeight="90%"
              fontFamily={["Inter", "sans-serif"]}
            >
              Receive stNEAR to access liquidity without having to sell your
              assets.
            </Box>
          </Center>
          <Center>
            <Box
              as="button"
              color="white"
              fontFamily={["Inter", "sans-serif"]}
              fontWeight="semibold"
              bg="#0F172A"
              borderRadius="30px"
              border="2px"
              borderColor="#0F172A"
              py="14px"
              px="44px"
              mb="66px"
            >
              Start staking
            </Box>
          </Center>
          <Flex
            w="100%"
            h="182px"
            justifyContent="space-between"
            alignItems="center"
            direction="row"
            px="4rem"
            borderBottomRadius="104"
            bgColor="white"
          >
            <MetapoolData
              title="Total value locked (TVL)"
              value="$83,333,333"
            />
            <MetapoolData
              title="Annual percentage yield (APY)"
              value="10.08%"
            />
            <MetapoolData title="Validators" value="92" />
          </Flex>
          <Box>
            asdasdas
            <br />
            asdasdas
            <br />
            asdasdas
            <br />
            asdasdas
            <br />
            asdasdas
            <br />
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default Hero;
