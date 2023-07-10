import { Stat, StatLabel, StatNumber, Flex, Button, Text } from "@chakra-ui/react";
import colors from "../colors";

interface StatsCardProps {
  name: String;
  earning: String;
  route: String;
}

const PartnerCard = ({ name, earning, route }: StatsCardProps) => {
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"3"}
      shadow={"xl"}
      bgGradient={`linear(to-r, ${colors["darkBlue"]}, ${colors["blue"]})`}
      color="white"
      rounded={"lg"}
      height={"200px"}
      maxWidth={"400px"}
    >
      <Flex flexDirection={"column"} gap={"70px"}>
        <Flex flexDirection={"column"}>
          <StatLabel fontWeight={"medium"} isTruncated fontSize={"2xl"}>
            {name}
          </StatLabel>
          <Text>Route you travel: {route}</Text>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            ₹{earning}
          </StatNumber>
          <Button>Withdraw money</Button>
        </Flex>
      </Flex>
    </Stat>
  );
};

export default PartnerCard;
