class Taiyaki {
  constructor(content) {
    this.content = content;
  }

  printContent() {
    console.log(`中身は${this.content}です`);
  }
}

let taiyakiAnko = new Taiyaki("あんこ");
let taiyakiCream = new Taiyaki("クリーム");
let taiyakiCheese = new Taiyaki("チーズ");

taiyakiAnko.printContent();
taiyakiCream.printContent();
taiyakiCheese.printContent();