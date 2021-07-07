import { Tabs, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AccountTab } from './AccountTab';
import { Billing } from './Billing';
import { Settings } from './Settings';
import { Usage } from './Usage';

export const AccountTabs = () => {
  const location = useLocation();

  const [tabIndex, setTabIndex] = useState(0);
  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  useEffect(() => {
    const currentPath = location.pathname;
    let initialIndex = 0;
    switch (currentPath) {
      case '/account/settings':
        initialIndex = 0;
        break;
      case '/account/billing':
        initialIndex = 1;
        break;
      case '/account/usage':
        initialIndex = 2;
        break;
      default:
        break;
    }
    setTabIndex(initialIndex);
  }, [location]);
  return (
    <Tabs index={tabIndex} onChange={handleTabsChange} isLazy={true}>
      <TabList>
        <AccountTab title="Settings" path="/account/settings" />
        <AccountTab title="Billing" path="/account/billing" />
        <AccountTab title="Usage" path="/account/usage" />
      </TabList>

      <TabPanels>
        <TabPanel px="0">
          <Settings />
        </TabPanel>
        <TabPanel px="0">
          <Billing />
        </TabPanel>
        <TabPanel px="0">
          <Usage />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
