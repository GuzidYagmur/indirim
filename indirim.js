let UrunFiyatlari=[100,300,500,6870,9850,140];
console.log(UrunFiyatlari);
let indirimOrani=Number(prompt("İstediğiniz indirim oranını giriniz"));

for(i=0; i<UrunFiyatlari.length; i++){
    let indirimliFiyat = UrunFiyatlari[i] - (UrunFiyatlari[i]*indirimOrani)/100;
    UrunFiyatlari[i]=indirimliFiyat
}
console.log(UrunFiyatlari);
