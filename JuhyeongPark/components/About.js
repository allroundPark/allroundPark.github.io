export default function About(about){
    return `
    <section id="about">
        <div class="page-intro main bg-color">
            <div class="page-intro-inner">
                <div class="row">
                    <section class="column">
                        <img class="profile-image" src="/assets/profile/photo1.jpeg">
                    </section>
                    <section class="column">
                        <h1 class="title">${about.name}</h1>
                        <p>
                        ${about.desc}
                        </p>
                        <p>
                        ${about.desc2}
                        </p>
                        <p>
                            CV | <a href='https://scholar.google.com/citations?user=fvaU8fsAAAAJ&hl=en&oi=sra'><u> Google Scholar </u></a>
                        </p>
                        <a href="#projects"><button class="red-bt">↓ VIEW MY PROJECTS</button> 
                    </section>
                </div>
            </div>
        </div>    
    </section>`
}

