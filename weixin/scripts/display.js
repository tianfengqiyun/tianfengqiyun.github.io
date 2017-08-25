
window.onload=function(){
display();
onfocus();
}

  function display() {
    var obj = document.getElementById("obj");//获取被点击元素句柄
    var num = 0;//设置计数器变量，默认为0，下面将在点击后把它设为1，再点又设为0
    //obj对象被点击
    obj.onclick = function () {
            if (num == 0) {
                num = 1;//如果计数器为0，则改为1
                A();//第1次点击，调用函数A
            } else if (num == 1) {
                num = 0;//如果计数器为1，则改为0
                B();//第2次点击，调用函数B
            }
    }
    //obj.addEventListener("click", funcNum , false);  //监听点击事件(这句暂时还不明白有什么卵用，用了程序会报错)
}
function A() {
    var column = document.getElementById("column");//获取被点击元素句柄
    column.style.display = "inline-block";
}
function B() {
    var column = document.getElementById("column");//获取被点击元素句柄
    column.style.display = "none";
}

//input文本框函数

function onfocus()
 {
   var txt = document.querySelector ("input[type=text]");
   txt.onfocus = function ()
   {
       this.place = this.value;
       this.value = "";
   };

   txt.onblur = function ()
   {
       this.value = this.place;
   }
  }
