import { calculator, getPosts } from './arithmetic';
const greeting = 'Hello world';
console.log(`--- ${greeting} from main file`);

console.log(calculator.add(1, 2));
console.log(calculator.subtract(10, 2));

getPosts()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
