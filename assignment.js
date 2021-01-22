// https://github.com/ELA4126/web-portfolio-assignment3



// 1. kilometerToMeter


function kilometerToMeter (kiloMeter){
    var meter = kiloMeter * 1000;
    return meter;
}
var distance = kilometerToMeter(7);
console.log (distance);




// 2.budgetCalculator


function budgetCalculator( watch , phone, laptop) {

    var watchCost = watch*50;
    var phoneCost = phone*100;
    var laptopCost = laptop*500;

    var totalBudget =  watchCost + phoneCost + laptopCost ;
    return totalBudget;
}
var subtotalBudget = budgetCalculator(3 , 2, 1) ;
console.log( subtotalBudget);



// 3. hotelCost


function hotelCost(days){
    var totalHotelCost = 0;
    if(days <=10 ){
        totalHotelCost = days * 100; 
    }else if ( days <=20 ){
        var firstHotelStayCost= 10 * 100;
        var remainingDays = days - 10 ;
        var secondHotelStayCost = remainingDays * 80 ;
        totalHotelCost = firstHotelStayCost + secondHotelStayCost ;
    }else {
        var firstHotelStayCost = 10 * 100;
        var secondHotelStayCost = 10 * 80 ;
        var remainingDays = days - 20 ;
        var thirdHotelStayCost = remainingDays * 50 ;
        totalHotelCost = firstHotelStayCost + secondHotelStayCost + thirdHotelStayCost ;
    }
    return totalHotelCost;
}
var total = hotelCost (25);
console.log ( total );



// 4.megaFriend


function megaFriend(names){
    var longestName = names[0].length ;
    var answar = names[0];
    for (var i = 0 ; i <names.length; i++){
        var magaName = names[i].length;
        if (magaName > longestName){
            answar = names[i];
            longestName = magaName;
        }
    }
    return answar;
}
var megaFriendName = megaFriend(["Rayaan", "Ela", "Mamun", "Abdullah", "Nahar"]);
console.log (megaFriendName);


