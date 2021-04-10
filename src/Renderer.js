import { Utils } from "./Utils";


export class Renderer {
    constructor(config) {
        this.renderTarget = document.querySelector(config.mount);
        this.currentPage = {
            number: null,
            index: null,
            paragraph: null
        }
    }

    initComponents() {
        const nebulaData = Utils.getGameSessionData();
        console.log(nebulaData);
        this.setRenderInformation(nebulaData);

        if (this.renderTarget) {
            this.renderTarget.innerHTML = `
            
            <story-panel>
                <span slot="text">${this.currentPage.paragraph}</span>
            </story-panel>

            `
        }
    }

    setRenderInformation(nebulaData) {
        this.currentPage = {
            number: nebulaData.gameData.currentPage,
            index: nebulaData.gameData.currentPage - 1,
        }

        this.currentPage.paragraph = nebulaData.storyData.pages[this.currentPage.index].text;
    }
}