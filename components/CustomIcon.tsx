import React from 'react';
import ShelfSvg from '../assets/icons/bookshelf.svg';
import RoutineSvg from '../assets/icons/face-woman-shimmer-outline.svg';
import HomeSvg from '../assets/icons/home-sharp.svg';
import ProfileSvg from '../assets/icons/person-circle-outline.svg';
import SearchSvg from '../assets/icons/search-sharp.svg';
import BackSvg from '../assets/icons/arrow-left-drop-circle-outline.svg';
import {SvgProps} from 'react-native-svg';
import {ViewStyle} from 'react-native';

export enum IconName {
  Home = 'Home',
  Search = 'Search',
  Routine = 'Routine',
  Shelf = 'Shelf',
  Profile = 'Profile',
  Back = 'Back',
}

interface StyledIconProps extends SvgProps {
  color?: string;
  name: IconName;
}

export const StyledIcon = ({name, color, ...props}: StyledIconProps) => {
  const iconMap = {
    [IconName.Home]: HomeSvg,
    [IconName.Search]: SearchSvg,
    [IconName.Routine]: RoutineSvg,
    [IconName.Shelf]: ShelfSvg,
    [IconName.Profile]: ProfileSvg,
    [IconName.Back]: BackSvg,
  };

  const IconComponent = iconMap[name];
  return (
    <IconComponent
      {...props}
      fill={color}
      style={{color: color} as ViewStyle}
    />
  );
};
