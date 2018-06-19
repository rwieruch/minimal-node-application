import dotenv from 'dotenv';

dotenv.config();

const foo = { foo: 'foo' };
const bar = { bar: 'bar' };
const fooBar = { ...foo, ...bar };

console.log(fooBar);

console.log(process.env.SOME_ENV_VARIABLE);