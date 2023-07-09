import { Box, Heading, Text } from "@chakra-ui/react";
import colors from "../colors";

interface Item {
  id: Number;
  name: String;
  description: String;
}

interface Props {
  item: Item;
}

const CharacteristicCard = ({ item }: Props) => {
  return (
    <Box backgroundColor={colors["white"]} borderRadius={8} padding={6}>
      <Heading fontSize="24px" color="black">
        {item.name}
      </Heading>
      <Text py={3}>{item.description}</Text>
    </Box>
  );
};

export default CharacteristicCard;
