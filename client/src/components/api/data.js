const questionsData = [

  {
    
    id: 1,
    title: 'Spośród poniższych chorób, które najczęściej mogą pojawiać się u otyłych pacjentów?',
    answers: [
      'a. Choroby krążeniowo-oddechowe',
      'b. Zapalenie Kości u stawów',
      'c. Cukrzyca',
      'd. Choroby układu Moczowego',
      'e. Wszystkie odpowiedzi są prawidłowe.'
    ],
    right: 5
  },
  
  {
    id: 2,
    title: 'Jak zdefiniowałbyś otyłość?',
    answers: [
      'a. Zespół objawów klinicznych świadczący o nadmiernym nagromadzeniutkanki tłuszczowej w organizmie.',
      'b. Wyłącznie defekt estetyczny',
      'c. Przewlekły proces zapalny toczący się w organizmie',
      'd. Odpowiedzi a i c są prawidłowe.'
    ],
    right: 4
  },

  {
    id: 3,
    title: 'Dlaczego nie należy zalecać zmniejszenia ilości dotychczas stosowanej karmy bytowej w celu redukcji masy ciała?',
    answers: [
      'a. Uczucie głodu.',
      'b. Brak zbilansowania dawki pokarmowej.',
      'c. Niska skuteczność w terapii odchudzającej.',
      'd. Wszystkie odpowiedzi są prawidłowe.'
    ],
    right: 4
  },

  {
    id: 4,
    title: 'Ile spośród kotów, trafiających do Twojej codziennej praktyki, cierpi z powodu nadwagi/ otyłości?',
    answers: [
      'a. 5%',
      'b. 7%',
      'c. 9%',
      'd. 20%'
    ],
    right: 4
  },

  {
    id: 5,
    title: 'Jakie są najważniejsze cechy diety odchudzającej?',
    answers: [
      'a. Obniżony poziom energii, podwyższony poziom białka oraz odpowiednia kombinacja włókna zapewaniająca uczucie sytości.',
      'b. Niski poziom węglowodanów oraz niski poziom białka',
      'c. Dodatek nienasyconych kwasów tłuszczowych i obniżony poziom fosforu.',
      'd. Dodatek składników o niskiej strawności.'
    ],
    right: 1
  },

  {
    id: 6,
    title: 'Czy wiesz, jak często podczas wizyt omawiane są zagadnienia związane z masą ciała?',
    answers: [
      'a.	Raz na każde 2 wizyty',
      'b.	Raz na każde 10 wizyt',
      'c.	Raz na każde 100 wizyt',
      'd.	Raz na każde 1000 wizyt.'
    ],
    right: 3
  },

  {
    id: 7,
    title: 'Czy wiesz ile psów nigdy nie było ważonych?',
    answers: [
      'a. 2%',
      'b. 30%',
      'c. 50%',
      'd. 80%'
    ],
    right: 2
  },

  {
    id: 8,
    title: 'Co powinien zawierać kompleksowy plan odchudzania?',
    answers: [
      'a. Dieta odchudzająca, plan żywieniowy, aktywność fizyczna, regularne kontrole.',
      'b. Zmniejszenie ilości dotychczas stosowanej karmy oraz zwiększenie aktywności fizycznej.',
      'c. Zwiększenie aktywności fizycznej i regularne kontrole.',
      'd. Wyłącznie dieta odchudzająca.'
    ],
    right: 1
  },

  {
    id: 9,
    title: 'Która dietę Royal Canin zapewnia najskuteczniejszą terapię odchudzającą?',
    answers: [
      'a.	Hypoallergenic Moderate Calorie',
      'b.	CCN Weight Control',
      'c.	Obesity',
      'd.	Satiety Weight Management'
    ],
    right: 4
  },

  {
    id: 10,
    title: 'Wskaż 5 elementów standardowego badania klinicznego według WSAVA:',
    answers: [
      'a.	Temperatura, tętno, oddechy, ocena bólu, ocena żywieniowa.',
      'b.	Temperatura, tętno, masa ciała, węzły chłonne, okrywa włosowa.',
      'c.	Temperatura, tętno, wygląd skóry i błon śluzowych, masa ciała.',
      'a.	Temperatura, tętno, oddechy, wygląd skóry i błon śluzowych.'
    ],
    right: 1
  },

  {
    id: 11,
    title: 'Ile powinna wynosić tygodniowa utrata masy ciała u kotów podczas terapii odchudzającej?',
    answers: [
      'a.	5-10% m.c tygodniowo',
      'b.	0,5 -2% m.c tygodniowo',
      'c.	10-15% m.c. tygodniowo',
      'd.	Min 5% m.c tygodniowo'
    ],
    right: 2
  },

  {
    id: 12,
    title: 'Co można zaproponować zwierzęciu, które stale domaga się jedzenia (żebra):',
    answers: [
      'a. Zabawę',
      'b.	Spacer (psy)',
      'c.	Zabiegi pielęgnacyjne',
      'd.	Pieszczoty',
      'e.	Wszystkie odpowiedzi są prawidłowe.'
    ],
    right: 5
  },

];

function shuffle(array) {
  var ctr = array.length, 
      temp, 
      index;

  while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = array[ctr];
      array[ctr] = array[index];
      array[index] = temp;
  }
  return array;
}

shuffle(questionsData);

export default questionsData;