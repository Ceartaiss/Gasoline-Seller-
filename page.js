//  Benzin istasyonu uygulaması 


/*
 
  1)Dizel : 24.53
  2)Benzin : 22.25
  3)LPG : 11.10


    Gelen müşterilerden alacağınız bilgiler:
    1)Yakıt Tipi
    2)Yüklenecek yakıt litresi

*/

let dizel= 45.53;
let benzin= 40.25;
let lpg= 20.10;

const yeniSatir = "\r\n";//satır sonu işaretçisi escape squence

const yakitMetni= "1-Dizel"+yeniSatir
+"2-Benzin"+yeniSatir
+"3-Lpg"+yeniSatir
+"Yakıt Türünü seçiniz.";

let yakitTipi= prompt(yakitMetni);

if(yakitTipi=="1" || yakitTipi=="2" || yakitTipi=="3"){
let yakitLitresi=Number(prompt("Yakıt Litresini giriniz"));
let bakiye=Number(prompt("Bakiye giriniz..."));
 

if(yakitTipi=="1"){
    //dizel
     let odenecekTutar=dizel*yakitLitresi;

     if(odenecekTutar<bakiye){
        //bakiye yeterse eğer    
        
        alert("Ödeme başarılı"+yeniSatir+"Kalan bakiyeniz: "+(bakiye-odenecekTutar))
     } else{    
        //bakiye yeterli değilse
        alert("Bakiyeniz Yeterli Değildir"+yeniSatir
            +"Ödenecek Tutar: "+odenecekTutar+yeniSatir
            +"Fazladan ödenecek tutar: "+((-1)*(bakiye-odenecekTutar))+yeniSatir);

     }

}else if(yakitTipi=="2"){
  //benzin
    let odenecekTutar= benzin*yakitLitresi;
    if(bakiye>odenecekTutar){
      alert("Ödeme başarılı, benzin aldınız"+yeniSatir+"Kalan Bakiyeniz: "+ (bakiye-odenecekTutar));
      
    }else if (bakiye<odenecekTutar) {
      alert("Bakiyeniz benzin almak için yetersiz"+yeniSatir
        +"Ödenecek Tutar: "+ odenecekTutar+ yeniSatir
        +"Fazladan ödenecek tutar: "+((-1)*(bakiye-odenecekTutar)));
    }

}else if (yakitTipi=="3"){
    //lpg
    let odenecekTutar=lpg*yakitLitresi;
    if(bakiye>odenecekTutar){
      alert("LPG ödemesi gerçekleştirildi."+yeniSatir
        +"Ödenecek Tutar:"+odenecekTutar+yeniSatir
        +"Kalan bakiye: "+ (bakiye-odenecekTutar))
    
    }else if(bakiye<odenecekTutar){
        alert("Bakiyeniz lpg almak için yeterli değil: "+yeniSatir
            +"Ödenecek Tutar: "+odenecekTutar+yeniSatir
            +"Fazladan ödenecek Tutar:"+ (odenecekTutar-bakiye))
    }
    

}


}else{
    alert("yakıt tipi seçer misin dostum?");
   }