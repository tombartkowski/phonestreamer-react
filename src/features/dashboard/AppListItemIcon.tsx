import { Image } from '@chakra-ui/react';
import { FC } from 'react';
import SuperEllipse, { Preset } from 'react-superellipse';

type AppListItemIconProps = {
  iconUrl: string;
};

export const AppListItemIcon: FC<AppListItemIconProps> = ({ iconUrl }) => {
  return (
    <SuperEllipse
      r1={Preset.iOS.r1}
      r2={Preset.iOS.r2}
      style={{
        width: 52,
        height: 52,
        backgroundColor: '#4A5568',
      }}
    >
      <Image src={iconUrl} alt="App Icon" />
    </SuperEllipse>
  );
};
