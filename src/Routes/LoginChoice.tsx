import { Flex, Button } from "@chakra-ui/react";
import colors from "../colors";

const LoginChoice = () => {
  return (
    <Flex justifyContent="center" alignItems="center" height="100vh" gap={4}>
      <a href="/rider">
        <Button
          backgroundColor={colors["blue"]}
          color={colors["white"]}
          _hover={{ backgroundColor: `${colors["darkBlue"]}`, color: "white" }}
        >
          I'm a Smart Rider
        </Button>
      </a>
      <a href="/partner">
        <Button
          backgroundColor={colors["blue"]}
          color={colors["white"]}
          _hover={{ backgroundColor: `${colors["darkBlue"]}`, color: "white" }}
        >
          I'm a Smart Fare Partner
        </Button>
      </a>
    </Flex>
  );
};

export default LoginChoice;
