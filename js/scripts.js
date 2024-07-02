const container = document.querySelector(".container");
const qrCodebtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input");

const qrCodeimg =document.querySelector("#qr-code img");

//Eventos
function generateQrCode(){
      
      const qrCodeInputValue = qrCodeInput.value;

      console.log(qrCodeInputValue);

      if(!qrCodeInputValue) return;

      qrCodebtn.innerText ="Gerar código...";

      qrCodeimg.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

      container.classList.add("active");
      qrCodebtn.innerText ="Codigo Gerado!";

}

qrCodebtn.addEventListener("click", () => {
    generateQrCode();

})



