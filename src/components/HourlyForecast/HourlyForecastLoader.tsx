import { Paper } from '@mui/material';

const HourlyForecastLoader = () => {
  return (
    <>
      {[...new Array(8)].map((_, index) => (
        <Paper
          sx={{
            width: '100px',
            height: '105px',
            background: 'transparent',
            textAlign: 'center',
            p: '10px',
          }}
          key={index}
        />
      ))}
    </>
  );
};

export default HourlyForecastLoader;
