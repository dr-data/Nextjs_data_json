import NextLink from "next/link";
import Router from "next/router";
import { Heading, Link, Flex, Box, Button, Divider } from "@chakra-ui/core";

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const IndexPage = () => {
  return (
    <Box>
      <Flex margin="1rem" justifyContent="flex-end">
        <NextLink href="/about" passHref>
          <Link>About</Link>
        </NextLink>
      </Flex>
      <Flex flexDirection="column" alignItems="center" margin="2rem">
        <Link href="https://egghead.io/playlists/introduction-to-next-js-9-9c01?af=dkm3m8">
          <Heading as="h1" size="2xl" marginY="1rem">
            Displaying image
          </Heading>
        </Link>
        <Box width="xl">
          <Divider />
        </Box>
        <Heading as="h2" size="lg" marginY="1rem">
          from contract
        </Heading>
        <Button
          variantColor="blue"
          margin="3rem"
          onClick={() => Router.push(`/user/${getRandomInt(40)}`)}
        >
          Check out a random user
        </Button>
        <Button
          variantColor="green"
          margin="3rem"
          onClick={() => Router.push(`/nft/${getRandomInt(120)}`)}
        >
          Check out a random NFT
        </Button>
      </Flex>
    </Box>
  );
};

export default IndexPage;
