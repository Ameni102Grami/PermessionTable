import React from 'react';
import { BoxProps } from '@mui/material';
import { IconifyProps } from './types';
interface Props extends BoxProps {
    icon: IconifyProps;
}
declare const Iconify: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<SVGElement>>;
export default Iconify;
