import type { TColorValue } from 'src/ts/extraTypes';

type TGradientAnimationArg = {
  updateColor: (color: string) => void;
  currentGradient: TColorValue[];
  newGradient: TColorValue[];
};

const gradientAnimation = ({
  currentGradient,
  updateColor,
  newGradient,
}: TGradientAnimationArg) => {
  const gradientStopOne = [
    { pct: 0, color: currentGradient[0] },
    { pct: 100, color: newGradient[0] },
  ];
  const gradientStopTwo = [
    { pct: 0, color: currentGradient[1] },
    { pct: 100, color: newGradient[1] },
  ];

  const getColor = (
    pct: number,
    colorSet: { pct: number; color: TColorValue }[]
  ) => {
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < colorSet.length - 1; i++) {
      if (pct < colorSet[i].pct) {
        break;
      }
    }
    const lower = colorSet[0];
    const upper = colorSet[1];
    const range = upper.pct - lower.pct;
    const rangePct = (pct - lower.pct) / range;
    const pctLower = 1 - rangePct;
    const pctUpper = rangePct;
    const color = {
      r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
      g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
      b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper),
    };
    return `rgb(${color.r}, ${color.g}, ${color.b})`;
  };

  const transitionTime = 1000;
  const angle = 90;
  const animationDirection = 'forwards';
  let intervalFrame: any;
  let currentPct = 0;
  let elapsed = 0;

  if (intervalFrame === undefined) {
    intervalFrame = setInterval(() => {
      const time = transitionTime / 1000;
      const numberOfFrames = time * 60;

      if (animationDirection === 'forwards') {
        elapsed += 1;
        currentPct = Math.min(elapsed / numberOfFrames, 1) * 100;
      } else {
        elapsed -= 1;
        currentPct = Math.max(elapsed / numberOfFrames, 0) * 100;
      }

      const colorOne = getColor(currentPct, gradientStopOne);
      const colorTwo = getColor(currentPct, gradientStopTwo);

      const generateGradient = `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;

      updateColor(generateGradient);

      if (currentPct === 100 || currentPct === 0) {
        clearInterval(intervalFrame);
        intervalFrame = undefined;
      }
    }, 16.667); // 60 frames per second
  }
};

export default gradientAnimation;
