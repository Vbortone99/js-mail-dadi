
// const button = document.getElementById('btnStart');

// button.addEventListener('click',function(){
    //     let mail = document.getElementById('user-mail').value;
    //     console.log(mail)
    // })
    
    

const mailAccessList = ['Vincenzo','Giuseppe','Carlo','Luca'];
let button = document.querySelector('#btnStart')
button.addEventListener('click', function(){
    let mail = document.getElementById('user-mail').value;
    if(mail === 0 || [1]|| [2]||[3]){
        for(mail = mailAccessList[0]; mail === mailAccessList [0];mail++){
            const msgContainer = document.getElementById('d-mail');
            msgContainer.innerHTML = `La tua mail:<p><em>${mail} </em></p>`;
console.log(mail)
        }
    }
})
for(let i = [0]; i < mailAccessList.length; i++){
    mail = mailAccessList[0]||[1]||[2]||[3]
}