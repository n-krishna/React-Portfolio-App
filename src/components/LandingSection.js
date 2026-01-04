import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar
        src="https://i.pravatar.cc/150?img=7"
        size="2xl"
      />
      <Heading color="white">{greeting}</Heading>
      <Heading color="white" size="md">
        {bio1}
      </Heading>
      <Heading color="white" size="md">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);


export default LandingSection;
