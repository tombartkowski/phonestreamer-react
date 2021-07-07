import { Image, Text, Code, Box, Button, Kbd } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { InstructionCodeToCopy } from './InstructionCodeToCopy';
import { InstructionParagraph } from './InstructionParagraph';
import { InstructionSectionHeader } from './InstructionSectionHeader';
export const IOSInstruction = () => {
  return (
    <Box>
      <Box pt={4} mt={5}>
        <InstructionSectionHeader title="🏗️ Build for simulator." />
        <InstructionParagraph>
          Open up <b>Xcode</b> and select any simulator as a build target.
        </InstructionParagraph>
        <Image
          fit="contain"
          rounded="md"
          align="left"
          height="36px"
          src="/ios-instruction-1.png"
        />
        <Text fontSize="xs" mt={1.5} textColor="gray.500">
          Example of a xCode build target.
        </Text>
        <InstructionParagraph>
          Build and run the app to verify that it{' '}
          <Text as="i">Works on your Machine™.</Text>
        </InstructionParagraph>
      </Box>
      <Box mt={10}>
        <InstructionSectionHeader title="🔎 Locate the bundle." />
        <InstructionParagraph>
          In terminal, navigate to your app's <strong>DerviedData</strong> directory.
        </InstructionParagraph>
        <InstructionCodeToCopy code="cd ~/Library/Developer/Xcode/DerivedData/<your-app-name>*" />
        <Text fontSize="lg" pb={0.5} pt={2}>
          For an app named <strong>MyApp</strong> the command would be:
        </Text>
        <Code>cd ~/Library/Developer/Xcode/DerivedData/MyApp*</Code>
        <InstructionParagraph>
          Then go to the directory containing your simulator build.
        </InstructionParagraph>
        <InstructionCodeToCopy code="cd Build/Products/Debug-iphonesimulator" />
        <InstructionParagraph>
          Finally open the current directory in <strong>Finder</strong>. Your app wil
          be there as <Code>{'<your-app-name>'}.app</Code>. It can also
        </InstructionParagraph>
        <InstructionCodeToCopy code="open ." />
      </Box>
      <Box mt={10}>
        <InstructionSectionHeader title="📦 Zip it up." />
        <InstructionParagraph>
          The last step is zipping just the <Code mx={1}>.app</Code> file. Simply{' '}
          <Kbd>Right Click</Kbd> the <Code mx={1}>.app</Code> file and select the{' '}
          <Code mx={1}>Compress {'<app-name>.app'}</Code> option.
        </InstructionParagraph>
        <Image
          fit="contain"
          rounded="md"
          mt={2}
          align="left"
          height="64px"
          src="/ios-instruction-2.png"
        />
        <Text fontSize="xs" mt={1.5} textColor="gray.500">
          Example of compressing the <Code fontSize="xx-small">.app</Code> file.
        </Text>
        <InstructionParagraph>
          After doing so a <Code>.zip</Code> file will appear. This is the file to
          upload to <strong>PhoneStreamer</strong>.
        </InstructionParagraph>
      </Box>
      <Link to="/upload/file">
        <Button w="52" mt="6" as="span" size="lg" colorScheme="teal">
          Lets upload!
        </Button>
      </Link>
    </Box>
  );
};
