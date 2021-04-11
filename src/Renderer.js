import { Utils } from "./Utils";


export class Renderer {
    constructor(config) {
        this.renderTarget = document.querySelector(config.mount);
        this.currentPage = {
            number: null,
            index: null,
            paragraph: null,
            actions: null
        }
    }

    initComponents() {
        const nebulaData = Utils.getGameSessionData();
        console.log(nebulaData);
        this.setRenderInformation(nebulaData);

        if (this.renderTarget) {
            this.renderTarget.style.maxWidth = '20%'; 
            this.renderTarget.innerHTML = `
            
            <menu-panel>
            </menu-panel>
            <story-panel paper_background="gray">
                <p slot="text" >${this.currentPage.paragraph}</p>
            </story-panel>
            <action-panel>
            ${Object.keys(this.currentPage.actions).map((action) => {
                return `<action-item>
                    <p slot="action">${this.currentPage.actions[action].text}</p>
                    <a slot="page">${this.currentPage.actions[action].page}</a>
                </action-item>`     
            }).join("")}
            </action-panel>

            `
        }
    }

    setRenderInformation(nebulaData) {
        this.currentPage = {
            number: nebulaData.gameData.currentPage,
            index: nebulaData.gameData.currentPage - 1,
        }

        this.currentPage.paragraph = nebulaData.storyData.pages[this.currentPage.index].text;
        this.currentPage.actions = nebulaData.storyData.pages[this.currentPage.index].actions;
    }
}