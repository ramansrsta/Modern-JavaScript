const PageState = function(){
    let currentState = new homeState(this);

    this.init = () => {
        this.change(new homeState);
    }

    this.change = (state) => {
        this.currentState = state;
    }
};

const homeState = function(page) {
    document.querySelector('#heading').textContent = null;
    document.querySelector('#content').innerHTML = `
        <div class="jumbotron">
        <h1 class="display-4">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
    </div>
    `;
}

const aboutState = function(page){
    document.querySelector('#heading').textContent = 'About Us';
    document.querySelector('#content').innerHTML = `
        <h1> This is a about page</h1>
    `;
}

const contactState = function(page){
    document.querySelector('#heading').textContent = 'Contact Us';
    document.querySelector('#content').innerHTML = `
        <h1> This is a contact page</h1>
    `;
}

//instancitate page state
const page = new PageState();

//int first state
page.init();

//ui vars
const home = document.getElementById('home'),
        about = document.getElementById('about'),
        contact = document.getElementById('contact');

home.addEventListener('click', (e) => {
    page.change(new homeState);
    e.preventDefault();
});


about.addEventListener('click', (e) => {
    page.change(new aboutState);
    e.preventDefault();
});

contact.addEventListener('click', (e) => {
    page.change(new contactState);
    e.preventDefault();
});