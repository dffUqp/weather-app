import { CircularProgress, Box } from '@mui/material';

const Loader = () => {
  return (
    <Box
      color="white"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
    >
      <CircularProgress color="inherit" />
    </Box>
  );
};

export default Loader;
