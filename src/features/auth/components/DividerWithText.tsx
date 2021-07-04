import { Box, Divider, Flex, FlexProps, Text } from '@chakra-ui/react';

export const DividerWithText = (props: FlexProps) => {
  const { children, ...flexProps } = props;
  return (
    <Flex align="center" color="gray.300" {...flexProps}>
      <Box flex="1">
        <Divider borderColor="gray.500" />
      </Box>
      <Text as="span" px="3" color="gray.450" fontWeight="medium">
        {children}
      </Text>
      <Box flex="1">
        <Divider borderColor="gray.500" />
      </Box>
    </Flex>
  );
};
