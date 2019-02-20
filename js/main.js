let dogClients = [
  {
    name: `Pippy`,
    age: `3`,
    potty: `Yes`,
    fixed: `Yes`,
    breed: `Cockapoo`,
    gender: `F`,
    vaccine: `Yes`,
    dos: {
      checkin: `March 1st`,
      checkout: `March 3rd`
    },
    activities: [
      {walking: {morning: `8:00`, evening: `17:00`}},
      {feeding: {morning: `8:30`, evening: `18:00`}},
      {medicaton: null},
    ],
    notes: `Pippy doesn't get along with other dogs very well. Avoid encounters when possible.`,
  },
  {
    name: `Fluffers`,
    age: `2`,
    potty: `Yes`,
    fixed: `Yes`,
    breed: `Pug`,
    gender: `F`,
    vaccine: `Yes`,
    dos: {
      checkin: `March 6th`,
      checkout: `March 10th`
    },
    activities: [
      {walking: {morning: `8:00`, evening: `17:30`}},
      {feeding: {morning: `8:30`, evening: `19:00`}},
      {medicaton: {type: `thyroid`, morning: `8:30`, evening: `19:00`}},
    ],
    notes: `Make sure medication is taken with food. Enjoys belly scratches A LOT. `,
  },
  {
    name: `Bruce`,
    age: `6`,
    potty: `Yes`,
    fixed: `Yes`,
    breed: `Chihuahua`,
    gender: `M`,
    vaccine: `Yes`,
    dos: {
      checkin: `March 2nd`,
      checkout: `March 7th`
    },
    activities: [
      {walking: {morning: `7:00`, evening: `16:00`}},
      {feeding: {morning: `8:00`, evening: `17:00`}},
      {medicaton: null},
    ],
    notes: null,
  },
  {
    name: `Wayne`,
    age: `3`,
    potty: `Yes`,
    fixed: `Yes`,
    breed: `White Bull Terrior`,
    gender: `F`,
    vaccine: `Yes`,
    dos: {
      checkin: `March 12th`,
      checkout: `March 14th`
    },
    activities: [
      {walking: {morning: `9:00`, evening: `17:30`}},
      {feeding: {morning: `9:30`, evening: `17:00`}},
      {medicaton: null},
    ],
    notes: `Scared of garbage cans.`,
  },
  {
    name: `Shelly`,
    age: `4`,
    potty: `Yes`,
    fixed: `No`,
    breed: `Dalmation`,
    gender: `F`,
    vaccine: `Yes`,
    dos: {
      checkin: `March 20th`,
      checkout: `March 27th`
    },
    activities: [
      {walking: {morning: `7:00`, evening: `17:00`}},
      {feeding: {morning: `7:30`, evening: `18:00`}},
      {medicaton: null},
    ],
    notes: `Shelly can be a little nippy at other dogs. Ensure to give her a long enough walk to exhaust some of her energy.`,
  },
];

console.log(dogClients);
