const modals = () => {
    function bindModal(btnSelector, modalSelector){
        const btn = document.querySelectorAll(btnSelector);
        const modal = document.querySelector(modalSelector)
        const close = document.querySelector(closeSelector)

        btn.forEach(item => {
            item.addEventListener('click', () =>{
              modal.style.display = 'blok'
            })
        })


        close.addEventListener('click', () =>{
           modal.style.display = 'none'
        })


        close.addEventListener('click', (e) =>{
            if(e.target === modal){
                modal.style.display = 'none'
            }
            
         })
    
   
    }

   bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_close')
   bindModal('.popup_link', '.popup', '.popup_close')





}


export default modals;
