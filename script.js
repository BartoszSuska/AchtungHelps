const galleries = {
    'bronA': [
        { src: 'images/1.jpg', desc: 'Piękny las' },
        { src: 'images/2.jpg', desc: 'Góry o zachodzie słońca' }
    ],
    'bronN': [
        { src: 'images/1.jpg', desc: 'Wieżowce w nocy' },
        { src: 'images/2.jpg', desc: 'Ulica w deszczu' }
    ],
    'pojazdyA': [
        { src: 'images/1.jpg', desc: 'Sowa na gałęzi' },
        { src: 'images/2.jpg', desc: 'Kot śpiący na poduszce' }
    ],
    'pojazdyN': [
        { src: 'images/1.jpg', desc: 'Sowa na gałęzi' },
        { src: 'images/2.jpg', desc: 'Kot śpiący na poduszce' }
    ]
};

function showGallery(category) {
    const galleryDiv = document.getElementById('gallery');
    galleryDiv.innerHTML = ''; // Czyścimy poprzednie zdjęcia

    galleries[category].forEach(item => {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.desc;
        
        const caption = document.createElement('p');
        caption.textContent = item.desc;
        
        galleryDiv.appendChild(img);
        galleryDiv.appendChild(caption);
    });
}