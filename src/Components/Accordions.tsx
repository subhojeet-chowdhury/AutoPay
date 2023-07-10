import { Accordion, Flex, useColorModeValue } from "@chakra-ui/react";
import { AiFillCaretDown } from "react-icons/ai";
import { features } from "../data/cards";
import AccordionElement from "./AccordionElement";

export default function Accordions() {
  return (
    <Flex align={"center"} justify={"center"} bg={useColorModeValue("gray.50", "gray.800")}>
      <Accordion allowMultiple width="100%" bg="white" rounded="lg">
        {features.map((feature) => (
          <AccordionElement key={feature.id} feature={feature} />
        ))}
      </Accordion>
    </Flex>
  );
}
