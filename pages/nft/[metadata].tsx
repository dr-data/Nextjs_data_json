import NextLink from "next/link";
import { Link, Flex, Box, Text, SimpleGrid, Heading } from "@chakra-ui/core";
import { GetServerSideProps, NextPage } from "next";
import fetch from "node-fetch";
import ErrorPage from "next/error";

// define the type of the props with nested json


type Data = {
  metadata: {
    name: string;
    image: string;
    description: string;
  };
  cached_file_url: string;
};

const NFTPage: NextPage<{ data: Data }> = props => {
  if (!props.data) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Box>
      <Flex flexDirection="column" alignItems="center">
        <Heading marginY="2rem">NFT</Heading>
        <SimpleGrid columns={2} width="2xs" spacingY={4}>
          <Text fontWeight="bold" marginRight={4}>
            Image Name
          </Text>
          <Text>{props.data.metadata.name}</Text>

          <Text fontWeight="bold" marginRight={4}>
            Description
          </Text>
          <Text>{props.data.metadata.description}</Text>

          <Text fontWeight="bold" marginRight={4}>
            image
          </Text>
          <Text>{props.data.cached_file_url}</Text>
        </SimpleGrid>
        <NextLink href="/">
          <Link marginY="2rem">
            <Text fontStyle="italic">Go back home</Text>
          </Link>
        </NextLink>
      </Flex>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  res
}) => {
  try {
    const { id } = params;
    const result = await fetch(`http://localhost:3000/api/nft/${id}`);
    const data: Data = await result.json();

    return {
      props: { data }
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {}
    };
  }
};

export default NFTPage;
