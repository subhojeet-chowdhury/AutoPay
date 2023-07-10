import { Stat, StatLabel, StatNumber, Flex, Button, useColorModeValue } from "@chakra-ui/react";
import colors from "../colors";

interface StatsCardProps {
  name: String;
  balance: String;
}

const RiderCard = ({ name, balance }: StatsCardProps) => {
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      bgGradient={`linear(to-r, ${colors["darkBlue"]}, ${colors["blue"]})`}
      color="white"
      rounded={"lg"}
      height={"200px"}
      maxWidth={"400px"}
    >
      <Flex flexDirection={"column"} gap={"100px"}>
        <StatLabel fontWeight={"medium"} isTruncated fontSize={"1xl"}>
          {name}
        </StatLabel>
        <Flex justifyContent={"space-between"}>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            ₹{balance}
          </StatNumber>
          <Button>Add money</Button>
        </Flex>
      </Flex>
    </Stat>
  );
};

export default RiderCard;
