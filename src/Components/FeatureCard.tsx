import { Heading, Box, Center, Text, useColorModeValue, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import colors from "../colors";

interface Card {
  id: Number;
  icon: IconType;
  name: String;
  description: String;
}

interface Props {
  card: Card;
}

const FeatureCard = ({ card }: Props) => {
  return (
    <Center py={6}>
      <Box
        maxW={"400px"}
        height={"420px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        padding={10}
        textAlign={"center"}
      >
        <Icon
          boxSize={20}
          as={card.icon}
          backgroundColor={colors["blue"]}
          borderRadius={50}
          padding={4}
          color={colors["white"]}
        />

        <Heading fontSize={"3xl"} my={3}>
          {card.name}
        </Heading>

        <Text textAlign={"left"} color="black">
          {card.description}
        </Text>
      </Box>
    </Center>
  );
};

export default FeatureCard;
