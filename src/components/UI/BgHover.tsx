import { styled } from '@mui/material/styles';

const BgHover = styled('div')(() => ({
  position: 'absolute',
  opacity: '0',
  top: 0,
  borderRadius: '4px',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(156, 157, 157, 0.25)',
  '&:hover': {
    opacity: '1',
    '@media (hover: none)': {
      opacity: 0,
    },
  },
  transition: 'all 0.2s',
}));

export default BgHover;
