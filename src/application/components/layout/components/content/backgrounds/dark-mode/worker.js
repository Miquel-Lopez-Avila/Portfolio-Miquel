// worker.js
const random = (min, max) => {
  return min + Math.random() * (max - min);
};

function createStars({ size }) {
  const allStars = [];

  const buildStar = () => {
    const star = document.createElement('div');
    const o_size = random(0.3, 4);
    const o_co = `rgba(255,255,255,${random(0.2, 0.8)})`;

    star.style.position = 'absolute';
    star.style.top = `${random(0, 100)}%`;
    star.style.left = `${random(0, 100)}%`;
    star.style.width = `${o_size}px`;
    star.style.height = `${o_size}px`;
    star.style.zIndex = '1';
    star.style.borderRadius = '50%';
    star.style.backgroundColor = o_co;
    star.classList.add('a_star');
    star.style.boxShadow = `0 0 ${8 + o_size}px ${o_co}`;
    star.animate([
      { opacity: 0.3 },
      { opacity: 1 },
    ], {
      duration: random(900, 3000),
      easing: 'linear',
      iterations: Infinity,
      direction: 'alternate',
    });

    return star;
  };

  for (let i = 0; i < size; i++) {
    const star = buildStar();
    allStars.push(star);
  }

  return allStars;
}
