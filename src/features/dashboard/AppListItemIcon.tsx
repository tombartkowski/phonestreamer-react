import { Image } from '@chakra-ui/react';
import { FC, Suspense } from 'react';
import SuperEllipse, { Preset } from 'react-superellipse';
import { useImage } from 'react-image';

type AppListItemIconProps = {
  iconUrl: string;
};

export const AppListItemIcon: FC<AppListItemIconProps> = ({ iconUrl }) => {
  const { src } = useImage({
    srcList: iconUrl,
    useSuspense: false,
  });

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
      <img src={src} alt="App Icon" />
    </SuperEllipse>
  );
};
