import { Accordion, AccordionItem, AccordionButton, Flex, Text } from "@chakra-ui/react";
import PartnerPayment from "./PartnerPayment";
import { TransactionProps } from "./Transactions";

interface Props {
  transactions: TransactionProps[];
}

const PartnerPayments = ({ transactions }: Props) => {
  return (
    <Flex>
      <Accordion allowMultiple width="100%" bg="white" rounded="lg">
        {transactions.map((transaction: TransactionProps) => (
          <PartnerPayment transaction={transaction} />
        ))}
      </Accordion>
    </Flex>
  );
};

export default PartnerPayments;
