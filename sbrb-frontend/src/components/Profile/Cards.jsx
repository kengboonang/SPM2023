import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  HStack,
  Image,
  // LinkOverlay,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  SkeletonText,
  // Spacer,
  StackDivider,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";

const ProfileHeadCard = ({ name, department, country, email, isLoading }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card variant="elevated" overflow="hidden" borderRadius="25px">
        <CardHeader p="0">
          <Box position="relative">
            <Box
              w="100%"
              h="200px"
              bgGradient={[
                "linear(to-tr, teal.300, yellow.400)",
                "linear(to-t, blue.200, teal.500)",
                "linear(to-b, orange.100, purple.300)",
              ]}
            />
            <Box>
              <Image
                borderRadius="full"
                boxSize="150px"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
                position="absolute"
                bottom="-60px"
                left="20"
                border="4px white solid"
              />
            </Box>
          </Box>
        </CardHeader>
        <CardBody pt={0} px={0}>
          <Box px={14}>
            <Box pt={20} pb={5} fontWeight="semibold">
              {isLoading ? (
                <>
                  <Skeleton height="17px" width="50%" />
                  <SkeletonText
                    mt="5"
                    noOfLines={3}
                    spacing="4"
                    skeletonHeight="2"
                  />
                </>
              ) : (
                <>
                  <Text fontSize="2xl" mb={2}>
                    {name}
                  </Text>
                  <Text fontSize="md" mb={2}>
                    {department}
                  </Text>
                  <HStack gap={4} mb={2}>
                    <Text color="blackAlpha.700">{country}</Text>
                    <Text fontSize="xl"> · </Text>
                    <Text
                      color="blue.600"
                      _hover={{
                        cursor: "pointer",
                        textDecoration: "underline",
                      }}
                      onClick={onOpen}>
                      Contact Info
                    </Text>
                  </HStack>
                </>
              )}
            </Box>
          </Box>
        </CardBody>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch">
              <Box>
                <Text color="blackAlpha.700">Mobile</Text>
                <Text>91111 1111</Text>
              </Box>
              <Box>
                <Text color="blackAlpha.700">Work Email</Text>
                <Text>{email}</Text>
              </Box>
              <Box>
                <Text color="blackAlpha.700">Office Address</Text>
                <Text>81 Victoria St, Singapore 188065</Text>
              </Box>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const ProfileSkillCard = ({ isLoading, skills }) => {
  return (
    <>
      <Card
        variant="elevated"
        overflow="hidden"
        borderRadius="25px"
        px={14}
        py={5}>
        <CardHeader p={0} fontWeight="semibold" mb={5}>
          <Flex alignItems="center">
            <Text fontSize="xl">Skills</Text>
            {/* <Spacer />
            <Button>
              <LinkOverlay href="/profile">Add Skills</LinkOverlay>
            </Button> */}
          </Flex>
        </CardHeader>
        <CardBody p={0}>
          <Box>
            {isLoading ? (
              <Flex>
                {new Array(4).fill(0).map((_, index) => {
                  return (
                    <Skeleton key={index} width="75px" height="17px" mr={3} />
                  );
                })}
              </Flex>
            ) : skills && skills.length > 0 ? (
              skills.map((skill, index) => {
                return (
                  <Badge
                    as="span"
                    key={index}
                    bg="blackAlpha.100"
                    py={1}
                    px={3}
                    mr={4}
                    mb={4}
                    borderRadius="full"
                    fontWeight="semibold">
                    {skill}
                  </Badge>
                );
              })
            ) : (
              <Text mb={3}>No skills added yet!</Text>
            )}
          </Box>
        </CardBody>
      </Card>
    </>
  );
};

// const ProfileJobCard = (jobRole, jobDescription) => {
//   jobRole = "Account Manager";
//   jobDescription = "Test Description";
//   return (
//     <Card
//       variant="elevated"
//       overflow="hidden"
//       borderRadius="25px"
//       px={14}
//       py={5}>
//       <CardHeader p={0} fontWeight="semibold" mb={5}>
//         <Text fontSize="xl">Current Role - {jobRole}</Text>
//       </CardHeader>
//       <CardBody p={0} mb={5}>
//         <Box>
//           <Text>{jobDescription}</Text>
//         </Box>
//       </CardBody>
//     </Card>
//   );
// };

export { ProfileHeadCard, ProfileSkillCard };
