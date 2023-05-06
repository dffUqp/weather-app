import { TextField, Autocomplete } from '@mui/material';
import debounce from 'lodash.debounce';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import WeatherService from 'src/services/weatherServices';
import { TWeatherCoord } from 'src/ts/extraTypes';

type TAutocompleteOptions =
  | ({
      label: string;
    } & TWeatherCoord)
  | null;

export default function CitySearch() {
  const [query, setQuery] = useState<string>('');
  const navigate = useNavigate();
  const [currentOption, setCurrentOption] =
    useState<TAutocompleteOptions>(null);

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

    setCurrentOption(value);
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
      value={currentOption}
      filterOptions={(x) => x}
      onChange={changeValue}
      onInputChange={debounce(changeHandler, 500)}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          placeholder="Write something"
          size="small"
          hiddenLabel
        />
      )}
    />
  );
}
