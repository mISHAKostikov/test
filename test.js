let _animal = null;
let _animal_mask = '';
let _popup__animal = document.querySelector('.popup__animal');
let _popup__answers = document.querySelectorAll('.popup__answer');
let _popup__meta_dialog = document.querySelector('.popup__meta_dialog');
let _popup__solution = document.querySelector('.popup__solution');
let _popup_content_index = 0;
let _timeList = document.querySelector('.time');


let animals = [
  {mask: '111111', name: '100 баллов; '},
  {mask: '000000', name: '0 баллов; '},
  {mask: '100000', name: '17 баллов; '},
  {mask: '010000', name: '17 баллов; '},
  {mask: '001000', name: '17 баллов; '},
  {mask: '000100', name: '17 баллов; '},
  {mask: '000010', name: '17 баллов; '},
  {mask: '000001', name: '17 баллов; '},
  {mask: '110000', name: '35 баллов; '},
  {mask: '101000', name: '35 баллов; '},
  {mask: '100100', name: '35 баллов; '},
  {mask: '100010', name: '35 баллов; '},
  {mask: '100001', name: '35 баллов; '},
  {mask: '011000', name: '35 баллов; '},
  {mask: '010100', name: '35 баллов; '},
  {mask: '010010', name: '35 баллов; '},
  {mask: '010001', name: '35 баллов; '},
  {mask: '001100', name: '35 баллов; '},
  {mask: '001010', name: '35 баллов; '},
  {mask: '001001', name: '35 баллов; '},
  {mask: '000110', name: '35 баллов; '},
  {mask: '000101', name: '35 баллов; '},
  {mask: '000011', name: '35 баллов; '},
  {mask: '111000', name: '50 баллов; '},
  {mask: '110100', name: '50 баллов; '},
  {mask: '110010', name: '50 баллов; '},
  {mask: '110001', name: '50 баллов; '},
  {mask: '101100', name: '50 баллов; '},
  {mask: '101010', name: '50 баллов; '},
  {mask: '101001', name: '50 баллов; '},
  {mask: '011100', name: '50 баллов; '},
  {mask: '011010', name: '50 баллов; '},
  {mask: '011001', name: '50 баллов; '},
  {mask: '010110', name: '50 баллов; '},
  {mask: '010101', name: '50 баллов; '},
  {mask: '010011', name: '50 баллов; '},
  {mask: '001110', name: '50 баллов; '},
  {mask: '001110', name: '50 баллов; '},
  {mask: '001101', name: '50 баллов; '},
  {mask: '001011', name: '50 баллов; '},
  {mask: '000111', name: '50 баллов; '},
  {mask: '011111', name: '90 баллов; '},
  {mask: '101111', name: '90 баллов; '},
  {mask: '110111', name: '90 баллов; '},
  {mask: '111011', name: '90 баллов; '},
  {mask: '111101', name: '90 баллов; '},
  {mask: '111110', name: '90 баллов; '},
  {mask: '001111', name: '70 баллов; '},
  {mask: '010111', name: '70 баллов; '},
  {mask: '011011', name: '70 баллов; '},
  {mask: '011101', name: '70 баллов; '},
  {mask: '011110', name: '70 баллов; '},
  {mask: '101011', name: '70 баллов; '},
  {mask: '100111', name: '70 баллов; '},
  {mask: '101101', name: '70 баллов; '},
  {mask: '101110', name: '70 баллов; '},
  {mask: '110011', name: '70 баллов; '},
  {mask: '110101', name: '70 баллов; '},
  {mask: '110110', name: '70 баллов; '},
  {mask: '111010', name: '70 баллов; '},
  {mask: '111001', name: '70 баллов; '},
  {mask: '111100', name: '70 баллов; '},
  
];
let popup_contents = [
  
  {
    question: 'Что больше весит, 1кг железа или 1кг пуха?',
    answers: ['1кг железа', 'они равны'],
  },
  {
    question: 'У блогера было загружено 26 видео. Все кроме последних 19 видео удалили модераторы. Сколько видео осталось?',
    answers: ['7', '9'],
  },
  {
    question: 'Сколько метров в сантиметре?',
    answers: ['100', '0.01'],
  },
  {
    question: 'Если бы я сказал, что Земля имеет форму квадрата и что елка фиолетовая, я должен был бы сказать, что гамбургер...',
    answers: ['Вредный', 'Полезный'],
  },
  {
    question: 'Шмурдик боится как мышей, так и тараканов.',
    answers: ['шмурдик боится мышей', 'шмурдик боится мышей больше, чем тараканов, но и тараканов боится тоже'],
  },
  {
    question: 'Если кислород соеденится с серой, которой будет с избытком, какую валентность проявит сера?',
    answers: ['3', '5'],
  },
];




function _animal_define() {
  _animal = animals.filter((_animal) => _animal.mask == _animal_mask)[0] ?? '';
}


function _popup__meta_dialog__on_click(event) {
  if (_animal != null) return;
  
  if (event.target == _popup__answers[0]) {
    _animal_mask += 0;
    popup_content_refresh();
  }
  else if (event.target == _popup__answers[1]) {
    _animal_mask += 1;
    popup_content_refresh();
  }
}




function popup_content_refresh() {
  if (_popup_content_index < popup_contents.length) {
    _popup__meta_dialog.children[0].textContent = popup_contents[_popup_content_index].question;
    _popup__meta_dialog.children[1].textContent = popup_contents[_popup_content_index].answers[0];
    _popup__meta_dialog.children[2].textContent = popup_contents[_popup_content_index].answers[1];
    _popup_content_index++;
    
    return;
  }
  
  _popup__meta_dialog.classList.add('popup__hidden');
  _animal_define();
  
  if (_animal) {
    _popup__animal.textContent = _animal.name;
    _popup__solution.classList.remove('popup__hidden');
  }
}


function main() {
  _popup__meta_dialog.addEventListener('click', _popup__meta_dialog__on_click);
  popup_content_refresh();
}




main();

let time = 0;
function function_time() {
  time = time + 1;
  _timeList.textContent = time;
};
//function checkTime() {
//if (_popup__solution.classList.contains('popup__hidden')==false)return 
  setInterval(function_time, 1000);
//}
//setInterval(checkTime, 1000)
