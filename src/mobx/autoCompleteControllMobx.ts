import { makeAutoObservable } from "mobx";
import {  CountryInfo } from "../api/apiService";

class CountryHintsStore {
    constructor() {
        makeAutoObservable(this);
    }
    hints: CountryInfo[]=[];
    
    setHints(hintsArr: CountryInfo[]) {
        this.hints = hintsArr;
    }
    

}

export const countryHintsController = new CountryHintsStore();
export const secondCountryHintsController = new CountryHintsStore();
export default CountryHintsStore