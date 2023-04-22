import { observable, action, makeObservable } from 'mobx';

class GlobalStore {
  items = observable([]);

  constructor() {
    makeObservable(this, {
      items: observable,
      setItem: action,
      // ...add any other actions here
    });
  }

  setItem(data) {
    this.items.replace(data);
  }

  // ...add any other actions here
}

const store = new GlobalStore();

export default store;




// import { observable, action, makeObservable } from 'mobx';

// function globalStore() {
//   const items = observable([]);

//   function setItem(data) {
//     items.replace(data);
//   }

//   makeObservable({ items }, {
//     items: observable,
//     setItem: action,
//   });

//   // ...add any other actions here

//   return {
//     items,
//     setItem,
//     // ...add any other observable properties here
//   };
// }

// export default globalStore;


