class ProjectInfo {
    projectBanner = "";
    projectName = "";
    projectRelease = "";
    projectGame = "";
    projectPlatform = "";
    gallery = [];
    description = "";
}

let projectInfo = null;

var projectName = "";
var jsonData = null;

const infoRoot = document.querySelector("div#project-info");

const jsonRequest = fetch("https://notenoughphotons.dev/project_information.json")
.then((request) => request.json());

jsonRequest.then((data) => onInfoRead(data));

function setProject(projectName) {
    this.projectName = projectName;
}

function onInfoRead(data) {
    var rawPageName = location.href.split("/").slice(-1).toString();
    var pageName = rawPageName.split(".")[0];
    setProject(pageName);

    const stringData = JSON.stringify(data);
    const obj = JSON.parse(stringData);
    projectInfo = obj[projectName];
    
    const bannerElement = document.querySelector("img#project-banner");
    const nameElement = document.querySelector("p#name");
    const releaseElement = document.querySelector("p#release");
    const gameElement = document.querySelector("p#game");
    const platformElement = document.querySelector("p#platform");
    const description = document.querySelector("p#description");
    const galleryHeader = document.querySelector("h1.gallery-header");
    
    bannerElement.src = projectInfo.projectBanner;
    nameElement.textContent = projectInfo.projectName;
    releaseElement.textContent = "Release Date: " + projectInfo.projectRelease;
    gameElement.textContent = "Game: " + projectInfo.projectGame;
    platformElement.textContent = "Platform: " + projectInfo.projectPlatform;
    description.textContent = projectInfo.description;

    nameElement.style.display = projectInfo.projectName != null ? "block" : "none";
    releaseElement.style.display = projectInfo.projectRelease != null ? "block" : "none";
    gameElement.style.display = projectInfo.projectGame != null ? "block" : "none";
    platformElement.style.display = projectInfo.projectPlatform != null ? "block" : "none";
    description.style.display = projectInfo.description != null ? "block" : "none";
    galleryHeader.style.display = projectInfo.gallery != null ? "block" : "none";

    galleryController_init();
}