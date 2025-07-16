const menu = document.querySelector('.menu');
const output = document.querySelector('.output');

menu.addEventListener('click', event => {
    event.preventDefault();
    let target = event.target;

    switch(target.id){
        case 'home':
            output.textContent = `HOME: I ${target.id} triggered the event!`;
            break;
        case 'dashboard':
            output.textContent = `DASHBOARD: I ${target.id} triggered the event!`;
            break;
        case 'report':
            output.textContent = `DASHBOARD: I ${target.id} triggered the event!`;
            break;
    }
});