import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
const toLocalTime = (secs: number, timezone: number, format = 'hh:mm a') =>
  dayjs
    .unix(secs)
    .utcOffset(timezone === 0 ? timezone : timezone / 60)
    .format(format);

export default toLocalTime;
