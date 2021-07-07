import { Tab } from '@chakra-ui/react';
import { FC } from 'react';
import { useHistory } from 'react-router-dom';

type AccountTabProps = {
  title: string;
  path: string;
};

export const AccountTab: FC<AccountTabProps> = ({ title, path }) => {
  const history = useHistory();
  const handleOnClick = () => {
    history.replace(path);
  };
  return (
    <Tab
      px="5"
      onClick={handleOnClick}
      fontSize="1rem"
      textColor="gray.450"
      fontWeight="medium"
      _selected={{ textColor: 'gray.100', borderColor: 'cyan.400' }}
    >
      {title}
    </Tab>
  );
};
