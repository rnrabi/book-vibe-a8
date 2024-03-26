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
    remainingLs.push(id);
    localStorage.setItem("read", JSON.stringify(remainingLs));
  }
 
};

export { getLs, addLs };
