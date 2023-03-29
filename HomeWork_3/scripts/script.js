function iterativeHanoi(n) {
    const pegs = [
      [],
      [n],
      []
    ];
    let direction = 1; // Определяем начальное направление движения дисков
    for (let i = 1; i < Math.pow(2, n); i++) {
      const from = (i & i - 1) % 3 + 1; // Определяем номер исходного стержня
      const to = ((i | i - 1) + 1) % 3 + 1; // Определяем номер целевого стержня
      if (pegs[to].length === 0 || pegs[from][0] < pegs[to][0]) {
        const disk = pegs[from].shift();
        pegs[to].unshift(disk);
        console.log(`${from} -> ${to}`);
        direction = -direction;
      } else {
        i--;
        direction = -direction;
      }
    }
  }

  function recursiveHanoi(n, from, to, via) {
    if (n === 1) {
      console.log(`${from} -> ${to}`);
    } else {
      recursiveHanoi(n - 1, from, via, to);
      console.log(`${from} -> ${to}`);
      recursiveHanoi(n - 1, via, to, from);
    }
  }

  iterativeHanoi(3); // результат работы функции будет выведен в консоль
recursiveHanoi(3, 1, 3, 2); // результат работы функции будет выведен в консоль

  
