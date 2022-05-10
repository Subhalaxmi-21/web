class Animal{
    eats:string
    constructor(x: string){
        this.eats=x
    }
}

class Dog extends Animal{
    barks:string
    constructor(x:string, y:string){
        super(x)
        this.barks=y
    }


}

class Baby extends Dog{
    weep:string
    constructor(x:string, y:string,z:string){
        super(x,y)
        this.weep=z
    }

    display():void{
        console.log('From super class I get eats as'+this.eats)
        console.log('from child'+this.barks)
        console.log(this.weep)
    }
}

let x=new Baby('meat','bark','weep')
x.display()