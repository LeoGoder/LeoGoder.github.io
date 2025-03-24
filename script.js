function createTriangle() {
    const triangle = document.createElement('div');
    triangle.classList.add('triangle');
    triangle.style.left = `${Math.random() * 100}vw`;
    triangle.style.top = `${Math.random() * 100}vh`; // Ajoutez cette ligne pour positionner les triangles verticalement
    triangle.style.animationDuration = `${Math.random() * 5 + 3}s`;
    document.querySelector('.triangle-container').appendChild(triangle);

    console.log('Triangle created:', triangle);

    setTimeout(() => {
        triangle.remove();
        console.log('Triangle removed:', triangle);
    }, 8000);
}

setInterval(createTriangle, 1000);
