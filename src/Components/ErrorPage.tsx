import { useRouteError } from "react-router-dom";
import { Flex, Text, Heading } from "@chakra-ui/react";

export default function ErrorPage() {
  const error: unknown = useRouteError();

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column" height="100vh" gap={2}>
      <Heading>Oops!</Heading>
      <Text>Sorry, an unexpected error has occurred.</Text>
      <Text>{(error as { statusText?: string }).statusText || (error as Error).message}</Text>
    </Flex>
  );
}
