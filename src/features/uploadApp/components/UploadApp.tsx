import { VStack, Heading, Code, Progress } from '@chakra-ui/react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { IOSBuildQuestion } from './IOSBuildQuestion';
import { IOSInstruction } from './IOSInstruction';
import { SelectPlatform } from './SelectPlatform';
import { UploadAppFile } from './UploadAppFile';
import { UploadSummary } from './UploadSummary';

enum UploadStep {
  PlatformSelection,
  IOSBuildQuestion,
  IOInstructions,
  UploadFile,
  UploadSummary,
}

export const UploadApp = () => {
  const location = useLocation();

  const stepForPath = (path: string) => {
    switch (true) {
      case ['/upload', '/upload/'].includes(path):
        return UploadStep.PlatformSelection;
      case ['/upload/file', '/upload/file/'].includes(path):
        return UploadStep.UploadFile;
      case ['/upload/ios', '/upload/ios/'].includes(path):
        return UploadStep.IOSBuildQuestion;
      case path.startsWith('/upload/summary'):
        return UploadStep.UploadSummary;
      case ['/upload/ios/instructions', '/upload/ios/instructions/'].includes(path):
        return UploadStep.IOInstructions;
      default:
        return UploadStep.IOInstructions;
    }
  };

  const titleForPath = (path: string) => {
    const currentStep = stepForPath(path);
    switch (currentStep) {
      case UploadStep.PlatformSelection:
        return 'Where do you want to test your app?';
      case UploadStep.IOSBuildQuestion:
        return 'Do you have a build ready?';
      case UploadStep.UploadFile:
        return 'Upload your app.';
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

  const progressForPath = (path: string) => {
    const currentStep = stepForPath(path);
    switch (currentStep) {
      case UploadStep.PlatformSelection:
        return 20;
      case UploadStep.IOSBuildQuestion:
        return 40;
      case UploadStep.IOInstructions:
        return 60;
      case UploadStep.UploadFile:
        return 80;
      case UploadStep.UploadSummary:
        return 100;
      default:
        return 0;
    }
  };

  return (
    <>
      <Progress
        mb={10}
        colorScheme="teal"
        value={progressForPath(location.pathname)}
        rounded={3}
        size="sm"
      />
      <VStack spacing={6} align="left">
        <Heading size="lg" textAlign="left">
          {titleForPath(location.pathname)}
        </Heading>
        <TransitionGroup>
          <CSSTransition timeout={250} classNames="fade" key={location.key}>
            <Switch location={location}>
              <Route exact={true} path="/upload" component={SelectPlatform} />
              <Route exact={true} path="/upload/ios" component={IOSBuildQuestion} />
              <Route exact={true} path="/upload/ios/instructions" component={IOSInstruction} />
              <Route exact={true} path="/upload/file" component={UploadAppFile} />
              <Route exact={false} path="/upload/summary" component={UploadSummary} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </VStack>
    </>
  );
};
