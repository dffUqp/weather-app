import React from 'react';
import { styled } from '@mui/material/styles';
import CachedIcon from '@mui/icons-material/Cached';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { addCards, deleteCards } from 'src/store/slices/weatherCardsSlice';
import { isFavoriteSelector } from 'src/store/selectors';

const BgHoverContainer = styled('div')(() => ({
  position: 'relative',
}));

const BgHoverActions = styled('div')(({ theme }) => ({
  position: 'absolute',
  opacity: '0',
  top: 0,
  borderRadius: '4px',
  width: '100%',
  height: '100%',
  zIndex: 10,
  backgroundColor: 'rgba(156, 157, 157, 0.25)',
  transition: 'all 0.2s',
  '&:hover': {
    opacity: '1',
  },
  [theme.breakpoints.down('md')]: {
    opacity: '1',
    backgroundColor: 'transparent',
  },
}));

const BgHover = ({ lat, lon, refetch, name, children }: any) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isFavorite = useAppSelector((state) =>
    isFavoriteSelector(state, lat, lon)
  );

  const handleFavorite = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();

    if (isFavorite) {
      dispatch(deleteCards({ lat, lon }));
      return;
    }
    dispatch(addCards({ lat, lon }));
  };

  const refetchCurrentCity = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    refetch();
  };

  return (
    <BgHoverContainer
      onClick={() => navigate(`/${name}`, { state: { lat, lon } })}
    >
      <BgHoverActions>
        <IconButton
          disableTouchRipple
          sx={{ position: 'absolute', left: '0' }}
          onClick={handleFavorite}
        >
          {isFavorite ? <BookmarkIcon /> : <BookmarkBorderIcon />}
        </IconButton>
        <IconButton
          disableTouchRipple
          sx={{ position: 'absolute', right: '0' }}
          onClick={refetchCurrentCity}
        >
          <CachedIcon />
        </IconButton>
      </BgHoverActions>
      {children}
    </BgHoverContainer>
  );
};

export default BgHover;
