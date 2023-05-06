import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
const toLocalTime = (sec: number, timezone: number, format = 'hh:mm a') =>
  dayjs
    .unix(sec)
    .utcOffset(timezone === 0 ? timezone : timezone / 60)
    .format(format);

export default toLocalTime;
