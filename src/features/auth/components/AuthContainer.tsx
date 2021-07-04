import React, { FC } from 'react';
import { Card } from './Card';
import { GradientContainer } from './GradientContainer';
import { Logo } from './Logo';

type AuthContainerProps = {
  topComponent?: React.ReactNode;
};

export const AuthContainer: FC<AuthContainerProps> = ({
  topComponent,
  children,
}) => {
  return (
    <GradientContainer>
      {topComponent}
      <Card>
        <Logo />
        {children}
      </Card>
    </GradientContainer>
  );
};
