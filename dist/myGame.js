const config = {
    storage: 'local',
    options: {
        persist: false
    },
    storyData: {
        type: 'local',
        path: './story.json'
    },
    mount: '#app'
};

nebula = new Nebula(config);
