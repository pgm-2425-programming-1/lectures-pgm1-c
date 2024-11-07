(() => {
    const $cardGrid = document.querySelector('#card-grid');
    const $modal = document.querySelector('#modal');


    // function generateHTMLForCard(item) {
        
    // }
    const generateHTMLForCard = (item) => {
        return `
            <div class="card" data-id="${item.id}">
                <img src="${item.link}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.info}</p> 
            </div>
        `
    }

    const generateHTMLForCards = (items) => {
        let html = "";
        for (const item of items) {
            html += generateHTMLForCard(item);
        }

        return html;
    }

    const generateModalForCard = (info) => {
        let $modal = `
                <div class="modal-content">
                    <h2 id="modalTitle">${info.name}</h2>
                    <p id="modalContent">${info.content}</p>
                    <button id="closeModal">Close</button>
                </div>
        
        `
        return $modal;
    }
    
    $cardGrid.innerHTML = generateHTMLForCards(data);

    const $cards = document.querySelectorAll('.card');
    
    for (const $card of $cards) {
        $card.addEventListener('click', (event) => {
            const id = parseInt(event.currentTarget.dataset.id);
            let clickedCard;
            for (const item of data) {
                if (item.id === id)
                {
                    clickedCard = item;
                }
            }
            
            if (clickedCard) {
                $modal.innerHTML = generateModalForCard(clickedCard);
                
                $modal.classList.add('visible');
                
            }
            
            const $closeModal = document.querySelector('#closeModal');
            $closeModal.addEventListener('click', () => {
                $modal.classList.remove('visible');
            })
        })
    }

    console.log("hallo");


})();