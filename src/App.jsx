import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import AddProducts from "./components/Products/AddProducts";
import CardBody from "./components/cards/CardBody";
import Button from "./components/button/Button";
import "./App.css";
import Headbar from "./components/header/Headbar";
import Icons from "./components/header/Icons";
import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";




const App = () => {
  const [items, setItem] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [addedItems, setAddedItem] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setItem(data));
    console.count("hi");
  }, []);
  function changingSrarchData(e) {
    setSearchValue(e.target.value);
  }
  const itmesFilter = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  function addItem(item) {
    item.addNumber = 1;
    const itemArr = addedItems;
    setAddedItem([...itemArr, item]);
  }

  function removeItem(item) {
    const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
    setAddedItem(newItems);
    }
  return (
    <div>
  
      <Headbar />
      <div className="body__container">
      
        <div className="nav">
          <Header />
          <div className="nav-right">
            <Search
              products={items}
              value={searchValue}
              onChangeData={changingSrarchData}
            />
            <Icons />
            <Button num={addedItems.length} click={setShowAddProducts} />
          </div>
        </div>
        
      <div>
      <Banner />
      </div>
      <div className="product-list">
      <Sidebar />

        {showAddProducts && (
          <AddProducts
            click={setShowAddProducts}
            items={addedItems}  
            removeItem={removeItem}
            setAddedItem={setAddedItem}
          />
        )}
        <CardBody
          products={itmesFilter}
          addItem={addItem}
          removeItem={removeItem}
          addedItems={addedItems}
        />

      </div>
        
      </div>
    </div>
  );
};

export default App;






























// import React, { useEffect, useState } from "react";
// import Header from "./components/header/Header";
// import Search from "./components/search/Search";
// import AddProducts from "./components/Products/AddProducts";
// import CardBody from "./components/cards/CardBody";
// import Button from "./components/button/Button";
// import "./App.css";
// import Headbar from "./components/header/Headbar";
// import Icons from "./components/header/Icons";
// import Banner from "./components/Banner";
// import Sidebar from "./components/Sidebar";
// import { Flex } from "@chakra-ui/react";
// import ProductsList from "./components/Products/ProductsList";

// // import globalStore from './store/globalStore'


// const App = () => {
//   // const { items,setItem } = globalStore()
//   const [items, setItem] = useState([]);
//   const [searchValue, setSearchValue] = useState("");
//   const [addedItems, setAddedItem] = useState([]);
//   const [showAddProducts, setShowAddProducts] = useState(false);

// //  function handleItemsFromAPI_fetch(data) {
// //     setitem(data);
// //   }

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products/")
//       .then((res) => res.json())
//       .then((data) => setItem(data));
//     console.count("hi");
//   }, []);
  
//   function changingSrarchData(e) {
//     setSearchValue(e.target.value);
//   }
//   const itmesFilter = items.filter((item) =>
//     item.title.toLowerCase().includes(searchValue.toLowerCase())
//   );

//   function addItem(item) {
//     item.addNumber = 1;
//     const itemArr = addedItems;
//     setAddedItem([...itemArr, item]);
//   }
//   // console.log(addedItems);
//   function removeItem(item) {
//     const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
//     setAddedItem(newItems);
//     // console.log(addedItems);
//   }
//   return (
//     <div>
     
//       <Headbar />
//       <div className="body__container">
      
//         <div className="nav">
//           <Header />
//           <Search
//               products={items}
//               value={searchValue}
//               onChangeData={changingSrarchData}
//             />
//           <div className="nav-right">
            
//             <Icons />
//             <Button num={addedItems.length} click={setShowAddProducts} />
//           </div>
//         </div>
        
//       <div className="banner">
//       <Banner />
//       </div>

//       <ProductsList
      
//       showAddProducts={showAddProducts} setShowAddProducts={setShowAddProducts}
//       itmesFilter={itmesFilter}
//       addedItems={addedItems}
//       removeItem={removeItem}
//       addItem={addItem}
//       />
        
        
//       </div>
//     </div>
//   );
// };

// export default App;
