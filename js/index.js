    const services_row = document.querySelector('.services-row')

    async function getData(){
        const result = await fetch('https://jsonplaceholder.typicode.com/photos/')
        const photos = await result.json()
        photos.forEach(element => {
            if(element.id <= 3){
                const card = document.createRange().createContextualFragment(`
                    <div class="card">                
                        <img src="${element.url}" alt="">
                        <p>In ipsum ac tincidunt volutpat lacinia. Egestas quis neque, volutpat elementum. Scelerisque massa aliquam tellus sit nibh. Dignissim ipsum viverra id cursus adipiscing.</p>                
                     </div>    
                    `)
                    services_row.append(card)
            }
        });
    }
    
    getData()
   