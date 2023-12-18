document.write("hi");
       console.log("hello")

       var sum = 56;
       sum = 87;
       document.write(sum);

       const age =18;
       document.write(age+'<br>');
        
       let str1="jack is studen."
       var str2 ="JOE IS GIRL"
       var str3 ="\"JOE IS GIRL\""
       document.write(str1.length)//長度
       document.write(str1.toUpperCase())//變大寫
       document.write(str2.toLocaleLowerCase());//變小寫
       document.write(str2.charAt(2));//回傳字串位置
       document.write(str2.indexOf("S")+'<br>');//回傳字的位置
       document.write(str1.substring(5,7)+'<br>');//擷取
       document.write(str3);
        //加減乘除指數餘數()
       document.write((1+1)*3/3%2);
       //數值函數
       document.write(Math.abs(-2));
       document.write(Math.round(3.14)+'<br>');
       document.write(Math.max(10,8,6));
       document.write(Math.min(10,8,6)+'<br>');
       document.write(Math.random()*10);
       
       var scor = [77,88,99,20];
       var scortwo=[[20,25],[50,55],[88,77]]
       document.write(scor[2]+'<br>');
       scor.push('hi');
   
       /* for(var i =0;i< scor.length;i++){
            if(i==1){
                continue;
            }
            else{
                document.write(scor[i]);
            }
       } */
       var i =0;
       while(i< scor.length){
        document.write(scor[i]);
        i++;
       }
       

/* function go(a,b){
   var c =a+b;
    return c;
}
document.write(go(1,2)); */

const GO =()=>{document.write("HELLO")};
GO();


var user={name:'line',age : 18,wei:"60kg"};
document.write(user['name']);
document.write(user.age);

//DOM
var div = document.getElementById('id1');
div.innerText="我案的";
var newp=document.querySelector('p');
newp.innerText="stop";
newp.setAttribute('style','border:1px solid blue');
div.setAttribute('style','color:red');
newp.style.textAlign='center';
var h1 = document.querySelector('h1');
h1.classList.remove('h11');
h1.classList.add('h11');

var li1=document.querySelector('#li1');
li1.addEventListener('click',function(){
    document.write("你還真的點啊");
})
var li2=document.querySelector('#li2');
li2.addEventListener('click',(e)=>{
e.currentTarget.remove();
})