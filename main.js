const before = new Date();
import sayHello from "./src/hello.js";

sayHello("Marta");

const after = new Date();

console.log(after-before);