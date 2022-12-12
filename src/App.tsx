import React from "react";
import "./App.scss";
import ControlAutoComplete from "./components/ControlAutoComplete";
import ControlWithButtons from "./components/ControlWithButtons";
import { textController, secondTextController } from './mobx/controllMobx';
import {countryHintsController, secondCountryHintsController} from './mobx/autoCompleteControllMobx';

function App() {
    return (
        <div className="app__container">
            <ControlWithButtons
            textController={textController}
                buttons={[
                    { text: "очистить текст", align: "right", callback: () =>textController.clearText() },
                    { text: "привет мир!", align: "right", callback: () => textController.setHelloWorld() }
                ]}
            />
            <ControlWithButtons
            textController={secondTextController}
                buttons={[
                    { text: "alert c текущим текстом", align: "left", callback: () =>{
                        if (secondTextController.currentText.length) {
                            alert(secondTextController.currentText)
                        }
                    } },
                    { text: "alert, если в инпуте  - число", align: "right", callback: () => {
                        //делаем сплит запятой, потому что в рзаных странах форматы отличаются
                        if ( secondTextController.currentText.trim() !=='' && !isNaN (+secondTextController.currentText.split(',').join('.'))) { 

                            alert(secondTextController.currentText)
                        }
                    } }
                ]}
            />
            <div className="autocomplete">
            <ControlAutoComplete 
            limit={3}
            countryHintsController={countryHintsController}
            />
            <ControlAutoComplete 
            limit={10}
            countryHintsController={secondCountryHintsController}
            />
            </div>
        </div>
    );
}

export default App;
