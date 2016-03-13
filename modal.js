

function overlay(newModal){
   newModal.style.display = 'block';
   //newModal.style["z-index"] = '2000';
   console.log(newModal.childNodes[1]);
   newModal.childNodes[1].style.display='block';
}

function disappear(newModal){
   newModal.style.display = 'none';
   //newModal.style["z-index"] = '2000';
   console.log(newModal.childNodes[1]);
   newModal.childNodes[1].style.display='none';
}

   /*设置返回事件监听器 */
function handleBack(newModal){
   var back = newModal.getElementsByClassName("back");
   console.log(back);
   back[0].addEventListener('click',function () {
       disappear(newModal);
   },false);
}

function init() {
   var modal = document.querySelectorAll(".showModal");
   //console.log(modal[2]);
   for(let el=0;el<5;el++){
       console.log(el);
       modal[el].addEventListener('click',function(){
            console.log(this.childNodes);
            var name = this.childNodes[1].childNodes[3].firstChild.nodeValue;
            console.log(name);
            var newModal;
            switch (name) {
                case '郭亨':
                    newModal = document.querySelector(".guo");
                    overlay(newModal);
                    
                    break;
                case '何一波':
                    newModal = document.querySelector(".he");
                    overlay(newModal);
                    break;
                case '李子寒':
                    newModal = document.querySelector(".li");
                    overlay(newModal);
                    break;
                case '杨宗军':
                    newModal = document.querySelector(".yang");
                    overlay(newModal);
                    break;
                case '朱权':
                    newModal = document.querySelector(".zhu");
                    overlay(newModal);
                    break;
                
                default:
                    break;
            }
           handleBack(newModal);  
       },false);
   }
   

}


init();