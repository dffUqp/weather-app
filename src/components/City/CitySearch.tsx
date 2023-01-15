import { TextField, Autocomplete } from '@mui/material';
import debounce from 'lodash.debounce';
import { useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import WeatherService from '../../services/weatherServices';
import { TWeatherCoord } from '../../ts/extraTypes';

type TAutocompleteOptions =
  | ({
      label: string;
    } & TWeatherCoord)
  | null;

export default function CitySearch() {
  const [query, setQuery] = useState<string>('');
  const navigate = useNavigate();
  const [curentOption, setCurentOption] = useState<TAutocompleteOptions>(null);

  const { data } = useQuery(
    [`SearchCity`, query],
    () => WeatherService.searchCity({ q: query }),
    {
      enabled: query?.length > 3,
    }
  );

  const changeHandler = (
    event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    if (value.length > 20) {
      return;
    }

    setQuery(value);
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 500),
    []
  );

  const changeValue = (
    event: React.SyntheticEvent<Element, Event>,
    value: TAutocompleteOptions | string
  ) => {
    if (
      value == null ||
      event.type === 'keydown' ||
      typeof value === 'string'
    ) {
      return;
    }

    setCurentOption(value);
    navigate(`/${value.label}`, { state: { lat: value.lat, lon: value.lon } });
  };

  return (
    <Autocomplete
      fullWidth
      sx={{
        mt: '5px',
        mx: 'auto',
        maxWidth: '1000px',
        '& .MuiInputBase-root': {
          color: 'white',
        },
      }}
      freeSolo
      options={
        data?.map((value) => ({
          lat: value.lat,
          lon: value.lon,
          label: `${value.name}, ${value?.state ?? ''} ${value.country}`,
        })) ?? []
      }
      value={curentOption}
      filterOptions={(x) => x}
      onChange={changeValue}
      onInputChange={debouncedChangeHandler}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          placeholder="Writte something"
          size="small"
          hiddenLabel
        />
      )}
    />
  );
}
