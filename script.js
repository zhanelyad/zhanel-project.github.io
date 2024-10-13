
let currentSlide = 0;

function showSlide(index) {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    dots.forEach((dot) => {
        dot.classList.remove('active');
    });
    slides[index].classList.add('active');

    dots[index].classList.add('active');

    currentSlide = index;
}

document.querySelector('.menu-family-button a').addEventListener('click', function(e) {
    e.preventDefault();

    window.location.href = 'family.html'; 
});
function changeContent(period) {
    document.getElementById("btn1").classList.remove("active");
    document.getElementById("btn2").classList.remove("active");
    document.getElementById("btn3").classList.remove("active");


    if (period === "2012-2019") {
        document.getElementById("btn1").classList.add("active");
        document.getElementById("schoolImage").src = "img/school1.png"; 
        document.getElementById("schoolName").innerText = "Қ.Қарашаұлы атындағы орта мектебі";
        document.getElementById("schoolLocation").innerText = "Атырау облысы, Махамбет ауданы, Сарайшық селосы";
    } else if (period === "2019-2023") {
        document.getElementById("btn2").classList.add("active");
        document.getElementById("schoolImage").src = "img/school2.png"; 
        document.getElementById("schoolName").innerText = "Ж.Досмұхамбетов атындағы дарынды балаларға арналған облыстық лицей";
        document.getElementById("schoolLocation").innerText = "Атырау қаласы";
    } else if (period === "2023-present") {
        document.getElementById("btn3").classList.add("active");
        document.getElementById("schoolImage").src = "img/sdu.png"; 
        document.getElementById("schoolName").innerText = "SDU University. Computer Science major";
        document.getElementById("schoolLocation").innerText = "Алматы облысы, Қаскелең";
    }
}

function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    menu.classList.toggle('show');
}