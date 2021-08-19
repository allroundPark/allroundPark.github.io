import MaterialIcon from './MaterialIcon.js';
import Navbar from './Navbar.js';

export default function ProjectPage(project){
    document.querySelector('.container').innerHTML = `
        ${Navbar('project')}
        ${ProjectDetail(project)}
    `
}


export function ProjectDetail(d){
    return `
    <section>
    
        <div class="full">
            <img class="img-wrap"  src="${d.heroshot}">
        </div>
        <div class="full bg-color">
        <div class="row">
        <div class="information">

            <div class="rightContainer">
                <div class="type">
                    <p class="value">Type:</p>
                    <p class="highlight">${d.type}</p>
                </div>

                <div class="client">
                    <p class="value">Product:</p>
                    <p class="highlight">${d.product}</p>
                </div>

                <div class="role">
                    <p class="value">My Role:</p>
                    <p class="highlight">${d.role}</p>
                </div>

                <div class="tool">
                    <p class="value">Tools:</p>
                    <p class="highlight">${d.tools}</p>
                </div>
            </div>
        </div>
        </div>
        </div>

        <div class="page-intro">
            <div class="page-intro-inner">
                <h1 class="title">${d.title}</h1>
                <div class="project-desc">
                    <p>${d.desc}</p>
                </div>

                <div>
                    ${CustomButtons(d.link, d.linklabel)}
                </div>
            </div>
        </div>
        <br><br>
            <div class="wide-full" style="margin-top: 100px" id="finaldesign">
    
                ${FullImages(d.images)}
                ${WrappedImages(d.wrappedimages)}
            </div>
        </div>
        
    </section>
    `
}

export function ProcessItems(process){
    if (!process) {
        return "";
    }
    return process.map(d=>`
        <h3 class="subsubtitle">${d.step}</h3>
        <img class="img-wrap" src="${d.image}">
        ${d.caption}
    `).join('');
}

export function ReflectionItems(reflection){
    if (!reflection) {
        return "";
    }
    return reflection.map(d=>`
        <strong>${d.title}</strong>
        <p>
            ${d.desc}
        </p>
    `).join('');
}

export function FullImages(images){
    if (!images) {
        return "";
    }
    return images.map(d=>`
        <img class="img-wrap"  src="${d.image}">       
        <div class="project-short-desc">
            ${d.caption}
        </div>
    `).join('');
}

export function WrappedImages(images){
    if (!images) {
        return "";
    }else {
        return images.map(d=>`
            <div class="imageContainer">
                <img src="${d.image}" class="space">
            </div>
        `).join('');
    }
}

export function CustomButtons(link ,linklabel){
    if (!link) {
        return "";
    }else {
        return `
            <a href="${link}" target="_blank" download><button class="basic-bt">${linklabel}</button></a>
        `;
    }
}
