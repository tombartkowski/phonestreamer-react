import {
  VStack,
  Heading,
  Code,
  Box,
  Divider,
  Icon,
  Button,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { Link, Route, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { IOSInstruction } from './IOSInstruction';
import { SelectPlatform } from './SelectPlatform';
import { UploadAppFile } from './UploadAppFile';
import { UploadSummary } from './UploadSummary';
import { Breadcrumbs } from './Breadcrumbs';
import { FaArrowRight, FaFolder, FaUpload } from 'react-icons/fa';
import { HiFolderAdd } from 'react-icons/hi';
import { RiFolderTransferFill, RiFolderTransferLine } from 'react-icons/ri';

enum UploadStep {
  PlatformSelection,
  IOInstructions,
  UploadFile,
  UploadSummary,
}

const routes = [
  {
    path: '/upload',
    exact: true,
    name: 'Upload app | Platform',
    Component: SelectPlatform,
  },
  {
    path: '/upload/ios',
    exact: true,
    name: 'Upload app | iOS instruction',
    Component: IOSInstruction,
  },
  {
    path: '/upload/file',
    exact: true,
    name: 'Upload app | Select file',
    Component: UploadAppFile,
  },
  {
    path: '/upload/summary',
    exact: false,
    name: 'Upload app | Summary',
    Component: UploadSummary,
  },
];

export const UploadApp = () => {
  const location = useLocation();

  const stepForPath = (path: string) => {
    switch (true) {
      case ['/upload', '/upload/'].includes(path):
        return UploadStep.PlatformSelection;
      case ['/upload/file', '/upload/file/'].includes(path):
        return UploadStep.UploadFile;
      case ['/upload/ios', '/upload/ios/'].includes(path):
        return UploadStep.IOInstructions;
      case path.startsWith('/upload/summary'):
        return UploadStep.UploadSummary;
      default:
        return UploadStep.IOInstructions;
    }
  };

  const titleForPath = (path: string) => {
    const currentStep = stepForPath(path);
    switch (currentStep) {
      case UploadStep.PlatformSelection:
        return 'Where do you want to test your app?';
      case UploadStep.UploadFile:
        return (
          <>
            Upload the{' '}
            <Code mx={1} fontSize={24}>
              .zip
            </Code>{' '}
            file with your app.
          </>
        );
      // return 'Upload the zip file with your app.';
      case UploadStep.UploadSummary:
        return <></>;
      case UploadStep.IOInstructions:
        return (
          <>
            Let's get your{' '}
            <Code colorScheme="blue" mx={2} fontSize={32}>
              app
            </Code>{' '}
            ready.
          </>
        );
      default:
        return '';
    }
  };

  return (
    <Box maxW="900px" mx="auto" pb="64" px="4">
      <Divider mt="5" mb="5" borderColor="gray.600" />
      <Flex>
        <Breadcrumbs />
        <Spacer />
        {location.pathname.includes('/upload/file') ||
          location.pathname.includes('/upload/summary') || (
            <Link to="/upload/file">
              <Button
                mt="-2"
                as="span"
                leftIcon={
                  <Icon as={RiFolderTransferLine} marginEnd="0.5" w="5" h="5" />
                }
              >
                Skip to file upload
              </Button>
            </Link>
          )}
      </Flex>
      <VStack spacing={6} align="left">
        <Heading fontSize="1.7rem" textAlign="left">
          {titleForPath(location.pathname)}
        </Heading>
        {routes.map(({ path, Component, exact }) => (
          <Route key={path} exact={exact} path={path}>
            {({ match }) => (
              <CSSTransition
                unmountOnExit
                in={match != null}
                timeout={250}
                classNames="fade"
              >
                <div className="fade">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </VStack>
    </Box>
  );
};
