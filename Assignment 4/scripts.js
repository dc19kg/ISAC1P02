var x = 0;
function question1(){
    var question1 = "Who is the Instructor of IASC 1P02? (First Name)";
    document.getElementById("jeopardy").innerHTML = question1;
    console.log(question1);
    setTimeout(function(){ var answer1 = prompt("Input Answer Here"); console.log(answer1); //Wrote code: w3 schools, Accessed: Dec. 03, 2021, URL: https://www.w3schools.com/jsref/met_win_settimeout.asp
    if (answer1 == "Jess"){
      var money1 = 100;
      console.log(money1);
      x++;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else{
      var money1 = 0;
      console.log(money1);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    }, 4000);
}
function question2(){
    var question2 = "What is one of the animes that I am  currently watching";
    document.getElementById("jeopardy").innerHTML = question2;
    console.log(question2);
    setTimeout(function(){ var answer2 = prompt("Input Answer Here"); console.log(answer2);
    if (answer2 == "One Piece"){
      var money2 = 100;
      console.log(money2);
      x++;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else if (answer2 == "Hunter x Hunter"){
      var money2 = 100;
      console.log(money2);
      x++;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else{
      var money2 = 0;
      console.log(money2);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    }, 4000);
}
function question3(){
    var question3 = "What university is this website for?";
    document.getElementById("jeopardy").innerHTML = question3;
    console.log(question3);
    setTimeout(function(){ var answer3 = prompt("Input Answer Here"); console.log(answer3);
    if (answer3 == "Brock"){
      var money3 = 100;
      console.log(money3);
      x++;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else if (answer3 == "Brock University"){
      var money3 = 100;
      console.log(money3);
      x++;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else{
      var money3 = 0;
      console.log(money3);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    }, 4000);
}
function question4(){
    var question4 = "Who is the current Prime Minister?";
    document.getElementById("jeopardy").innerHTML = question4;
    console.log(question4);
    setTimeout(function(){ var answer4 = prompt("Input Answer Here"); console.log(answer4);
    if (answer4 == "Justin Trudeau"){
      var money4 = 100;
      console.log(money4);
      x++;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else if (answer4 == "Trudeau"){
      var money4 = 100;
      console.log(money4);
      x++;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else if (answer4 == "Justin"){
      var money4 = 100;
      console.log(money4);
      x++;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else{
      var money4 = 0;
      console.log(money4);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    }, 4000);
}
function question5(){
    var question5 = "What colour do you get by mixing Red and Yellow";
    document.getElementById("jeopardy").innerHTML = question5;
    console.log(question5);
    setTimeout(function(){ var answer5 = prompt("Input Answer Here"); console.log(answer5);
    if (answer5 == "Orange"){
      var money5 = 200;
      console.log(money5);
      x++;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else{
      var money5 = 0;
      console.log(money5);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    }, 4000);
}
function question6(){
    var question6 = "What is the focus of this course?";
    document.getElementById("jeopardy").innerHTML = question6;
    console.log(question6);
    setTimeout(function(){ var answer6 = prompt("Input Answer Here"); console.log(answer6);
    if (answer6 == "Web Design"){
      var money6 = 200;
      console.log(money6);
      x+=2;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else if (answer6 == "Web Media Programming"){
      var money6 = 200;
      console.log(money6);
      x+=2;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else if (answer6 == "Web Programming"){
      var money6 = 200;
      console.log(money6);
      x+=2;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else{
      var money6 = 0;
      console.log(money6);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    }, 4000);
}
function question7(){
    var question7 = "What is the main sport I play?";
    document.getElementById("jeopardy").innerHTML = question7;
    console.log(question7);
    setTimeout(function(){ var answer7 = prompt("Input Answer Here"); console.log(answer7);
    if (answer7 == "Baseball"){
      var money7 = 200;
      console.log(money7);
      x+=2;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else{
      var money7 = 0;
      console.log(money1);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    }, 4000);
}
function question8(){
    var question8 = "What is the mascot of Brock?";
    document.getElementById("jeopardy").innerHTML = question8;
    console.log(question8);
    setTimeout(function(){ var answer8 = prompt("Input Answer Here"); console.log(answer8);
    if (answer8 == "Badger"){
      var money8 = 200;
      console.log(money8);
      x+=2;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else if (answer8 == "A badger"){
      var money8 = 200;
      console.log(money8);
      x+=2;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else if (answer8 == "A Badger"){
      var money8 = 200;
      console.log(money8);
      x+=2;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else if (answer8 == "Boomer the Badger"){
      var money8 = 200;
      console.log(money8);
      x+=2;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else{
      var money8 = 0;
      console.log(money8);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    }, 4000);
}
function question9(){
    var question9 = "What is the Capital of Ontario?";
    document.getElementById("jeopardy").innerHTML = question9;
    console.log(question9);
    setTimeout(function(){ var answer9 = prompt("Input Answer Here"); console.log(answer9);
    if (answer9 == "Toronto"){
      var money9 = 200;
      console.log(money9);
      x+=2;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else{
      var money9 = 0;
      console.log(money9);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    }, 4000);
}
function question10(){
    var question10 = "What animal does pork come from?";
    document.getElementById("jeopardy").innerHTML = question10;
    console.log(question10);
    setTimeout(function(){ var answer10 = prompt("Input Answer Here"); console.log(answer10);
    if (answer10 == "Pig"){
      var money10 = 200;
      console.log(money10);
      x+=2;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else if (answer10 == "A Pig"){
      var money10 = 200;
      console.log(money10);
      x+=2;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else if (answer10 == "A pig"){
      var money10 = 200;
      console.log(money10);
      x+=2;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else{
      var money1 = 0;
      console.log(money1);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    }, 4000);
}
function question11(){
    var question11 = "What is the styling software we use?";
    document.getElementById("jeopardy").innerHTML = question11;
    console.log(question11);
    setTimeout(function(){ var answer11 = prompt("Input Answer Here"); console.log(answer11);
    if (answer11 == "CSS"){
      var money11 = 300;
      console.log(money11);
      x+=3;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else if (answer11 == "css"){
      var money11 = 300;
      console.log(money11);
      x+=3;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else{
      var money1 = 0;
      console.log(money1);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    }, 4000);
}
function question12(){
    var question12 = "Where am I from?";
    document.getElementById("jeopardy").innerHTML = question12;
    console.log(question12);
    setTimeout(function(){ var answer12 = prompt("Input Answer Here"); console.log(answer12);
    if (answer12 == "Fort Erie"){
      var money12 = 300;
      console.log(money12);
      x+=3;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else{
      var money12 = 0;
      console.log(money12);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    }, 4000);
}
function question13(){
    var question13 = "(T/F) Brock was founded in 1965";
    document.getElementById("jeopardy").innerHTML = question13;
    console.log(question13);
    setTimeout(function(){ var answer1 = prompt("Input Answer Here"); console.log(answer1);
    if (answer1 == "F"){
      var money13 = 300;
      console.log(money13);
      x+=3;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else if (answer1 == "False"){
      var money13 = 300;
      console.log(money13);
      x+=3;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else{
      var money13 = 0;
      console.log(money13);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    }, 4000);
}
function question14(){
    var question14 = "How many provinces are in Canada";
    document.getElementById("jeopardy").innerHTML = question14;
    console.log(question14);
    setTimeout(function(){ var answer14 = prompt("Input Answer Here"); console.log(answer14);
    if (answer14 == "10"){
      var money14 = 300;
      console.log(money14);
      x+=3;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else if (answer14 == "Ten"){
      var money14 = 300;
      console.log(money14);
      x+=3;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else{
      var money14 = 0;
      console.log(money14);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    }, 4000);
}
function question15(){
    var question15 = "(T/F) A Cheetah is the fastest land animal";
    document.getElementById("jeopardy").innerHTML = question15;
    console.log(question15);
    setTimeout(function(){ var answer15 = prompt("Input Answer Here"); console.log(answer15);
    if (answer15 == "T"){
      var money15 = 400;
      console.log(money15);
      x+=4;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else if (answer15 == "True"){
      var money15 = 400;
      console.log(money15);
      x+=4;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else{
      var money15 = 0;
      console.log(money15);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    }, 4000);
}
function question16(){
    var question16 = "Which day was Tynan's lab?";
    document.getElementById("jeopardy").innerHTML = question16;
    console.log(question16);
    setTimeout(function(){ var answer16 = prompt("Input Answer Here"); console.log(answer16);
    if (answer16 == "Thursday"){
      var money16 = 400;
      console.log(money16);
      x+=4;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else{
      var money16 = 0;
      console.log(money16);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    }, 4000);
}
function question17(){
    var question17 = "Do I live on Res?";
    document.getElementById("jeopardy").innerHTML = question17;
    console.log(question17);
    setTimeout(function(){ var answer17 = prompt("Input Answer Here"); console.log(answer17);
    if (answer17 == "No"){
      var money17 = 400;
      console.log(money17);
      x+=4;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else{
      var money17 = 0;
      console.log(money17);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    }, 4000);
}
function question18(){
    var question18 = "What is the main colour of Brock";
    document.getElementById("jeopardy").innerHTML = question18;
    console.log(question18);
    setTimeout(function(){ var answer18 = prompt("Input Answer Here"); console.log(answer18);
    if (answer18 == "Red"){
      var money18 = 400;
      console.log(money18);
      x+=4;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else{
      var money18 = 0;
      console.log(money18);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    }, 4000);
}
function question19(){
    var question19 = "What ocean is next to British Columbia?";
    document.getElementById("jeopardy").innerHTML = question19;
    console.log(question19);
    setTimeout(function(){ var answer19 = prompt("Input Answer Here"); console.log(answer19);
    if (answer19 == "Pacific"){
      var money19 = 400;
      console.log(money19);
      x+=4;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else if (answer19 == "Pacific Ocean"){
      var money19 = 400;
      console.log(money19);
      x+=4;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else{
      var money19 = 0;
      console.log(money19);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    }, 4000);
}
function question20(){
    var question20 = "What is the most popular attraction in the Niagara Region";
    document.getElementById("jeopardy").innerHTML = question20;
    console.log(question20);
    setTimeout(function(){ var answer20 = prompt("Input Answer Here"); console.log(answer20);
    if (answer20 == "Niagara Falls"){
      var money20 = 400;
      console.log(money20);
      x+=4;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else if (answer20 == "The Falls"){
      var money20 = 400;
      console.log(money20);
      x+=4;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else{
      var money20 = 0;
      console.log(money20);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    }, 4000);
}
function question21(){
    var question21 = "How many modules were posted on Sakai?";
    document.getElementById("jeopardy").innerHTML = question21;
    console.log(question21);
    setTimeout(function(){ var answer21 = prompt("Input Answer Here"); console.log(answer21);
    if (answer21 == "11"){
      var money21 = 500;
      console.log(money21);
      x+=5;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else if (answer21 == "Eleven"){
      var money21 = 500;
      console.log(money21);
      x+=5;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else{
      var money21 = 0;
      console.log(money21);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    }, 4000);
}
function question22(){
    var question22 = "What year am I in at Brock?";
    document.getElementById("jeopardy").innerHTML = question22;
    console.log(question22);
    setTimeout(function(){ var answer22 = prompt("Input Answer Here"); console.log(answer22);
    if (answer22 == "2"){
      var money22 = 500;
      console.log(money22);
      x+=5;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else if (answer22 == "Two"){
      var money22 = 500;
      console.log(money22);
      x+=5;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else if (answer22 == "Second"){
      var money22 = 500;
      console.log(money22);
      x+=5;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else if (answer22 == "2nd"){
      var money22 = 500;
      console.log(money22);
      x+=5;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else{
      var money22 = 0;
      console.log(money22);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    }, 4000);
}
function question23(){
    var question23 = "Who founded Brock University";
    document.getElementById("jeopardy").innerHTML = question23;
    console.log(question23);
    setTimeout(function(){ var answer23 = prompt("Input Answer Here"); console.log(answer23);
    if (answer23 == "John Robarts"){
      var money23 = 500;
      console.log(money23);
      x+=5;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else{
      var money23 = 0;
      console.log(money23);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    }, 4000);
}
function question24(){
    var question24 = "Which province has the smallest population?";
    document.getElementById("jeopardy").innerHTML = question24;
    console.log(question24);
    setTimeout(function(){ var answer24 = prompt("Input Answer Here"); console.log(answer24);
    if (answer24 == "Prince Edward Island"){
      var money24 = 500;
      console.log(money24);
      x+=5;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else if (answer24 == "PEI"){
      var money24 = 500;
      console.log(money24);
      x+=5;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else if (answer24 == "P.E.I"){
      var money24 = 500;
      console.log(money24);
      x+=5;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else{
      var money24 = 0;
      console.log(money24);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    }, 4000);
}
function question25(){
    var question25 = "Was this game fun?";
    document.getElementById("jeopardy").innerHTML = question25;
    console.log(question25);
    setTimeout(function(){ var answer25 = prompt("Input Answer Here"); console.log(answer25);
    if (answer25 == "Yes"){
      var money25 = 500;
      console.log(money25);
      x+=5;
      console.log(x);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    else{
      var money25 = 0;
      console.log(money25);
      document.getElementById("moneyOutput").innerHTML = x*100;
    }
    }, 4000);
}
