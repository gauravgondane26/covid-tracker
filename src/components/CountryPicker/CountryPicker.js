import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountryData } from "../../api";
import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      setCountryData(await fetchCountryData());
    };
    fetchCountries();
  }, [setCountryData]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => {
          handleCountryChange(e.target.value);
        }}
      >
        <option value="">Global</option>
        {countryData.map((country) => (
          <option value={country} key={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
