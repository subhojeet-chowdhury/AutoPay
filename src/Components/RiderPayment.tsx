import { AccordionItem, AccordionButton, Box, Button, HStack, Text } from "@chakra-ui/react";
import { BsCalendarDate } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { TransactionProps } from "./Transactions";

interface Props {
  transaction: TransactionProps;
}

const PartnerPayment = ({ transaction }: Props) => {
  return (
    <AccordionItem>
      <AccordionButton display="flex" alignItems="center" justifyContent="space-between" p={3}>
        <HStack justifyContent={"space-between"} width={"100%"}>
          <HStack gap={10}>
            <Text fontSize={"md"} width={"200px"} textAlign={"left"}>
              From: {transaction.to}
            </Text>

            <Text fontSize={"md"} width={"100px"} textAlign={"left"}>
              Amount: ${transaction.amount}
            </Text>
          </HStack>
          <HStack>
            <Button _disabled={{ opacity: 1 }} isDisabled>
              {transaction.date}{" "}
              <Box ml={2}>
                <BsCalendarDate />
              </Box>
            </Button>
            <Button _disabled={{ opacity: 1 }} isDisabled>
              {transaction.time}{" "}
              <Box ml={2}>
                <BiTime />
              </Box>
            </Button>
          </HStack>
        </HStack>
      </AccordionButton>
    </AccordionItem>
  );
};

export default PartnerPayment;
