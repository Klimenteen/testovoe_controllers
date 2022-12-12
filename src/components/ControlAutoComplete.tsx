import React, { useRef } from "react";
import { getCountryByName } from "../api/apiService";
import CountryHintsStore from "../mobx/autoCompleteControllMobx";
import './ControlAutoCompleteStyle.scss'

import HintsContainer from "./HintsContainer";

const ControlAutoComplete = ({ limit, countryHintsController }: { limit: number, countryHintsController:CountryHintsStore }) => {
    const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
    const getHints = (searchValue: string) => {
        clearTimeout(timeout.current as ReturnType<typeof setTimeout>);
        timeout.current = setTimeout(async () => {
            const response = await getCountryByName(searchValue);
            countryHintsController.setHints(response.slice(0, limit))
        }, 300);
    };
    return (
        <div className="autocomplete__container">
            <input
                type="search"
                placeholder="Контрол-автокомплит"
                onChange={(e) => {
                    getHints(e.target.value);
                }}
            />
            <HintsContainer countryHintsController={countryHintsController}/>
        </div>
    );
};

export default ControlAutoComplete;
