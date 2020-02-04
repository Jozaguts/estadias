let toggleBtn = document.getElementById('toggleBtn')

let toggleStatus = false;
function toggleClass() {
    let navBar = document.getElementById('navBar')
    if(!toggleStatus) {
        navBar.classList.remove('d-none');
        toggleStatus = !toggleStatus;
    }else {
        navBar.classList.add('d-none');
        toggleStatus = !toggleStatus;
    }
}
toggleBtn.addEventListener('click',toggleClass);