import { myAxios } from "./Helper";

export const addBookData = (book) => {
  return myAxios
    .post("/book/addBooks", book)
   
};

export const getAllBookData = () =>{ 
  return myAxios.get("/book/getAllBooks")
  .then((response) => response.data);
 // .then((response) => response.json());


 };
 export const deleteBook =(id)=>{
 
  return myAxios.delete("/book/deleteBookById/"+id )
 // .then((response) => response.data);
 };

 ///// Another wayyyyyy   
//  export const deleteBook = (id) => {
//   return myAxios.delete("/book/deleteBookById/"+id) 
//     .then((response) => {
//       return response.data;  
//     })
//     .catch((error) => {
//       console.log("Error deleting book:", error); 
//       throw error; 
//     });
// };

// export const updateBook=(id,book)=>{
//   console.log("id"+id)
//   console.log("book"+book)
// return myAxios.put("/book/updateBookById/"+id,book)
     
// };
//import myAxios from './myAxios';  // Import your axios instance

export const updateBookById = (id, book) => {
  console.log("Updating book with id:", id);
  console.log("Updating book with id:", book);
  return myAxios.put(`/book/updateBookById/${id}`, book);
};

