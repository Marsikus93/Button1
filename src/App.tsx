import React, {MouseEvent} from 'react';
import './App.css';
import {Button} from "./Components/Button";

function App() {
    const Button1Foo=(subscriber:string,age:number)=>{
console.log(subscriber,age)
    }
    const Button2Foo=(subscriber:string)=>{
        console.log(subscriber)
    }
const stupid=()=>{
    console.log("stupid")
}
const bobTell=(text:string)=>{
        console.log(text)

}
    // const MyFirstSubscriber= (event: MouseEvent<HTMLButtonElement>)=>{
    //     console.log("Hello I'm Dany")
    // }
    // const MySecondSubscriber= (event:MouseEvent<HTMLButtonElement>)=>{
    //     console.log("Hello I'm Vali")
    // const onClickHandler = (name:string)=>{
    //     console.log(name)
    // }
    return (
        <div>
            {/*<button>1</button>*/}
            {/*<button>2</button>*/}
            <Button name={"1"} callBack={()=>Button1Foo("Dad",21)}/>
            <Button name={"2"} callBack={()=>Button2Foo("Mum")}/>
            <Button name={"Stupid button"} callBack={stupid}/>
            <Button name={"Bobrik"} callBack={()=>bobTell("Hello")}/>

        </div>

    );
}

export default App;