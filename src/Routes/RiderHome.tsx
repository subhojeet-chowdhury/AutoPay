import React, { ReactNode } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  Image,
  Button,
} from "@chakra-ui/react";
import { FiSettings, FiMenu } from "react-icons/fi";
import { AiOutlineProfile, AiOutlineHistory, AiOutlineHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { GoSignOut } from "react-icons/go";
import { IconType } from "react-icons";
import { ReactText } from "react";
import colors from "../colors";
import logo from "../assets/logo-white.png";

interface LinkItemProps {
  name: string;
  icon: IconType;
  path: String;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: AiOutlineHome, path: "/rider/:id/home" },
  { name: "Profile", icon: AiOutlineProfile, path: "/rider/:id/profile" },
  { name: "History", icon: AiOutlineHistory, path: "/rider/:id/history" },
  { name: "Settings", icon: FiSettings, path: "/rider/:id/settings" },
  { name: "Signout", icon: GoSignOut, path: "/" },
];

const RiderHome = ({ children }: { children: ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent onClose={() => onClose} display={{ base: "none", md: "block" }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }}>{children}</Box>
    </Box>
  );
};

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <HStack>
          <Image src={logo} boxSize={12} />
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" color={colors["blue"]}>
            AutoPay
          </Text>
        </HStack>

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Flex
        flexDirection={"column"}
        textAlign={"left"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {LinkItems.map((link) => (
          <a key={link.name} href={link.path as string}>
            <Button
              backgroundColor={"white"}
              my={2}
              py={4}
              fontSize={"18px"}
              fontWeight={"light"}
              textAlign={"left"}
              _hover={{ bg: `${colors["blue"]}`, color: `${colors["white"]}` }}
            >
              <Icon as={link.icon} mr={2} /> {link.name}
            </Button>
          </a>
        ))}
      </Flex>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link href="#" style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: `${colors["blue"]}`,
          color: `${colors["white"]}`,
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <HStack display={{ base: "flex", md: "none" }}>
        <Image src={logo} boxSize={12} />
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" color={colors["blue"]}>
          AutoPay
        </Text>
      </HStack>

      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: "none" }}>
              <HStack>
                <Avatar
                  size={"md"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </HStack>
            </MenuButton>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default RiderHome;
