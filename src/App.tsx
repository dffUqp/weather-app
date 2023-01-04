import { Box, Container, Grid, Paper, TextField } from '@mui/material';
import Button from '@mui/material/Button';

function App() {
  return (
    <Container maxWidth="lg">
      <TextField
        fullWidth
        hiddenLabel
        variant="outlined"
        size="small"
        sx={{
          mt: '5px',
          // marginX: 'auto',
          // width: '1000px',
          '& .MuiInputBase-root': {
            // backgroundColor: '',
            color: 'white',
          },
        }}
        id="filled-basic"
        placeholder="Writte something"
      />
      <Box
        sx={{
          maxWidth: 1145,
          width: '100%',
          minHeight: 650,
          height: 'auto',
          marginY: '25px',
          marginX: 'auto',
          p: '12px',
          border: '1px solid black',
        }}
      >
        <Grid container rowSpacing={2} columnSpacing={{ xs: 3, md: 6 }}>
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Paper
                sx={{
                  backgroundColor: 'transparent',
                  height: '300px',
                }}
              >
                <Button variant="contained">Click me</Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
