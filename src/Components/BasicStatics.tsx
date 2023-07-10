import { Box, chakra, SimpleGrid } from "@chakra-ui/react";
import { GiExpense } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import StatsCard from "./StatsCard";

const BasicStatistics = () => {
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1 fontSize={"4xl"} py={3} fontWeight={"bold"}>
        Today's stats
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={"Transactions"} stat={"5"} icon={<GrTransaction size={"2em"} />} />
        <StatsCard title={"Expenses"} stat={"125"} icon={<GiExpense size={"2em"} />} />
        <StatsCard
          title={"Balance"}
          stat={"1,000"}
          icon={<MdOutlineAccountBalanceWallet size={"2em"} />}
        />
      </SimpleGrid>
    </Box>
  );
};

export default BasicStatistics;
