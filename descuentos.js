
const inputPrice = document.querySelector('#price');
//const inputDiscount = document.querySelector('#discount');
const inputCoupon = document.querySelector('#coupon')
const Btn = document.querySelector('#calcular');
const Result = document.querySelector('#Result');

Btn.addEventListener('click', calcularPrecioConDescuento);
//const arrayUobjecto = undefined; //['cupones': descuento] {}?

//ejemplo del cupon con objectos
/*const couponsObj = {
    'JuanDC_es_Batman': 30,
    '3456789': 25,
    '123': 15,
};.*/

//ejemplo cupones con arrays
const couponsList = [];
couponsList.push({
    name: 'juanDC_es_Batman',
    discount: 30,

});
couponsList.push({
    name: 'pero_es_un_secreto',
    discount: 25,

});
couponsList.push({
    name: 'no_le_digas_a_nadies',
    discount: 15,

});

function calcularPrecioConDescuento() {
    // (p * (100 - D)) / 100

    const price = Number(inputPrice.value); 
   // const discount = Number(inputDiscount.value);
   const coupon = inputCoupon.value;

   if(!price || !coupon) {
    Result.innerText = 'llena el formulario';
    return;
   } 
   let discount;

   function isCouponInArray(couponElement) {//{name,discount}
    return couponElement.name == coupon;
   }

  const couponInarray =  couponsList.find(isCouponInArray);//{}

  if (couponInarray) {
      discount = couponInarray.discount;
  } else {
    Result.innerText = 'El cupon no es valido';
    return;
  }

  console.log({
      coupon,
      discount,
      couponInarray,
      couponsList,
  });


/*logica con objectos
if(couponsObj[coupon]) {
    discount = couponsObj [coupon];
} else {
     Result.innerText = 'El cupon no es valido';
        return;  
}
}


*/

   /*
   cupones con switch
   switch (coupon) {
       case "JuanDC_es_batman":
       discount = 30;

       case "no_le_digas_a_nadies'":
        discount = 25;
       break;

       default: 
       Result.innerText = 'El cupon no es valido';
        return;  
           
   }*/
   const newprice = (price * (100 - discount)) / 100;

   Result.innerText = 'El nuevo precio con descuento es $' + 
   newprice;

   /*
   cupones con el if else if
   if (coupon == 'JuanDC_es_batman') {
       discount = 30;
   }else if (coupon == 'no_le_digas_a_nadies') {
       discount = 25;
   } else {
    Result.innerText = 'El cupon no es valido';
    return;  
   }
   const newprice = (price * (100 - discount)) / 100;

    Result.innerText = 'El nuevo precio con descuento es $' + 
    newprice;*/
   

/*console.log({price,discount});
//este codigo es del descuento
    if(!price || !discount) {
        Result.innerText = 'Por favor llena el formulario';
        return;
    }if (discount > 100) {
        Result.innerText = 'Aja ya quisieras no te vamos a dar nada el descuento no debe pasarse de 100';
        return;  
    }

    const newprice = (price * (100 - discount)) / 100;

    Result.innerText = 'El nuevo precio con descuento es $' + 
    newprice;*/

}














/*const precio = 100;
const descuento = 15;

function calcularporcentajes (precio,descuento) {


const porcentaje = (precio * descuento) /100;
console.warn( `el descuento de la compra es ${porcentaje}`
)
}
calcularporcentajes(350,50);//175*/