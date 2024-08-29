// fetch('https://rickandmortyapi.com/api/character')
// .then((response)=>response.json())
// .then((datos)=>{
//     console.log(datos)
//     console.log(datos.results)
//     datos.results.forEach(personaje => {
//         if(personaje.id <=3){
//             const card = document.createRange().createContextualFragment(`
//                 <div class="card">                
//                     <p class="idtitle-json">${personaje.id}.<span>${personaje.name}</span></p>
//                     <img src="${personaje.image}" alt="">
//                     <p>In ipsum ac tincidunt volutpat lacinia. Egestas quis neque, volutpat elementum. Scelerisque massa aliquam tellus sit nibh. Dignissim ipsum viverra id cursus adipiscing.</p>                
//                     </div> 
//             `);
//             const services_row = document.querySelector('.services-row')
//             services_row.append(card)
//         }
//     });
// })

// esta forma funciona con jsonplaceholder
 async function getData(){
     const result = await fetch('https://fakestoreapi.com/products/');
     const photos = await result.json();
     console.log(result)
     console.log(photos)
     photos.forEach(element => {
         if(element.id <=3){
             const card = document.createRange().createContextualFragment(`
                     <div class="card">  
                     <div class="description flex">
                        <p>${element.category}</p>
                        <p class="price">${element.price}</p>
                     </div>              
                      
                          <img src="${element.image}" alt="">
                          <p>In ipsum ac tincidunt volutpat lacinia. Egestas quis neque, volutpat elementum. Scelerisque massa aliquam tellus sit nibh. Dignissim ipsum viverra id cursus adipiscing.</p>                
                     </div> 
                 `)
                 const services_row = document.querySelector('.services-row');
                 services_row.append(card)
         }
     });
 }

 getData()



// esta forma funciona con rickandmorty api pero solo en el ejercicio
//  function getData(done){
//      const result = fetch("https://rickandmortyapi.com/api/character");
//      result
//      .then(response => response.json())
//      .then(data => {
//          done(data)
//      });
//  }
//      getData(data => {
//          console.log(data)
//          console.log(typeof data)
//         data.results.forEach(personaje => {
//              const card = document.createRange().createContextualFragment(`
//                               <div class="card">                
//                                   <p class="idtitle-json">${personaje.id}.<span>${personaje.name}</span></p>
//                                   <img src="${personaje.image}" alt="">
//                                   <p>In ipsum ac tincidunt volutpat lacinia. Egestas quis neque, volutpat elementum. Scelerisque massa aliquam tellus sit nibh. Dignissim ipsum viverra id cursus adipiscing.</p>                
//                                   </div> 
//                               `);
//                               const services_row = document.querySelector('.services-row')
//                               services_row.append(card)
//                              });
//      });


