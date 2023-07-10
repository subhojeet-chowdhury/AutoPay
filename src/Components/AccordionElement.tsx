import React from "react";
import { AccordionItem, AccordionButton, Text, AccordionPanel } from "@chakra-ui/react";
import { AiFillCaretDown } from "react-icons/ai";

interface FeatureProps {
  id: Number;
  name: String;
  description: String;
}

interface Props {
  feature: FeatureProps;
}

const AccordionElement = ({ feature }: Props) => {
  return (
    <AccordionItem>
      <AccordionButton
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={4}
        _hover={{ bg: "gray.100" }}
      >
        <Text fontSize="lg">{feature.name}</Text>
        <AiFillCaretDown fontSize="24px" />
      </AccordionButton>
      <AccordionPanel pb={4}>
        <Text>{feature.description}</Text>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default AccordionElement;
