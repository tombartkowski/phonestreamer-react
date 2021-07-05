import { Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from './Link';

type BottomLinkProps = {
  questionText: string;
  linkText: string;
  href: string;
};

export const BottomLink: FC<BottomLinkProps> = ({
  questionText,
  linkText,
  href,
}) => {
  return (
    <Text textColor="gray.400" mt="6" pb="16" align="center" fontWeight="medium">
      {questionText}
      <Link marginStart="1.5" href={href}>
        {linkText}
      </Link>
    </Text>
  );
};
