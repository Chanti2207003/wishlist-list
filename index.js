const wishlistinput = document.getElementById('wishlist-input');
const addbutton=document.getElementById('addbutton');
const wishlistMain=document.getElementById('wishlist-main-container')

addbutton.addEventListener('click', ()=> {
    const userwishlist = wishlistinput.value.trim();
    if(!userwishlist){
        return;
    }
    addwishlist(userwishlist);
    wishlistinput.value='';
});

function addwishlist(userwishlist) {
    const wishlistcontainer = document.createElement('div');
    const wishlistinput = document.createElement('input');
    wishlistinput.type = 'checkbox';
    const wishlistspan = document.createElement('span');
    wishlistspan.innerText = userwishlist;
    
    
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'delete';

    wishlistcontainer.appendChild(wishlistinput);
    wishlistcontainer.appendChild(wishlistspan);
    wishlistcontainer.appendChild(deleteButton);

    wishlistinput.addEventListener('change',()=>{
        if(wishlistinput.checked){
            wishlistspan.style.textDecoration='line-through';
        }
        else{
            wishlistspan.style.textDecoration='none';
        }
    })

    deleteButton.addEventListener('click', () => {
        wishlistMain.removeChild(wishlistcontainer);
    });
    wishlistMain.insertBefore(wishlistcontainer,wishlistMain.firstElementChild);
}