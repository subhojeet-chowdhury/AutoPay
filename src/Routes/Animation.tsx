import { Box } from "@chakra-ui/react";
import animationVideo from "../assets/animation.mp4";

const Animation = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor="black"
      padding={10}
    >
      <video src={animationVideo} controls style={{ width: "100%", height: "100%" }} />
    </Box>
  );
};

export default Animation;
