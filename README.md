# Nebula

Nebula is a Javascript framework made for easily creating and rendering "Choose your own adventure" text-based games.

## Installation

Download the main.js file and call it from a script tag in your html file.

## Usage

create your configuration object (or set it directly when calling Nebula) the instantiate Nebula, add a <div> with the same id as the one you chose for "mount" in your html and you're done.

```javascript
const config = {
    storage: 'local',
    options: {
        persist: true
    },
    storyData: {
        type: 'local',
        path: './story.json'
    },
    mount: '#app'
};

nebula = new Nebula(config);

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[ISC](https://choosealicense.com/licenses/ISC/)