import {
  Alert,
  Icon,
  AlertIcon,
  Skeleton,
  Box,
  Center,
  Text,
  Image,
  Heading,
  VStack,
  HStack,
  Button,
  Stack,
  CloseButton,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaWrench, FaShare } from 'react-icons/fa';
import { GoVersions } from 'react-icons/go';
import { useLocation } from 'react-router-dom';
import SuperEllipse, { Preset } from 'react-superellipse';
import { App } from '../../../entities/app';

export const UploadSummary = () => {
  const location = useLocation();
  const [app, setApp] = useState<App | null>(null);
  const [alerVisible, setAlertVisible] = useState(true);
  useEffect(() => {
    const appId = location.pathname.split('/').slice(-1)[0];
    fetch('http://localhost:3030/apps/' + appId)
      .then(response => {
        return response.json();
      })
      .then(json => {
        setApp(json);
      });

    return () => {};
  }, [location, setApp]);

  return (
    <Box transform="translate(0, -40px)">
      {alerVisible && (
        <Alert
          status="success"
          maxW="xl"
          mb="20"
          mx="auto"
          variant="subtle"
          rounded="lg"
        >
          <AlertIcon />
          App uploaded successfully!
          <CloseButton
            onClick={() => setAlertVisible(false)}
            position="absolute"
            right="8px"
            top="8px"
          />
        </Alert>
      )}

      <Center mt="64px">
        <VStack
          width="500px"
          shadow="2xl"
          rounded="2xl"
          pb={9}
          position="relative"
          bg="gray.733"
          spacing="0"
        >
          <SuperEllipse
            r1={Preset.iOS.r1}
            r2={Preset.iOS.r2}
            style={{
              zIndex: 1,
              top: -40,
              position: 'absolute',
              width: 80,
              height: 80,
              backgroundColor: '#272F3F',
            }}
          />

          <SuperEllipse
            r1={Preset.iOS.r1}
            r2={Preset.iOS.r2}
            style={{
              zIndex: 2,
              position: 'absolute',
              top: -32,
              width: 64,
              height: 64,
              backgroundColor: '#4A5568',
            }}
          >
            <Image src={app?.iconUrl} alt="App Icon" />
          </SuperEllipse>

          <Box pt="44px" pb={1}>
            <Skeleton
              isLoaded={app != null}
              rounded="md"
              startColor="gray.666"
              endColor="gray.600"
            >
              <Heading>{app?.altName || 'App Name'}</Heading>
            </Skeleton>
          </Box>
          <Text fontSize="15px" fontWeight="medium" textColor="gray.400">
            <Skeleton
              isLoaded={app != null}
              rounded="md"
              startColor="gray.666"
              endColor="gray.600"
            >
              {app?.bundleIdentifier || 'com.bundle.identifier'}
            </Skeleton>
          </Text>
          <Box pt={4}>
            <Skeleton
              isLoaded={app != null}
              rounded="md"
              startColor="gray.666"
              endColor="gray.600"
            >
              <HStack fontSize="sm" textColor="blue.300" spacing="24px">
                <HStack spacing="4px">
                  <Icon as={GoVersions} pt="1px" w="18px" h="18px" />
                  <Text>
                    Version <strong>{app?.version}</strong>
                  </Text>
                </HStack>
                <HStack spacing="4px">
                  <Icon as={FaWrench} pt="2px" w="15px" h="15px" />
                  <Text>
                    Build no. <strong>{app?.buildNumber}</strong>
                  </Text>
                </HStack>
              </HStack>
            </Skeleton>
          </Box>
          <Box pt={8}>
            <Skeleton
              isLoaded={app != null}
              rounded="md"
              startColor="gray.666"
              endColor="gray.600"
            >
              <Stack direction="row" spacing={4} align="center">
                <Button w="48" size="lg" leftIcon={<Icon as={FaShare} />}>
                  Share
                </Button>
                <Button fontWeight="semibold" w="48" size="lg" colorScheme="cyan">
                  Start Testing
                </Button>
              </Stack>
            </Skeleton>
          </Box>
        </VStack>
      </Center>
    </Box>
  );
};
