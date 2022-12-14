import React from "react";
import s from "./Title.module.scss"

export const Title=(props:{title:string})=> {
    const {title}=props
    return (
        <div className={s.title}>
            <h2>{title}</h2>
        </div>
    );
}