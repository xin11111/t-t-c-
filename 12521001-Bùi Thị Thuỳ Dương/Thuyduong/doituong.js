
var dssp =  JSON.parse(localStorage.getItem('dssp1'));

if(dssp == null)
    dssp = new Array();

const image = document.createElement('img')
var sp1 = taospmoi('a1',"img/xoi2.PNG",'Xôi Trứng Tràng An',295000);
var sp2 = taospmoi('a2','img/xoi.jpg','Xôi Đệ Nhất Tràng An',295000);
var sp3 = taospmoi('a3','img/pho.jpg','Phở Đệ Nhất Tràng An',295000);
var sp4 = taospmoi('a4','img/com.jpg','Xôi Gà Đệ Nhất Tràng An',295000);
// var sp5 = taospmoi('a5','https://3.bp.blogspot.com/-W7m5XeezAtQ/XKHnjbGOHCI/AAAAAAAAHLI/1U1NLbdnb54OX7pRhozJ9V41JXVntMkdACLcBGAs/s1600/Anh-Gai-Xinh-Viet-Nam-De-Thuong-Nhat_Ongtv.Net-%2B11.jpg','Xoi hao hang hoang de',50000);
if(dssp[0] == null){
    dssp.push(sp1);
    dssp.push(sp2);
    dssp.push(sp3);
    dssp.push(sp4);
    // dssp.push(sp5);
}
function taogh(id,address,ten,giaa){
    var sp = new Object();
    sp.id  = id;
    sp.anh = address;
    sp.ten = ten;
    sp.gia = giaa;
    sp.soluong = 1;
    return sp;
}

var js_dssp = JSON.stringify(dssp);
localStorage.setItem('dssp1',js_dssp);


function taospmoi(id,address,ten,giaa){
    var sp = new Object();
    sp.id  = id;
    sp.anh = address;
    sp.ten = ten;
    sp.gia = giaa;
    // sp.soluong = 1;
    return sp;
}

function hienthilenweb(dsspn){
    var html;
    html = '<div id="dssp_lv1">';
    for(var i =0 ; i < dsspn.length; i++){

        if(dsspn[i] != null){
            var htmlsp = doithanhhtml(dsspn[i]);
            html += htmlsp;
        }
    }
    html += '</div>';
    return html;
}
function doithanhhtml(sp){
    var html='';
    
    html += '<div class="top-food__items">';
    html +=     '<div class="content">';
    html +=       '<div class="img">';
    html +=         '<img src="'+sp.anh+'" alt="">';
    html +=       '</div>';
    html +=       '<h6>'+sp.ten+'</h6>';
    html +=       '<span>'+sp.gia+'</span>';
    html +=       '<div class="hover-show-btn">';
    html +=         '<a class="button d-flex">';
    html +=           '<i class="fa-solid fa-cart-shopping"></i>';
    html +=           '<button onclick="dat_mon(\''+sp.id+'\',\''+sp.anh+'\',\''+sp.ten+'\',\''+sp.gia+'\',)"> <p>Thêm giỏ</p></button>';
    html +=         '</a>';
    html +=       '</div>';
    html +=     '</div>';
    html +='</div>' ;
    return html;
}



var dssp_c =  JSON.parse(localStorage.getItem('dssp_cart'));
if(dssp_c == null)
    dssp_c = new Array();


function dat_mon(id,anh,ten,gia){
    alert("Đặt món thành công!");
    var spp = taogh(id,anh,ten,gia);
    dssp_c.push(spp);
    var js_dsspp = JSON.stringify(dssp_c);
    localStorage.setItem('dssp_cart',js_dsspp);
}