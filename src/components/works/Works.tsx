import React from  'react';
import s from "./Works.module.scss"
import ItemWork from "./ItemWork";
import "../../App.css"
import {Title} from "../../common/components/title/Title";
import reactImg from "../../assets/svg/React.png"
import jsImg from "../../assets/svg/Js.png"
export type ImgType = { backgroundImage: string}


function Works() {
    const todolist:ImgType = {
        backgroundImage: `url(${reactImg})`
    }
    const js:ImgType = {
        backgroundImage: `url(${jsImg})`
    }
    return (
        <div className={`${s.wrapperWorks} + wrapper`} id={"myWorks"}>
            <div className={`${s.works} + container`}>
                <Title title={"My works"}/>
                <div className={s.description}>
                    <ItemWork title={"React"}
                              description={"Made AP wietvdfvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvh React"}
                              style={todolist}/>
                    <ItemWork title={"JS"}
                              description={"Made jkuttttttttttttttukyttttttttttttttttttttj,yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyttttttttttttttttttttttttttttttttttttAP with React"}
                              style={js}/>
                    <ItemWork title={"JS"}
                              description={"Made jkuttttttttttttttukyttttttttttttttttttttj,yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyttttttttttttttttttttttttttttttttttttAP with React"}
                              style={js}/>

                </div>
            </div>
        </div>

    );
}

export default Works;