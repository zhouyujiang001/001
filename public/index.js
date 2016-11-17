/**
 * Created by Administrator on 2016/11/10.
 */

//下拉菜单

//宝贝分类
var bbfl = document.getElementById("centre_top_centre_g_id");
var superior = document.getElementById("centre_top_centre_1");
var caidan = document.getElementById("centre_top_centre_1_cd");

bbfl.onmousemove = function () {
    var xlcd = caidan.getElementsByTagName("ul")[0];
    xlcd.style.display = "block";
    var j = caidan;
    j.style.display = "block";
}
bbfl.onmouseout = function () {
    var xlcd = caidan.getElementsByTagName("ul")[0];
    xlcd.style.display = "none";
    var j = caidan;
    j.style.display = "none";
}

superior.onmousemove = function () {
    var xlcd = caidan.getElementsByTagName("ul")[0];
    xlcd.style.display = "block";
    var j = caidan;
    j.style.display = "block";
}
superior.onmouseout = function () {
    var xlcd = caidan.getElementsByTagName("ul")[0];
    xlcd.style.display = "none";
    var j = caidan;
    j.style.display = "none";
}

//限时抢购

var xsqg = document.getElementById("centre_top_centre_g_id2");
var superior2 = document.getElementById("centre_top_centre_2");
var caidan2 = document.getElementById("centre_top_centre_1_cd2");

xsqg.onmousemove = function () {
    var cd = caidan2.getElementsByTagName("ul")[0];
    cd.style.display = "block";
    var g = caidan2;
    g.style.display = "block"
}
xsqg.onmouseout = function () {
    var cd = caidan2.getElementsByTagName("ul")[0];
    cd.style.display = "none";
    var g = caidan2;
    g.style.display = "none"
}
superior2.onmousemove = function () {
    var cd = caidan2.getElementsByTagName("ul")[0];
    cd.style.display = "block";
    var g = caidan2;
    g.style.display = "block"
}
superior2.onmouseout = function () {
    var cd = caidan2.getElementsByTagName("ul")[0];
    cd.style.display = "none";
    var g = caidan2;
    g.style.display = "none"
}

//休闲团购
var xxtg = document.getElementById("centre_top_centre_g_id3");
var superior3 = document.getElementById("centre_top_centre_3");
var caidan3 = document.getElementById("centre_top_centre_1_cd3");

xxtg.onmousemove = function () {
    var cd3 = caidan3.getElementsByTagName("ul")[0];
    cd3.style.display = "block";
    var g3 = caidan3;
    g3.style.display = "block"
}
xxtg.onmouseout = function () {
    var cd3 = caidan3.getElementsByTagName("ul")[0];
    cd3.style.display = "none";
    var g3 = caidan3;
    g3.style.display = "none"
}
superior3.onmousemove = function () {
    var cd3 = caidan3.getElementsByTagName("ul")[0];
    cd3.style.display = "block";
    var g3 = caidan3;
    g3.style.display = "block"
}
superior3.onmouseout = function () {
    var cd3 = caidan3.getElementsByTagName("ul")[0];
    cd3.style.display = "none";
    var g3 = caidan3;
    g3.style.display = "none"
}

//1元疯抢

var fq = document.getElementById("centre_top_centre_g_id4");
var superior4 = document.getElementById("centre_top_centre_4");
var caidan4 = document.getElementById("centre_top_centre_1_cd4");

fq.onmousemove = function () {
    var cd4 = caidan4.getElementsByTagName("ul")[0];
    cd4.style.display = "block";
    var g4 = caidan4;
    g4.style.display = "block"
}
fq.onmouseout = function () {
    var cd4 = caidan4.getElementsByTagName("ul")[0];
    cd4.style.display = "none";
    var g4 = caidan4;
    g4.style.display = "none"
}
superior4.onmousemove = function () {
    var cd4 = caidan4.getElementsByTagName("ul")[0];
    cd4.style.display = "block";
    var g4 = caidan4;
    g4.style.display = "block"
}
superior4.onmouseout = function () {
    var cd4 = caidan4.getElementsByTagName("ul")[0];
    cd4.style.display = "none";
    var g4 = caidan4;
    g4.style.display = "none"
}

//满减平淡

var mjpd = document.getElementById("centre_top_centre_g_id5");
var superior5 = document.getElementById("centre_top_centre_5");
var caidan5 = document.getElementById("centre_top_centre_1_cd5");

mjpd.onmousemove = function () {
    var cd5 = caidan5.getElementsByTagName("ul")[0];
    cd5.style.display = "block";
    var g5 = caidan5;
    g5.style.display = "block"
}
mjpd.onmouseout = function () {
    var cd5 = caidan5.getElementsByTagName("ul")[0];
    cd5.style.display = "none";
    var g5 = caidan5;
    g5.style.display = "none"
}
superior5.onmousemove = function () {
    var cd5 = caidan5.getElementsByTagName("ul")[0];
    cd5.style.display = "block";
    var g5 = caidan5;
    g5.style.display = "block"
}
superior5.onmouseout = function () {
    var cd5 = caidan5.getElementsByTagName("ul")[0];
    cd5.style.display = "none";
    var g5 = caidan5;
    g5.style.display = "none"
}

//购物券领取

var gwj3 = document.getElementById("gwj3");
var gwj10 = document.getElementById("gwj10");
var gwj120 = document.getElementById("gwj20");
gwj3.onclick = function () {
    alert("领取成功");
}
gwj10.onclick = function () {
    alert("领取成功");
}
gwj20.onclick = function () {
    alert("购物券以发完");
}


//搜索查找

var sousuo = document.getElementById("sousuo");
var ssl = document.getElementById("ssl")
var jpms = document.getElementsByClassName("jpms");
var xsqg = document.getElementsByClassName("xsqg");

var classdiv=document.getElementsByClassName("classdiv")
var classdiv1=document.getElementsByClassName("classdiv1")
var url = "http://127.0.0.1:3000/";

sousuo.onclick = function () {
   sessionStorage.kkk=ssl.value;
    $.post(url + 'select', {
        ssl: ssl.value
    }, function (data, status) {
        //console.log(jpms);
        //console.log(data[0].jiaqian)
        //价钱
        //第一组
        for(var i=0; i<data.length; i++){
            (function(i){
                classdiv[i].innerHTML ="价钱:"+data[i].jiaqian;
            }(i))
        }
        //第二组
        for(var i=0; i<data.length; i++){
            (function(i){
                classdiv1[i].innerHTML ="价钱:"+data[i].jiaqian;
            }(i))
        }
        //坚果
        for(var i=0; i<data.length; i++){
            (function(i){
                jpms[i].src =data[i].tupian;
            }(i))
        }
        //jpms[0].src = data[0].tupian;
        //干果
        for(var i=0; i<data.length;i++){
            (function(i){
                xsqg[i].src=data[i].tupian;
            }(i))
        }
        if (data.result) {
            alert("查询失败");
            console.log(data);
            //location.href="./project/ss/ss.html"
        } else {
            alert("查询成功");
            console.log(data);
        }
    });
};


//添加ID

(function(){
    var btnljgm =document.getElementById("btn_ljgm");
    var sousuolan = document.getElementById("ssl");

    var url = "http://127.0.0.1:3000/";

    btnljgm.onclick = function () {
        $.post(url + 'chaid', {
            sousuolan:sousuolan.value
        }, function (data, status) {

            if (data.result) {
                console.log(data);

            } else {

            }
        });
    }
}())