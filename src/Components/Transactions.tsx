import { Accordion, AccordionItem, AccordionButton, Flex, Text } from "@chakra-ui/react";
import Transaction from "./Transaction";

export interface TransactionProps {
  id: Number;
  to: String;
  route: String;
  amount: String;
  date: String;
  time: String;
}

interface Props {
  transactions: TransactionProps[];
}

const Transactions = ({ transactions }: Props) => {
  return (
    <Flex>
      <Accordion allowMultiple width="100%" bg="white" rounded="lg">
        {transactions.map((transaction: TransactionProps) => (
          <Transaction transaction={transaction} />
        ))}
      </Accordion>
    </Flex>
  );
};

export default Transactions;
