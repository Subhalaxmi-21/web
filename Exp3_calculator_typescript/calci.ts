var x:number
var y:number
var result:number
const add =()=>{
    x=Number((document.getElementById('first') as HTMLInputElement).value)
    y=Number((document.getElementById('second')as HTMLInputElement).value)
    result=x+y
    document.getElementById('answer').innerHTML=String(result)
}
const minus =()=>{
    x=Number((document.getElementById('first') as HTMLInputElement).value)
    y=Number((document.getElementById('second') as HTMLInputElement).value)
    result=x-y
    document.getElementById('answer').innerHTML=String(result)
}
const multiply=()=>{
    x=Number((document.getElementById('first') as HTMLInputElement).value)
    y=Number((document.getElementById('second') as HTMLInputElement).value)
    result=x*y
    document.getElementById('answer').innerHTML=String(result)
}
const divide =() =>{
    x=Number((document.getElementById('first') as HTMLInputElement).value)
    y=Number((document.getElementById('second') as HTMLInputElement).value)
    result=x/y
    document.getElementById('answer').innerHTML=String(result)
}
document.getElementById('add').addEventListener('click', add);
document.getElementById('minus').addEventListener('click',minus)
document.getElementById('multiply').addEventListener('click',multiply)
document.getElementById('divide').addEventListener('click',divide)