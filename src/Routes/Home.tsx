import { Box, HStack, Image, Button, SimpleGrid, Text, Heading, Flex } from "@chakra-ui/react";
import logo from "../assets/logo-white.png";
import card from "../assets/card.png";
import colors from "../colors";
import FeatureCard from "../Components/FeatureCard";
import { cards } from "../data/cards";
import Accordions from "../Components/Accordions";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Box backgroundColor={colors["blue"]}>
        <HStack justifyContent="space-between" padding={8}>
          <HStack>
            <Image src={logo} boxSize={55} />
            <Text fontSize="2xl" color={colors["white"]} fontWeight="bold">
              AutoPay
            </Text>
          </HStack>
          <HStack gap={5}>
            <a href="/login-choice">
              <Button color={colors["blue"]}>Login</Button>
            </a>
            <a href="/signup-rider">
              <Button color={colors["blue"]}>Rider Signup</Button>
            </a>
          </HStack>
        </HStack>
        <SimpleGrid
          columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
          alignItems="center"
          justifyItems="center"
          px={10}
          paddingBottom={10}
        >
          <Box fontSize="5xl" color={colors["white"]} fontWeight="bold">
            <Text>Revolutionizing </Text>
            <Text>Autorickshaw Payments </Text>
            <Text>for a Smoother Ride</Text>
            <Button color={colors["blue"]}>
              <a href="/animation">Watch animation</a>
            </Button>
            <Button color={colors["blue"]} ml={3}>
              <a href="/documentaion">View document</a>
            </Button>
          </Box>

          <Box>
            <Image src={card} height="250px" border="15px solid #b1c0ff"></Image>
          </Box>
        </SimpleGrid>
      </Box>
      <SimpleGrid columns={{ sm: 1, md: 1, lg: 3, xl: 3 }} marginTop={10}>
        {cards.map((card) => (
          <FeatureCard key={card.id} card={card} />
        ))}
      </SimpleGrid>
      <Flex
        backgroundColor={colors["blue"]}
        margin={12}
        padding={10}
        flexDirection="column"
        gap={5}
      >
        <Heading size={"2xl"} py={5} color={colors["white"]} textAlign="center">
          Our key Characteristics
        </Heading>
        <Accordions />
      </Flex>
      <Footer />
    </div>
  );
};

export default Home;
