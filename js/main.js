let dogClients = [
  {
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
    activities: [
      {walking: {morning: {h:8, m:0}, evening: {h:17, m:0}}},
      {feeding: {morning: {h:18, m:0}, evening: {h:18, m:30}}},
      {medicaton: null},
    ],
    notes: `Pippy doesn't get along with other dogs very well. Avoid encounters when possible.`,
  },
  {
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
    notes: `Make sure medication is taken with food. Enjoys belly scratches A LOT. `,
  },
  {
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
    notes: null,
  },
  {
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
    notes: `Scared of garbage cans.`,
  },
  {
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
    notes: `Shelly can be a little nippy at other dogs. Ensure to give her a long enough walk to exhaust some of her energy.`,
  },
];

let pippySched = [
  {id: 0, name: morning walk, complete: false},
  {id: 0, name: morning meal, complete: false},
  {id: 0, name: evening walk, complete: false},
  {id: 0, name: evening meal, complete: false},
];

const allTasks = document.getElementById('allTasks');
const theTaskForm = document.getElementById('newTask');

theTaskForm.addEventListener('submit', event => {
  tasks.push({
    id: tasks.length,
    name: theTaskForm.task.value,
    complete: false
  });

  theTaskForm.task.value = '';

  printAllTasks();

  event.preventDefault();
});


allTasks.addEventListener('click', event => {

  if (event.target.matches('input')) {

    let theId = event.target.dataset.id;

    tasks.forEach(oneTask => {
      if (oneTask.id == theId) {
        oneTask.complete = !oneTask.complete;
      }
    });

    printAllTasks();
  }

});


function printAllTasks() {

  allTasks.innerHTML = tasks.map(oneTask =>
    `<li class="task${  (oneTask.complete) ? ' complete' : ''  }">
      <label>
        <input type="checkbox"
               data-id="${ oneTask.id }"
               name="task${ oneTask.id }"
               ${  (oneTask.complete) ? ' checked' : ''  }>
        ${ oneTask.name }
      </label>
    </li>` ).join('');

};

printAllTasks();
