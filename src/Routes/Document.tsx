import { Box } from "@chakra-ui/react";
import document from "../assets/AutoPay.pdf";

function Document() {
  return (
    <Box height={"100vh"}>
      <iframe src={document} width="100%" height="100%" />
    </Box>
  );
}

export default Document;
