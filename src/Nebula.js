import { Utils } from "./Utils";
import { Renderer } from "./Renderer";

export class Nebula {
    constructor(config) {
        this.config = config;
        this.storyData = null;
        this.gameData = {};
        this.init();
        this.renderer = new Renderer(config);

    }

    async init() {
        this.storyData = await Utils.getJsonData(this.config.storyData.path);
        if ('local' === this.config.storage) {
            if (!window.localStorage.getItem('Nebula') || false === config.options.persist) {
                this.initializeGameData();
            } else {
                this.gameData = window.localStorage.getItem('Nebula');
            }
        }

        this.render(this.storyData, this.gameData);
    }

    initializeGameData() {
        window.localStorage.removeItem('Nebula');
        this.gameData.currentPage = 1;
        this.gameData.inventory = [];
        this.gameData.currentHealth = this.storyData.defaults.health;
        let nebula = {
            gameData:  this.gameData,
            storyData:  this.storyData
        }
        this.gameData = window.localStorage.setItem('Nebula', JSON.stringify(nebula));
        console.log(window.localStorage);
    }

    render() {
        this.renderer.initComponents();
    }

    resetGame() {
        if ('local' === this.config.storage) {
            window.localStorage.removeItem('Nebula');
        }
    }
};
