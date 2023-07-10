import { Flex, Heading, Box } from "@chakra-ui/react";
import RiderCard from "./RiderCard";
import BasicStatistics from "./RiderStatistics";
import Transactions from "./Transactions";
import transactions from "../data/transactions";
import PartnerCard from "./PartnerCard";
import PartnerStatistics from "./PartnerStatistics";
import PartnerPayments from "./PartnerPayments";

const PartnerHomeMain = () => {
  return (
    <Box padding={8}>
      <Flex gap={10}>
        <PartnerCard name="Rajpal Yadav" earning={"4050"} route={"College street-Newtown"} />
        <PartnerStatistics />
      </Flex>
      <Box py={10}>
        <Heading marginBottom={5}>Recent payments</Heading>
        <PartnerPayments transactions={transactions} />
      </Box>
    </Box>
  );
};

export default PartnerHomeMain;
