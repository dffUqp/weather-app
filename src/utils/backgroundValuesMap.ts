import type { TDetails, TColorValue } from 'src/ts/extraTypes';

type IBackgroundValuesMap = {
  [key in TDetails | 'default']: TColorValue[];
};

const backgroundValuesMap: IBackgroundValuesMap = {
  Clear: [
    { r: 0, g: 151, b: 167 },
    { r: 33, g: 150, b: 243 },
  ],
  Clouds: [
    { r: 61, g: 122, b: 129 },
    { r: 130, g: 165, b: 193 },
  ],
  Rain: [
    { r: 50, g: 73, b: 136 },
    { r: 19, g: 105, b: 173 },
  ],
  Snow: [
    { r: 78, g: 157, b: 221 },
    { r: 90, g: 179, b: 251 },
  ],
  default: [
    { r: 0, g: 151, b: 167 },
    { r: 33, g: 150, b: 243 },
  ],
};

export default backgroundValuesMap;
