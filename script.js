const galleries = {
    'bronA': [
        { src: 'images/BrowningPistol.jpg', 
            title: 'Browning Hi-Power Pistol',
            desc: 'Pistolet Browning jest najszerzej używanym pistoletem, zarówno przez siły Osi, jak i Aliantów. Wynaleziony przez Johna Browninga, amerykańskiego inżyniera broni palnej, został wprowadzony do służby w 1935 r. Wielu personelom służby przyjęło go różnie, ze względu na ciężki spust, ale dużą pojemność magazynka.'
        },
        { src: 'images/ConcealedPistol.jpg', 
            title: 'Concealed Pistol',
            desc: 'Ukryty pistolet, lub pistolet kieszonkowy, to broń palna małego kalibru, którą agent może łatwo ukryć przy sobie. To, czego mu brakuje w sile ognia, nadrabia w ukryciu, dzięki możliwości dyskretnego schowania w ubraniu.'
        },
        { src: 'images/EnfieldPistol.jpg', 
            title: 'Enfield Service Revolver',
            desc: 'Rewolwer służbowy Enfield No.2 jest standardową bronią boczną dla brytyjskich żołnierzy, z 6-komorowym cylindrem i górnym mechanizmem przeładowania. Chociaż był standardowym wyposażeniem, fabryki Enfield nie były w stanie wyprodukować wystarczającej ilości dla żołnierzy Wspólnoty Narodów, więc jako zamiennik wydano również prawie identyczny pistolet Webley Mk. VI.'
        },
        { src: 'images/EnpenPistol.jpg', 
            title: 'Enpen Mk.1',
            desc: 'Enpen to jednostrzałowa broń kalibru .22 zaprojektowana tak, aby wyglądała jak tani długopis. Ma służyć do ucieczki z aresztu poprzez trzymanie „długopisu” w dłoni i wystrzelenie go do tyłu w stronę przesłuchującego lub do zaskoczenia przesłuchującego. Jeśli wystrzeli się go w kierunku ciała wroga, raportu nie można usłyszeć w sąsiednim pomieszczeniu'
        },
        { src: 'images/HDMPistol.jpg', 
            title: 'High Standard HDM Pistol',
            desc: 'Wybrany przez OSS, HDM to półautomatyczny pistolet strzelecki wyposażony w integralny tłumik dźwięku, przeznaczony do użytku w zamkniętym pomieszczeniu lub do eliminacji wartownika. Odgłosu nie można usłyszeć ponad ruchem ulicznym i można go pomylić z zamykaniem drzwi.'
        },
        { src: 'images/M1911A1Pistol.jpg', 
            title: 'M1911A1 Pistol',
            desc: 'Ta standardowa amerykańska broń boczna jest używana przez wszystkie rodzaje służb, w tym przez załogi lotnicze, żandarmerię wojskową, kierowców i jest ulubieńcem alianckich sił specjalnych. Smukły profil pistoletu również ułatwia ukrycie i jest dostarczany w małych ilościach europejskim siłom oporu.'
        },
        { src: 'images/MABPistol.jpg', 
            title: 'MAB Modèle D Pistol',
            desc: 'MAB to najnowocześniejszy pistolet używany przez Gendarmerie Nationale. Został on również przyjęty do służby niemieckiej przez Wehrmacht po podboju Francji.'
        },
        { src: 'images/MASPistol.jpg', 
            title: 'MAS Modèle 1873 Revolver',
            desc: 'Ten rewolwer był wydawany podoficerom podczas obu wojen światowych, a także Policji Narodowej i Gendarmerii Narodowej. Jest również szeroko używany przez Francuski Ruch Oporu.' 
        },
        { src: 'images/WelrodPistol.jpg', 
            title: 'Welrod Mk.IIA Pistol',
            desc: 'Welrod został zaprojektowany z myślą o ciszy. Jest to kompaktowa tuba zaprojektowana do użytku w uchwycie dwuręcznym — jedną ręką trzymamy chwyt pistoletowy/magazynek, a drugą podtrzymujemy lufę. Ze względu na skuteczność tłumika, strzału nie można rozpoznać z odległości większej niż 150 stóp (45 m). Welrod jest wyposażony w świecące przyrządy celownicze.'
        }
    ],
    'bronN': [
        { src: 'images/1.jpg', title: 'Wieżowce w nocy' },
        { src: 'images/2.jpg', title: 'Ulica w deszczu' }
    ],
    'pojazdyA': [
        { src: 'images/1.jpg', title: 'Sowa na gałęzi' },
        { src: 'images/2.jpg', title: 'Kot śpiący na poduszce' }
    ],
    'pojazdyN': [
        { src: 'images/1.jpg', title: 'Sowa na gałęzi' },
        { src: 'images/2.jpg', title: 'Kot śpiący na poduszce' }
    ]
};

function showGallery(category) {
    const galleryDiv = document.getElementById('gallery');
    galleryDiv.innerHTML = ''; // Czyścimy poprzednie zdjęcia

    galleries[category].forEach(item => {
        const container = document.createElement("div");
        container.classList.add("image-container");

        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.title;
        
        const info = document.createElement("div");
        info.classList.add("image-info");

        const title = document.createElement('h3');
        title.textContent = item.title;

        const desc = document.createElement('p');
        desc.textContent = item.desc;
        
        info.appendChild(title);
        info.appendChild(desc)
        container.appendChild(img);
        container.appendChild(info);

        galleryDiv.appendChild(container);
    });
}