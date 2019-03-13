let dogClients = [
  {
    id: `01`,
    name: `Pippy`,
    age: `3`,
    potty: `true`,
    fixed: `true`,
    breed: `Cockapoo`,
    gender: `F`,
    vaccine: `true`,
    dos: {
      checkin: {m:3, d:1, y:2019},
      checkout: {m:3, d:3, y:2019}
    },
    activity: {
      walking:
        {morning:
          {id: 0, name: `8:00am`, complete: false}
          // {h:8, m:0},
          evening:
          {id: 1, name: `5:00pm`, complete: false}
          // {h:17, m:0}}},
      {feeding:
        {morning:
            {id: 2, name: `8:30am`, complete: false}
          // {h:8, m:30},
          evening:
          {id: 3, name: `6:30pm`, complete: false}
          // {h:18, m:30}}},
      {medicaton: null},
    },
    contact: {
      phone: `647-456-9877`,
      email: `pippy@gmail.com`
    },
    notes: `Pippy doesn't get along with other dogs very well. Avoid encounters when possible.`,
  },
  {
    id: `02`,
    name: `Fluffers`,
    age: `2`,
    potty: `true`,
    fixed: `true`,
    breed: `Pug`,
    gender: `F`,
    vaccine: `true`,
    dos: {
      checkin: {m:3, d:6, y:2019},
      checkout: {m:3, d:10, y:2019}
    },
    activities: [
      {walking: {morning: {h:8, m:30}, evening: {h:17, m:30}}},
      {feeding: {morning: {h:9, m:0}, evening: {h:18, m:30}}},
      {medicaton:
        {type: `thyroid`},
        morning: {h:9, m:0},
        evening: {h:18, m:30}
      },
    ],
    contact: {
      phone: `647-555-6578`,
      email: `fluffers@gmail.com`
    },
    notes: `Make sure medication is taken with food. Enjoys belly scratches A LOT. `,
  },
  {
    id: `03`,
    name: `Bruce`,
    age: `6`,
    potty: `true`,
    fixed: `true`,
    breed: `Chihuahua`,
    gender: `M`,
    vaccine: `true`,
    dos: {
      checkin: {m:3, d:2, y:2019},
      checkout: {m:3, d:7, y:2019}
    },
    activities: [
      {walking: {morning: {h:7, m:0}, evening: {h:18, m:0}}},
      {feeding: {morning: {h:7, m:30}, evening: {h:18, m:30}}},
      {medicaton: null},
    ],
    contact: {
      phone: `416-906-7899`,
      email: `bruce@gmail.com`
    },
    notes: null,
  },
  {
    id: `04`,
    name: `Wayne`,
    age: `3`,
    potty: `true`,
    fixed: `true`,
    breed: `White Bull Terrior`,
    gender: `F`,
    vaccine: `true`,
    dos: {
      checkin: {m:3, d:12, y:2019},
      checkout: {m:3, d:14, y:2019}
    },
    activities: [
      {walking: {morning: {h:8, m:0}, evening: {h:17, m:0}}},
      {feeding: {morning: {h:9, m:0}, evening: {h:18, m:0}}},
      {medicaton: null},
    ],
    contact: {
      phone: `902-220-4635`,
      email: `wayne@gmail.com`
    },
    notes: `Scared of garbage cans.`,
  },
  {
    id: `05`,
    name: `Shelly`,
    age: `4`,
    potty: `true`,
    fixed: `false`,
    breed: `Dalmation`,
    gender: `F`,
    vaccine: `true`,
    dos: {
      checkin: {m:3, d:20, y:2019},
      checkout: {m:3, d:27, y:2019}
    },
    activities: [
      {walking: {morning: {h:8, m:0}, evening: {h:17, m:0}}},
      {feeding: {morning: {h:8, m:30}, evening: {h:17, m:30}}},
      {medicaton: null},
    ],
    contact: {
      phone: `687-622-4123`,
      email: `shelly@gmail.com`
    },
    notes: `Shelly can be a little nippy at other dogs. Ensure to give her a long enough walk to exhaust some of her energy.`,
  },
];


let thatOnePerson = dogClients.filter(person => person.id == `01`);


// var clients = dogClients.map(dc => dc.name);

// console.log(clients);

// document.getElementById('about').innerHTML = dogClients.map(dc => `<ol>${dc.activity}</ol>`).join('');

let toDo = document.getElementById('about');


toDo.addEventListener('click', event => {
  let theId = event.target.dataset.id;
  dogClients.forEach(oneTask => {
    if (oneTask.id == theId) {
      oneTask.complete = !oneTask.complete;
    }  })
})
