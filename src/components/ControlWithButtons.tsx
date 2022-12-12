import { useEffect, useState } from "react";
import { observer } from "mobx-react"
import ControlTextStore from '../mobx/controllMobx';
import './ControlWithButtonsStyle.scss'

type CallbackButtonAlign = "left" | "right";
interface CallbackButton {
    text: string;
    align: CallbackButtonAlign;
    callback: () => void;
}
interface ControlWithButtonsProps {
    buttons: CallbackButton[];
    textController:ControlTextStore;
}

const ControlWithButtons = observer(({ buttons,textController }: ControlWithButtonsProps) => {
    const [buttonsLeft, setButtonsLeft] = useState<CallbackButton[]>([]);
    const [buttonsRight, setButtonsRight] = useState<CallbackButton[]>([]);
    useEffect(() => {
        const leftArr:CallbackButton[] =[];
        const rightArr:CallbackButton[]=[];
        buttons.forEach((el) => {
            if (el.align === "left") {
                leftArr.push(el);
            } else {
                rightArr.push(el);
            }
        });

        setButtonsLeft(leftArr);
        setButtonsRight(rightArr);
    }, []);

    return (
        <div className="control__container">
            <div className="control__container_box">
                {buttonsLeft.map((el, i) => (
                    <button key={i} onClick={el.callback}>
                        {" "}
                        {el.text}
                    </button>
                ))}
            </div>
            <div className="control__container_box">
                    <textarea value={textController.currentText} onChange={(e)=>textController.setText(e.target.value)} /> 
            </div>
            <div className="control__container_box">
                {buttonsRight.map((el, i) => (
                    <button key={i} onClick={el.callback}>
                        {" "}
                        {el.text}
                    </button>
                ))}
            </div>
        </div>
    );
});
export default ControlWithButtons;
