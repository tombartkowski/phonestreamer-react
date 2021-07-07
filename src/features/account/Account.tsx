import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import { SectionHeader } from '../../components/SectionHeader';
import { AccountTabs } from './AccountTabs';
import { Settings } from './Settings';

export const Account = () => {
  return (
    <Box mt="10">
      <SectionHeader title="Account" />

      <Box py="5" px="7" bg="gray.766" rounded="2xl">
        <AccountTabs />
      </Box>
    </Box>
  );
};
