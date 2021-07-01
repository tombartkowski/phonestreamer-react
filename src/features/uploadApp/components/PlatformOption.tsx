import { Square, VStack, Icon, Text, Badge } from '@chakra-ui/react';
import { FC } from 'react';
import { DiApple, DiAndroid } from 'react-icons/di';

export enum PlatformType {
  IOS = 'iOS',
  ANDROID = 'Android',
}

type PlatformOptionProps = {
  platformType: PlatformType;
};

export const PlatformOption: FC<PlatformOptionProps> = ({ platformType }) => {
  return (
    <Square
      textColor={platformType === PlatformType.IOS ? 'gray.200' : 'gray.500'}
      shadow="2xl"
      transition="background-color 0.1s ease-out"
      position="relative"
      _hover={{ bg: 'gray.700', cursor: 'pointer' }}
      bg="gray.733"
      rounded="2xl"
      size="140px"
    >
      <VStack spacing={2}>
        <Icon as={platformType === PlatformType.IOS ? DiApple : DiAndroid} w={14} h={14} />
        <Text fontWeight="medium" fontSize={18}>
          {platformType}
        </Text>
      </VStack>
      {platformType === PlatformType.IOS || (
        <Badge
          variant="solid"
          bg="yellow.500"
          textColor="white"
          fontSize={10}
          rounded={3}
          position="absolute"
          top={3}
          right={3}
          colorScheme="yellow"
        >
          Coming Soon
        </Badge>
      )}
    </Square>
  );
};
