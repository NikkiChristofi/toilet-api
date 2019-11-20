import uuid from 'uuid/v1'

const test = [
  {
    'id': uuid(),
    'name': 'The Magpie',
    'location': [51.5170215, -0.078297],
    'classifications': [
      { 'type': 'male',
        'size': 's',
        'cubicles': 2,
        'urinals': true
      },
      { 'type': 'female',
        'size': 's',
        'cubicles': 2,
        'urinals': false
      }
    ],
    'comments': ''
  },
  {
    'id': uuid(),
    'name': 'The Glory',
    'location': [51.5362036, -0.0770533],
    'classifications': [
      { 'type': 'nonGendered',
        'size': 's',
        'cubicles': 2,
        'urinals': true
      },
      { 'type': 'nonGendered',
        'size': 's',
        'cubicles': 3,
        'urinals': false
      }
    ],
    'comments': 'have to climb a few stairs to the toilets'
  },
  {
    'id': uuid(),
    'name': `Mother Kelly's`,
    'location': [51.525493, -0.0822173],
    'classifications': [
      { 'type': 'nonGendered',
        'size': 's',
        'cubicles': 2,
        'urinals': false
      },
      { 'type': 'nonGendered',
        'size': 's',
        'cubicles': 0,
        'urinals': false
      }
    ],
    'comments': 'have to climb a few stairs to the toilets'
  }
]

export default test
