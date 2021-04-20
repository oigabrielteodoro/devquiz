import React from 'react';

import Svg, { G, Circle } from 'react-native-svg';

import colors from '~/styles/colors';

import { Container, CurrentProgressText } from './styles';

interface CircularProgressProps {
  size?: number;
  progress?: number;
  borderWidth?: number;
}

const CircularProgress = ({ size = 88, borderWidth = 9, progress = 0 }: CircularProgressProps) => {
  const center = size / 2;
  const radius = size / 2 - borderWidth / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <Container>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle stroke="#E1E5E3" cx={center} cy={center} r={radius} strokeWidth={borderWidth} />
          <Circle
            stroke={colors.green}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={borderWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (circumference * progress) / 100}
          />
        </G>
      </Svg>

      <CurrentProgressText>{progress}%</CurrentProgressText>
    </Container>
  );
};

export default CircularProgress;
