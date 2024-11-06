import {StyleSheet, Text, View, StatusBar, Dimensions} from 'react-native';
import React from 'react';
import {
  Blur,
  Canvas,
  Circle,
  Group,
  RadialGradient,
  Rect,
} from '@shopify/react-native-skia';
import {BlurCard, CardHeight, CardWidth} from './BlurCard';
import {useDerivedValue, useSharedValue, withSpring, withTiming} from 'react-native-reanimated';

const {width: WindowWidth, height: WindowHeight} = Dimensions.get('window');

const SeeMore = () => {
  const progress = useSharedValue(0);

  return (
    <View
      style={styles.container}
      onTouchStart={() => {
        progress.value=withTiming(1, {duration:1000})
      }}
      onTouchEnd={() => {
        progress.value=withTiming(0, {duration:1000})
      }}>
      <StatusBar style="light" />
      <Canvas style={{flex: 1}}>
        <Rect x={0} y={0} width={WindowWidth} height={WindowHeight}>
          <RadialGradient
            c={{x: WindowWidth / 2, y: WindowHeight / 2}}
            r={WindowWidth / 2}
            colors={['violet', 'black']}
          />
          <Blur blur={100} />
        </Rect>
        {/* <Circle
          cx={WindowWidth / 2}
          cy={WindowHeight / 2}
          r={10}
          color={'red'}
        /> */}
        <Group
          transform={[
            {translateX: WindowWidth / 2 - CardWidth / 2},
            {
              translateY: WindowHeight / 2 - CardHeight / 2,
            },
          ]}>
          {new Array(5).fill(0).map((_, index) => {
            const rTransform=useDerivedValue(()=>{
              return[
                {
                  rotate: (-Math.PI / 2) * progress.value,
                },
                {
                  translateX: 25 * index * progress.value,
                },
                {
                  perspective: 10000,
                },
                {
                  rotateY: (Math.PI / 3) * progress.value,
                },
                {
                  rotate: (Math.PI / 4) * progress.value,
                },
              ]
            })
            return (
              <Group
                key={index}
                origin={{
                  x: CardWidth / 2,
                  y: CardHeight / 2,
                }}
                transform={rTransform}>
                <BlurCard progress={progress}/>
              </Group>
            );
          })}
        </Group>
      </Canvas>
    </View>
  );
};

export default SeeMore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
