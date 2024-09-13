// inputBox is id of the input and it is stored now in display variable.Now display can be used to get and fetch the value of the variable.Ismein value show bhi karwa sakte hai.
let display=document.getElementById("inputBox");

// Ab jo saare buttons hai unhe bhi store karna hai variable mein agar alag alag variable mein store karenge toh sabko id deni padegi.
// Hum querySelectorAll se sabhi buttons ko ek variable mein store karenge fir unko hum arrays bana kar alag alag variable mein le lenge
// querySelector se id,tag kuch bhi ho woh ek hi leta hai means single variable mein hi store karega single value ko

// Humme buttons chahiye ab unki id,class nahi pata toh hum button tag ka use karenge in querySelector() ki bracket mein
//querySelector mein kuch bhi de sakte hai id,class,tag
let buttons=document.querySelectorAll('button');

// Now we want to make buttons as array isliye humne jo buttons mein node list receive hui thi usse Array.from() mein pass karenge for conversion
let buttonsArray=Array.from(buttons);
let string='';// As isse loop ke anadar use karna isliye abhi ki liye empty hai


// buttonsArray ka prototype hai Array o/p mein dikhega
// console.log(buttonsArray);

// Isse o/p mein nodes show honge node list ka matalb hai HTML ke nodes.Iska prototype NodeList hai.
// console.log(buttons);


// Ab yeh jo array bana hai buttonsArray toh usse hum wapas variable mein change karenge kyunki tabh hi hum ek-ek pe kam kar paenge.
// buttons Array pe loop lagaenge.forEach jo bhi array values hoti hai unko sabko alag-alag variable mein kar deta hai aur function pass karenge forEach mein aur fn mein value pass karenge btn.

buttonsArray.forEach(function(btn){
    // Ab btn pe event lagaenge 'click' ka.Fir fn likha jismein event pass kiya jo ki hai 'click' jo ki click hone pe jaegi value event mein.
    btn.addEventListener('click',function(event){
        // console.log(event);

        // Humne dekhna hai ki hum kispe click kar rahe hai konsa target hai 
        // console.log(event.target);

        // Jab event pass ho click hone par toh uska target kya hai aur target mein inner HTML kya hai
        // console.log(event.target.innerHTML);


        // Hum chahte hai ki jab DEL button dabae toh delete ho jae ek-ek number uske liye cdn bana rahe hai jab 'DEL' pe click karenge if mein toh baaki ki statements else mein aa jaengi.
        if(event.target.innerHTML== 'DEL'){
            // Humne string ke peeche se ek kam karna hai isliye substring use kar rahe hai.substring yeh index value ke hisaab se string ko count karta hai aur utni value humme show karta hai jitni hum chahte hai.
            // string.length-1 means string ki length mein se ek kam karde.
            string=string.substring(0,string.length-1);
            // string.length-1 karne ke baad string mein display kare
            display.value=string;
        }

        // Ab hum chahte hai ki jaise hi hum 'AC' pe click kare toh saara kuch jo bhi likha hai display mein woh delete ho jae.
        else if(event.target.innerHTML== 'AC'){
            string='';
            // Fir is string ko display karwa de
            display.value=string;
        }

        // Ab hum chahte hai ki jaise hi '=' pe click kare toh result aana chahiye jiske liye hum use karenge eval ka.
        // eval ek inbuilt fn hai Js ka.eval string ko number/code mein convert karta hai aur fir woh code calculate ho jaata hai.Code toh automatically calculate karta hai Js.
        else if(event.target.innerHTML== '='){
            // string mein jo bhi hai eval usse code mein convert karde aur fir woh wapas string mein store ho karde
            string=eval(string);
            // Fir is string ko display karwa de
            display.value=string;
        }

        else{
            // Hum ab chahte hai ki jab hum click kare kisi button pe toh woh cheez input mein likhi show ho.
            // string mein event.target.innerHTML store karwaenge.
            // Hum jaise hi ek button ke baad doosre button pe click kar rahe hai toh pichle button ki value ud rahi hai isliye humne string+= kiya hai jisse peeche peeche add hote jaenge.
            string+=event.target.innerHTML;
            // Jo string mein store hua hai usse display mein show karwana hai.Humme inputBox ke liye display variable banaya hua hai pehle jismein value jae string.
            display.value=string;
        }
    //btn mein jitni bhi value hai buttonsArray ki woh variable banke aa chuki hai.
    // console.log(btn);
    });

});