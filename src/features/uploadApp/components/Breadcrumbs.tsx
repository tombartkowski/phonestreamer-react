import { Breadcrumb, Icon, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbEntry {
  path: string;
  name: string;
  availableNextPaths: string[];
}

const BreadcrumpEntries = [
  {
    path: '/',
    name: 'Dashboard',
    availableNextPaths: ['/upload', '/upload/ios', '/upload/file'],
  },
  {
    path: '/upload',
    name: 'Platform',
    availableNextPaths: ['/upload/ios', '/upload/file'],
  },
  {
    path: '/upload/ios',
    name: 'Instructions',
    availableNextPaths: ['/upload/file'],
  },
  {
    path: '/upload/file',
    name: 'File upload',
    availableNextPaths: [],
  },
];

export const Breadcrumbs = () => {
  const location = useLocation();
  const isLastChild = (path: string) => {
    return (
      location.pathname.endsWith(path) || location.pathname.endsWith(path + '/')
    );
  };
  const locationContains = (path: string) => {
    return (
      location.pathname.includes(path) || location.pathname.includes(path + '/')
    );
  };
  const breadcrumbs = BreadcrumpEntries.filter(
    entry =>
      entry.availableNextPaths.includes(location.pathname) || isLastChild(entry.path)
  ).map(entry => {
    const isCurrentPage = isLastChild(entry.path);
    return (
      <BreadcrumbItem
        key={entry.path}
        textColor={isCurrentPage ? 'cyan.300' : 'gray.433'}
        isCurrentPage={isCurrentPage}
      >
        <BreadcrumbLink
          _hover={{ textColor: isCurrentPage ? 'cyan.400' : 'white' }}
          as={Link}
          to={entry.path}
        >
          {entry.name}
        </BreadcrumbLink>
      </BreadcrumbItem>
    );
  });

  return (
    <Breadcrumb
      mb="5"
      fontWeight="medium"
      textColor="gray.433"
      spacing="8px"
      separator={<Icon as={FaChevronRight} h="3" w="3" color="gray.600" />}
    >
      {breadcrumbs}
    </Breadcrumb>
  );
};
