import { toast } from 'react-toastify';

const getStoredCart = ()=> {

    const storedListStr = localStorage.getItem('cart');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}


const addToStoredList = (id)=> {
    const storedList = getStoredCart();
    if(storedList.includes(id)){
        // Already Exist . do not Add to this list
        console.log(id);
        toast("already exist in the Cart")
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart',storedListStr)
        toast("Add To Cart");
    }
}


const getStoredWhishList = ()=> {
    const storedListStr = localStorage.getItem('wish-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}


const addToStoredWhishList = (id)=> {
    const storedList = getStoredWhishList();
    if(storedList.includes(id)){
        // Already Exist . do not Add to this list
        console.log(id);
        toast('Already exist in the WishList list');
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list',storedListStr)
        toast("Add To WishList");
    }
}

export {addToStoredList,addToStoredWhishList,getStoredCart,getStoredWhishList}