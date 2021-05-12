function createJuice(fruits) {
  console.log(`${fruits}を受け取りました。ジュースにして返します`);

  return fruits + "ジュース";
}

let ret = createJuice("みかん");
console.log(`${ret}が届きました`);