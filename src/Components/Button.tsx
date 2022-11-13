import React from "react";
type TypeButton={
    name:string
    callBack:()=>void
}

export const Button=(props:TypeButton)=>{
    const onClickHandler=()=>{
        props.callBack()}
    return(
        <button onClick={onClickHandler}>{props.name}</button>

    )
}

// type ButtonType = {
//     name: string
//     callBack: () => void
// }
// export const Button = (props: ButtonType) => {
//     const onClickHandler = () => {
//         props.callBack()
//     }
//     return (
//         <button onClick={onClickHandler}>{props.name}</button>
//     )
// }