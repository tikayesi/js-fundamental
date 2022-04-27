function Person(name){
this.name = name;
this.say = function (apa){
    console.log(apa, this.name);
}
}

let he = new Person("tika");
he.say("ho")