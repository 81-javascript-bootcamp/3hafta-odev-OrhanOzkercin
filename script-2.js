const petsModule = (() => {
  const _dataList = [
    {
      image: 'https://pet-uploads.adoptapet.com/1/6/b/406528149.jpg',
      name: 'Sam',
      type: 'Golden Retriever/St. Bernard Mix',
      sound: 'bark',
      soundText: 'Bark - type b',
      key: 'b',
    },
    {
      image: 'https://pet-uploads.adoptapet.com/0/f/3/462356648.jpg',
      name: 'Mellie',
      type: 'Domestic Shorthair',
      sound: 'meow',
      soundText: 'Meow - type m',
      key: 'm',
    },
    {
      image: './images/tiger.jpg',
      name: 'Mike',
      type: 'White tiger',
      sound: 'roar',
      soundText: 'Roar - type r',
      key: 'r',
    },
    {
      image: './images/wolf.jpg',
      name: 'Wolfie',
      type: 'Regular wolf',
      sound: 'howl',
      soundText: 'Howl - type h',
      key: 'h',
    },
  ];
  const $tbodyEl = document.querySelector('tbody');
  const $mainImage = document.querySelector('.main-image');

  const getButtons = () => {
    return document.querySelectorAll('button');
  };

  const getTableRows = () => {
    return document.querySelectorAll('tr');
  };

  const createPetElement = (pet) => {
    return `<tr id=${pet.name}>
    <td><img class='pet-image' src='${pet.image}' />
    </td>
    <td>${pet.name}</td>
    <td>${pet.type}</td>
    <td><button class='btn btn-warning' data-sound='${pet.sound}'>${pet.soundText}</button></td>
    </tr>`;
  };

  const addToTable = (content) => {
    $tbodyEl.innerHTML += content;
  };

  const putPetsInHtml = () => {
    for (let i = 0; i < _dataList.length; i++) {
      addToTable(createPetElement(_dataList[i]));
    }
  };

  const bindEvents = () => {
    const buttons = getButtons();
    const tableRows = getTableRows();
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', (event) => {
        event.stopPropagation();
        const soundId = event.target.dataset.sound;
        const soundElement = document.getElementById(soundId);
        if (soundElement) {
          soundElement.play();
        }
      });
    }

    tableRows.forEach((row) => {
      row.addEventListener('click', () => {
        tableRows.forEach((row) => (row.style.backgroundColor = ''));
        row.style.backgroundColor = '#b134b1';

        const img = row.querySelector('img');
        $mainImage.setAttribute('src', img.src);
      });
    });
    document.addEventListener('keypress', (e) => {
      _dataList.forEach((data) => {
        if (data.key === e.key) {
          const soundId = data.sound;
          const soundElement = document.getElementById(soundId);
          if (soundElement) {
            soundElement.play();
          }
        }
      });
    });
  };

  const init = () => {
    putPetsInHtml();
    bindEvents();
  };

  return {
    init,
  };
})();
