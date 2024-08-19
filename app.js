// import { g, Hi} from "./module1.js"

// วิธี 1
import * as say from "./module1.js"
import helloJs from "./module2.js";

function sayHi () {
    console.log('Hello Modules');
}

sayHi();

say.sayHello()
say.sayGoodbye()

helloJs()

