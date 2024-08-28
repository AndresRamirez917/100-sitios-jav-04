async function getData(){
    const result = await fetch('http://jsonplaceholder.typicode.com/photos');
    const photos = await result.json();
    photos.forEach(element => {
        if(element.id <=3){
            const card = document.createRange().createContextualFragment(`
                    <div class="card">                
                        <p class="idtitle-json">${element.id}.<span>${element.title}</span></p>
                         <img src="${element.url}" alt="">
                         <p>In ipsum ac tincidunt volutpat lacinia. Egestas quis neque, volutpat elementum. Scelerisque massa aliquam tellus sit nibh. Dignissim ipsum viverra id cursus adipiscing.</p>                
                    </div> 
                `)
                const services_row = document.querySelector('.services-row');
                services_row.append(card)
        }
    });
}

getData()