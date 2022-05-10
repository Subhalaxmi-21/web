class Person{
    public name:string
    age:number
    eml:string
    constructor(name:string,age: number,eml:string){
        this.name=name
        this.age=age
        this.eml=eml
    }
    add(){
        document.getElementById('personal').innerHTML='<b>Name</b>:'+this.name+'<br>'+'<b>Age</b>: '+this.age+'<br> <b>Email</b>'+ this.eml

    }
}
let p:Person=new Person('Subhalaxmi',20,'sub@gmail.com')
p.add()