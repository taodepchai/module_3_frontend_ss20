//bt1

function bt1(){
    alert("yes sir");
}

//bt2
function bt2(){
    let i = 10;
    let f = 20.5;
    let b = true;
    let s = "Hà Nội";
    console.log(i," ",f," ",b," ",s);
}


//bt3



function bt3(){
    let height = prompt("nhap chieu dai");
    let width = prompt("nhap chieu rong");
    let acreage = parseInt(height) * parseInt(width);
    alert(acreage);
}


//bt4


function bt4(){

    confirm("ban da du 18 tuoi chua");
}


//bt5
function bt5(){
    let math = prompt("nhap diem toan");
    let literature = prompt("nhap diem van");
    let english = prompt("nhap diem anh");
    let point = ( parseFloat(math) + parseFloat(literature) + parseFloat(english)) / 3;
    console.log("diem trung binh la",point);
}



//bt6
function bt6(){
    let C = prompt("nhap nhiet do");
    let temp = parseFloat(C);
    let F = ((temp*9)/5) + 32;
    console.log(F);
}


//bt7
 

    function bt7(){
        let height = prompt("nhap chieu dai");
        let width = prompt("nhap chieu rong");
        let acreage = parseInt(height) * parseInt(width);
        let perimeter = (parseInt(height) + parseInt(width))*2;
        console.log("cho vi hinh chu nhat la:",perimeter);
        console.log("dien tich hinh chu nhat la:",acreage);
    }


//bt8
    function bt8(){
        const PI = 3.1416;
        let R = prompt("nhap ban kinh");
        let temp = parseFloat(R);
        let acreage = 2*PI*temp*temp ;
        let perimeter =4*PI*temp ;
        console.log("cho vi hinh tron la:",perimeter);
        console.log("dien tich hinh tron la:",acreage);
    }


//bt9

    function bt9(){
        let a = 5;
        let b = "5";
        console.log(a==b); console.log(a===b);
        console.log(a!=b); console.log(a!==b);
        
    }


//bt10

    function bt10(){
        let a = 6;
        let result = ++a + a + a++ + ++a + a;
        console.log(result);
    }