document.querySelector('.header-top').remove();
document.querySelector('.header-bottom').remove();

const header = document.querySelector('.br-header');
const newHeader = document.createElement('div');


newHeader.innerHTML = `

<div class="template-part-header-top">
            <nav class="nav-menu-principal">
                <ul>
                    <li><a href="./">Início</a></li>
                    <li><a href="./">Secretaria e Governo</a></li>
                    <li><a href="./">Portal da Transparência</a></li>
                    <li><a href="./">Covid-19</a></li>
                    <li><a href="./">Notícias</a></li>
                    <li><a href="./">Goiânia</a></li>
                    <li><a href="./">Agenda do Prefeito</a></li>
                </ul>
                <div class="acessibilidade">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon-acessibilidade" fill="none" height="17px" width="17px" viewBox="0 0 50 50" width="50"><g id="ACESSIBILIDADE"><g id="accessibility"><path d="M39.0269 10.2775C41.8649 10.2775 44.1656 7.9768 44.1656 5.13875C44.1656 2.30069 41.8649 0 39.0269 0C36.1888 0 33.8881 2.30069 33.8881 5.13875C33.8881 7.9768 36.1888 10.2775 39.0269 10.2775Z" fill="#fff"></path><path d="M31.3187 37.1531H26.18C26.18 41.3926 22.7113 44.8613 18.4719 44.8613C14.2324 44.8613 10.7637 41.3926 10.7637 37.1531C10.7637 32.9137 14.2324 29.445 18.4719 29.445V24.3063C11.3804 24.3063 5.625 30.0617 5.625 37.1531C5.625 44.2446 11.3804 50 18.4719 50C25.5633 50 31.3187 44.2446 31.3187 37.1531ZM39.0269 28.1603H34.2478L38.5387 18.7307C40.106 15.3135 37.588 11.4594 33.7853 11.4594H20.4246C18.3434 11.4594 16.4678 12.667 15.6199 14.5427L13.8984 19.1675L18.8316 20.5293L20.5017 16.5982H26.18L21.478 27.1326C19.9364 30.5498 22.4801 34.5838 26.2314 34.5838H39.0269V47.4306H44.1656V33.2991C44.1656 30.4728 41.8532 28.1603 39.0269 28.1603Z" fill="#fff"></path></g></g></svg>
                    <span class="text-acessbilidade">acessbilidade</span>
                </div>
            </nav>
        </div>
`;
header.appendChild(newHeader);