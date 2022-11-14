import React, {MouseEvent, useState} from 'react';
import './App.css';
import {Button} from "./Components/Button";

// function App() {
//     const Button1Foo=(subscriber:string,age:number)=>{
// console.log(subscriber,age)
//     }
//     const Button2Foo=(subscriber:string)=>{
//         console.log(subscriber)
//     }
// const stupid=()=>{
//     console.log("stupid")
// }
// const bobTell=(text:string)=>{
//         console.log(text)

// }
// const MyFirstSubscriber= (event: MouseEvent<HTMLButtonElement>)=>{
//     console.log("Hello I'm Dany")
// }
// const MySecondSubscriber= (event:MouseEvent<HTMLButtonElement>)=>{
//     console.log("Hello I'm Vali")
// const onClickHandler = (name:string)=>{
//     console.log(name)
// }
//     return (
//         // <div>
//         //     {/*<button>1</button>*/}
//         //     {/*<button>2</button>*/}
//         //     <Button name={"1"} callBack={()=>Button1Foo("Dad",21)}/>
//         //     <Button name={"2"} callBack={()=>Button2Foo("Mum")}/>
//         //     <Button name={"Stupid button"} callBack={stupid}/>
//         //     <Button name={"Bobrik"} callBack={()=>bobTell("Hello")}/>
//         //
//         // </div>
//
//     );
// }
function App() {
    let [a, setA] = useState(1)
    const onClickHandler = () => {
        setA(++a);
        console.log((a))
    }
    const resetHandler=()=>{
        setA(0);
    }
    return (
        <div className='App'>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={resetHandler}>0</button>

        </div>
    )
}

export default App;