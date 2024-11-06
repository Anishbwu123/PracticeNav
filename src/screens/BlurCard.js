import {
    BackdropBlur,
    Group,
    Path,
    rect,
    rrect,
    Skia,
  } from '@shopify/react-native-skia';
  import React, {useMemo} from 'react';
  import {useDerivedValue} from 'react-native-reanimated';
  
  // Constants for card dimensions
  export const CardHeight = 200;
  export const CardWidth = 300;
  
  // BlurCard component (without type annotations)
  export const BlurCard = ({progress}) => {
    // Create clip path with useMemo to prevent unnecessary recalculations
    const clipPath = useMemo(() => {
      const skPath = Skia.Path.Make();
      skPath.addRRect(rrect(rect(0, 0, CardWidth, CardHeight), 20, 20));
      return skPath;
    }, []);
  
    // Derived value for blur
    const rBlur = useDerivedValue(() => {
      return 5 * progress.value;
    }, [progress]);
  
    return (
      <Group>
        {/* Path for the clipped background */}
        <Path path={clipPath} color={'rgba(255,255,255,0.15)'} />
        {/* Path for the stroke */}
        <Path path={clipPath} style={'stroke'} color={'rgba(255,255,255,0.85)'} />
        {/* BackdropBlur for applying blur effect */}
        <BackdropBlur blur={rBlur.value} clip={clipPath} />
      </Group>
    );
  };
  