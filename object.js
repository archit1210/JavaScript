function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.print = function(){
    console.log(`Username is : ${this.username} and your score is ${this.score}`);
}

const u1 = new createUser("abc",25)
const u2 = new createUser("xyz",250)

u1.increment();
u1.print();