import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      align="start"
      backgroundColor="white"
      borderRadius="xl"
      boxShadow="md"
      overflow="hidden"
      _hover={{ transform: "scale(1.03)", transition: "0.2s" }} // optional hover effect
    >
      {/* Project image */}
      <Image src={imageSrc} alt={title} objectFit="cover" />

      {/* Card content */}
      <VStack align="start" spacing={3} p={4}>
        <Heading size="md">{title}</Heading>
        <Text color="gray.600">{description}</Text>

        <HStack spacing={2}>
          <Text color="gray.600">
            See more
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="#060607d8" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
