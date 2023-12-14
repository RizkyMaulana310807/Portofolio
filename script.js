document.addEventListener('DOMContentLoaded', function () {
    const btn1 = document.querySelector('.btn-1');
    const btn2 = document.querySelector('.btn-2');
    const card1 = document.querySelector('.card1');
    const card2 = document.querySelector('.card2');
    const card3 = document.querySelector('.card3');
    const card4 = document.querySelector('.card4');
    const card5 = document.querySelector('.card5');
    const card6 = document.querySelector('.card6');
    btn1.addEventListener('click', function () {
        btn1.style.backgroundColor = '#60b483';
        btn2.style.backgroundColor = '#2a6141';
        card1.style.display = 'block';
        card2.style.display = 'block';
        card3.style.display = 'block';
        card4.style.display = 'none';
        card5.style.display = 'none';
        card6.style.display = 'none';

    });

    btn2.addEventListener('click', function () {
        btn2.style.backgroundColor = '#60b483';
        btn1.style.backgroundColor = '#2a6141';
        card1.style.display = 'none';
        card2.style.display = 'none';
        card3.style.display = 'none';
        card4.style.display = 'block';
        card5.style.display = 'block';
        card6.style.display = 'block';
    });
});
