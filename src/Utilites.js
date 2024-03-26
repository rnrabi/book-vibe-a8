const getLs = () => {
  const exist = localStorage.getItem("read");
  if (exist) {
    const existParse = JSON.parse(exist);
    return existParse;
  }
  return [];
};

const addLs = (id) => {
  const remainingLs = getLs();
  if(!remainingLs.includes(id)){
    alert('you are added successfully')
    remainingLs.push(id);
    localStorage.setItem("read", JSON.stringify(remainingLs));
  }
 alert('you all ready added')
};


const getWishListLs = () => {
  const exist = localStorage.getItem("wishList");
  if (exist) {
    const existParse = JSON.parse(exist);
    return existParse;
  }
  return [];
};

const addWishListLs = (id) => {
  const remainingLs = getLs();
  const reamingWishList = getWishListLs();
  if(!remainingLs.includes(id) && !reamingWishList.includes(id)){
    alert('you are added successfully')
    reamingWishList.push(id);
    localStorage.setItem("wishList", JSON.stringify(remainingLs));
  }
 alert('you all ready added')
};

export { getLs, addLs , getWishListLs ,addWishListLs };
