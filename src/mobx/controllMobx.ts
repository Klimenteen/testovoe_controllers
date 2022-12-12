import { makeAutoObservable } from "mobx";

class ControlTextStore {
    currentText = "";
    constructor() {
        makeAutoObservable(this);
    }
    clearText() {
        this.currentText = "";
    }
    setHelloWorld() {
        this.currentText = "Hello world!";
    }
    setText(text: string) {
        this.currentText = text;
    }
}


export const textController = new ControlTextStore();
export const secondTextController = new ControlTextStore();
export default ControlTextStore 

