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
        console.log(id,'already exist in the read list');
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart',storedListStr)
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
        console.log(id,'already exist in the read list');
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list',storedListStr)
    }
}

export {addToStoredList,addToStoredWhishList,getStoredCart,getStoredWhishList}