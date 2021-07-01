import { HStack, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { PlatformOption, PlatformType } from './PlatformOption';

export const SelectPlatform = () => {
  return (
    <HStack spacing={5}>
      <LinkBox>
        <Link to="upload/ios">
          <LinkOverlay>
            <PlatformOption platformType={PlatformType.IOS} />
          </LinkOverlay>
        </Link>
      </LinkBox>
      <PlatformOption platformType={PlatformType.ANDROID} />
    </HStack>
  );
};
