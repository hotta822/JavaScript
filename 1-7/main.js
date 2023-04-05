/*
class Human{
	constructor(name,age){
		this.name = name; //this.nameで送られてきたnameを受け取る
		this.age = age;
	}
}
//インスタンス化
let yamada = new Human('yamada',25);
console.log(yamada.age);
*/

//チャレンジ
class Taiyaki {
    constructor(ingredients){
        this.ingredients = ingredients;
    }
    nakami(){
        console.log(`中身は${this.ingredients}です`)
    }
}
let anko = new Taiyaki("あんこ");
let cream = new Taiyaki("クリーム");
let cheese = new Taiyaki("チーズ");
anko.nakami();
cream.nakami();
cheese.nakami();