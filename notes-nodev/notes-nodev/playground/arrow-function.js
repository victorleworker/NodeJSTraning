var square = x => x*x;
console.log(square(9));

var user = {
    name: 'Andrew',
    sayHi: () => {
        console.log(`Hi. I am ${this.name}`);
    },
    SayHiAlt() {
        console.log(arguments);
        console.log(`Hi. I am ${this.name}`);
    }
};

user.SayHiAlt(1,2,3);