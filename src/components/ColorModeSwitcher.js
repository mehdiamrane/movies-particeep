import React from 'react';
import {
  Tooltip,
  useColorMode,
  useColorModeValue as mode,
  IconButton,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = mode('dark', 'light');
  const SwitchIcon = mode(FaSun, FaMoon);

  return (
    <Tooltip
      hasArrow
      label={`Switch to ${text} mode`}
      aria-label={`Switch to ${text} mode`}
    >
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${text} mode`}
        variant="solid"
        color="current"
        marginLeft="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        {...props}
      />
    </Tooltip>
  );
};

export default ColorModeSwitcher;
