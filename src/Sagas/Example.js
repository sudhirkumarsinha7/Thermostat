export default function* Test() {
  console.log('Hello Saga');
  yield 0;
  yield 105;
  yield 100;
  return 5;
}
