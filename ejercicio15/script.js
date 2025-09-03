const ContenedorBtn = document.getElementById('container');

ContenedorBtn.addEventListener('click', (event) => {
    clickedElement = event.target;
    
    if (!clickedElement.matches('.tab-button')){return;};
    
    if (clickedElement.classList.contains('active')){return;};
    
    const section = document.getElementById(clickedElement.dataset.tab);
    
    const btns = document.querySelectorAll('#container button');
    btns.forEach(btn => {
        btn.classList.remove('active');
        let sectionRecall = document.getElementById(btn.dataset.tab);
        sectionRecall.classList.remove('active');
    });
    
    section.classList.add('active');
    if(clickedElement.dataset.tab == 'tab1'){
        clickedElement.classList.add('active');
    }
    else if (clickedElement.dataset.tab == 'tab2'){
        clickedElement.classList.add('active');
        
    }else if (clickedElement.dataset.tab == 'tab3'){
        clickedElement.classList.add('active');
    };
});