import { Flex, Heading, Box } from "@chakra-ui/react";
import RiderCard from "./RiderCard";
import BasicStatistics from "./BasicStatics";
import Transactions from "./Transactions";
import transactions from "../data/transactions";

const RiderHomeMain = () => {
  return (
    <Box padding={5}>
      <Flex gap={10}>
        <RiderCard name={"subhojeet chowdhury"} balance={"1000"} />
        <BasicStatistics />
      </Flex>
      <Box py={10}>
        <Heading marginBottom={5}>Recent transactions</Heading>
        <Transactions transactions={transactions} />
      </Box>
    </Box>
  );
};

export default RiderHomeMain;
