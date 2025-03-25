function* yield()
{
    const name = yield "your name ?";
    yield `hi ${name}`;
}
const gen = yield();
console.log(gen.next().value);
console.log(gen.next("amine").value);