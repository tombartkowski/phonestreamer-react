import { Icon, Box, Button, Spinner } from '@chakra-ui/react';
import { FaUpload } from 'react-icons/fa';
import { EmptyState } from './EmptyState';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../../components/SectionHeader';
import { useApps } from './useApps';
import { AppListItem } from './AppListItem';

export const Dashboard = () => {
  const [apps, _error, isLoading] = useApps();
  const appItems = apps?.map(app => <AppListItem key={app.id} app={app} />);

  return (
    <Box mt="10">
      <SectionHeader title="Uploaded apps">
        <Link to="/upload">
          <Button
            as="span"
            colorScheme="cyan"
            leftIcon={<Icon as={FaUpload} marginEnd="0.5" w="3.5" h="3.5" />}
          >
            Upload app
          </Button>
        </Link>
      </SectionHeader>

      <Box py="3" display={apps ? 'block' : 'flex'} bg="gray.766" rounded="2xl">
        {isLoading && (
          <Spinner
            mt="4"
            mb="24"
            speed="0.65s"
            thickness="4px"
            mx="auto"
            emptyColor="gray.700"
            color="blue.500"
            size="lg"
          />
        )}
        {apps?.length === 0 && !isLoading && <EmptyState />}
        {!!apps && appItems}
      </Box>
    </Box>
  );
};
