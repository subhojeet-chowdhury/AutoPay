import { Flex, Heading, Box } from "@chakra-ui/react";
import RiderCard from "./RiderCard";
import RiderStatictics from "./RiderStatistics";
import Transactions from "./Transactions";
import transactions from "../data/transactions";

const RiderHomeMain = () => {
  return (
    <Box padding={8}>
      <Flex gap={10}>
        <RiderCard name={"subhojeet chowdhury"} balance={"1000"} />
        <RiderStatictics />
      </Flex>
      <Box py={10}>
        <Heading marginBottom={5}>Recent transactions</Heading>
        <Transactions transactions={transactions} />
      </Box>
    </Box>
  );
};

export default RiderHomeMain;
