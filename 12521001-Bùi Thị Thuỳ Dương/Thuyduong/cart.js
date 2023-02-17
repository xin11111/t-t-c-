
function hienthilenweb(dsspn){
    var html='';
    for(var i =0 ; i <= dsspn.length; i++){
        if(dsspn[i]!=null && dsspn[i].id){
            var sp = dsspn[i];
            var htmlsp = doithanhhtml(sp);
            html += htmlsp;
        }
    }

    return html;
}

function doithanhhtml(sp){
    var html='';
     html += '<div class="cart-box" style = "margin-top: 10px;">';
     html += '<div class="d-flex justify-content-between">';
     html +=   '<div class="image-product" style="width: 20%;">';
     html +=     '<div class="img-cart" style="margin-right: 40px;">';
     html +=       '<img src="'+sp.anh+'" alt="">';
     html +=     '</div>';
     html +=   '</div>';
     html +=   '<div class="content-cart d-flex justify-content-between" style="width: 80%;">';
     html +=     '<div class="content-left">';
     html +=        '<h4>'+sp.ten+'</h4>';
     html +=        '<div class="quantity d-flex align-items-center">';
     html +=         '<p>Số lượng</p>';
     html +=         '<div class="buttons_added">';
     html +=         '<input class="minus is-form" type="button" onclick="tru(\''+sp.id+'\')" value="-">';
     html +=         '<input aria-label="quantity" class="input-qty" type="number" value="'+sp.soluong+'" id="'+sp.id+'">';
     html +=         '<input class="plus is-form" type="button" onclick="cong(\''+sp.id+'\')" value="+">';
     html +=         '</div>';
     html +=       '</div>';
     html +=     '</div>';
     html +=     '<div class="content-center">';
     html +=      '<h4 style="margin-bottom:48px;">Đơn giá</h4>';
     html +=      '<p>'+sp.gia+' VNĐ</p>';
     html +=    '</div>';
     html +=    '<div class="content-right d-flex">';
     html +=      '<div class="right-content">';
     html +=        '<h4 style="margin-bottom:48px;">Thành tiền </h4>';
     html +=        '<p>'+sp.gia*sp.soluong+' VNĐ</p>';
     html +=      '</div>';
            
     html +=    '</div>';
     html +=    '<div class="del-product d-flex align-items-center">';
     html +=      ' <button onclick="xoa(\''+sp.id+'\')"><a href="" >Xóa</a></button>';
     html +=     '</div>';
     html +=   '</div>';
     html += '</div>';
     html +='<div class="d-flex price">';
     html +=   '<div class="discount d-flex">';
     html +=     '<h4 style="margin-right: 8px;">Mã giảm giá</h4>';
     html +=    '<input type="text">';
     html +=  '</div>';
     html +=  '<div class="total d-flex align-items-center" style="margin-left: 48px;">';
    
     html +=   '</div>';
     html += '</div>';
     html += '</div>' ;
     
    return html;
}

function xoa(idsp){

    var dssp_local1 = localStorage.getItem('dssp_cart');
    var par_dssp = JSON.parse(dssp_local1);
    var vt;
    for(var i = 0 ; i < par_dssp.length; i++){
        if(par_dssp[i] != null )
            if(par_dssp[i].id == idsp){
                vt = i; break;
            }
                
        
            
    }
    for(var i = vt; i < par_dssp.length; i++){
        par_dssp[i] = par_dssp[i+1];
    }

 

    var js_dssp = JSON.stringify(par_dssp);
    localStorage.setItem('dssp_cart',js_dssp);
}
// var tong = cong(id);
function cong(id) {
    var dssp=localStorage.getItem('dssp_cart');
    var dsspjo= JSON.parse(dssp);
    for(var i = 0 ;i<dsspjo.length;i++){
        if(dsspjo[i].id == id){
            var t=document.getElementById(id) .value;// lay value cua sl
            document.getElementById(id) .value=parseInt(t)+1;//cong them dv cho sl 
            dsspjo[i].soluong ++;
            // tong = t * dsspjo[i].gia;
        }
    }
    var js_dssp = JSON.stringify(dsspjo);
    localStorage.setItem('dssp_cart',js_dssp) 
    location.reload();
}
function tru(id) {
    var dssp=localStorage.getItem('dssp_cart');
    var dsspjo= JSON.parse(dssp);
    for(var i = 0 ;i<dsspjo.length;i++){
        if(dsspjo[i].id == id ){
            var t=document.getElementById(id) .value;// lay value cua sl
            if(parseInt(t) >1){
                document.getElementById(id) .value=parseInt(t)-1;//cong them dv cho sl 
               dsspjo[i].soluong --;
            }
            
            // if(parseInt(t)==1) {
            //     var x = confirm("Bạn muốn bỏ sản phẩm này ?");
            //     if(x==true){
            //         xoa(dsspjo[i].id);
            //         alert("xoá thành công ");
            //     }

                    
        }
            
        }

    var js_dssp = JSON.stringify(dsspjo);
    localStorage.setItem('dssp_cart',js_dssp) 
    location.reload();
}

