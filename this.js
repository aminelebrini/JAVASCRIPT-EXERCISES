//console.log(this);

//print : {}

const user = {

    name : "anass",
    printName : () =>{
        console.log(this.name);
    },
};

user.printName(); //return undefined

const user1 = {

    name : "anass",
    printName : function() {
        console.log(this.name);
    },
};

user1.printName();