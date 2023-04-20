// light navbar on scrolling down
const nav = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

const bordBtn = document.querySelector('.bord');
bordBtn.addEventListener('click', () => {
  nav.classList.add('scrolled');
});

// functions

// generate a random number between 2 integers inclusive
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// create a courses database
const coursesDatabase = [
  {
    image: 'images/courses/1.jpg',
    name: 'Development',
    highlight: 'Create professional-looking websites and web applications.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi assumenda quod at quaerat quo dolorum. Nobis nihil, nulla ullam expedita.',
  },
  {
    image: 'images/courses/2.jpg',
    name: 'Business',
    highlight: 'A broad understanding of the various aspects of running a business.',
    description: 'Dolor sit, amet consectetur adipisicing elit. Nobis nihil, nulla ullam expedita dolores in officiis vitae necessitatibus animi autem sed nesciunt assumenda soluta consequatur.',
  },

  {
    image: 'images/courses/3.jpg',
    name: 'Finance and Accounting',
    highlight: 'A strong foundation in financial management, accounting principles, and investment analysis.',
    description: 'Koind sit amet consectetur adipisicing elit. Aliquid necessitatibus sint ipsa, molestias sed eum nostrum animi sapiente alias, perspiciatis ea praesentium facilis expedita voluptas.',
  },
  {
    image: 'images/courses/4.jpg',
    name: 'IT and Software',
    highlight: 'A strong foundation in computer science, software development, and information technology.',
    description: 'Consectetur adipisicing elit. Debitis ea expedita laborum aspernatur odit maxime obcaecati fugit, sequi illo? Harum labore minus voluptas fugit dolorem expedita nihil.',
  },
  {
    image: 'images/courses/5.jpg',
    name: 'Office Productivity',
    highlight: 'A strong foundation in essential office skills, including time management, communication, project management, and customer service.',
    description: 'Sit amet consectetur adipisicing elit. Minus aperiam, numquam architecto tempora magnam et, necessitatibus tempore nemo quisquam, sunt quas delectus repellat corrupti! Non, ipsum quisquam.',
  },
  {
    image: 'images/courses/6.jpg',
    name: 'Personal Development',
    highlight: 'A strong foundation in essential life skills, including goal setting, time management, communication, leadership, emotional intelligence, stress management, and personal branding. ',
    description: 'Amet consectetur adipisicing elit. Dolore laborum, sunt quis eaque vitae omnis quod pariatur cum maiores? Debitis voluptatem eos assumenda tenetur cumque.',
  },
  {
    image: 'images/courses/7.jpg',
    name: 'Design',
    highlight: 'A strong foundation in graphic design, web design, and user experience design.',
    description: 'Adipisicing elit. Veritatis quam pariatur, sequi cupiditate consequuntur, dolor voluptatem voluptas consequatur accusamus , ex similique iste aperiam.',
  },
  {
    image: 'images/courses/8.jpg',
    name: 'Marketing',
    highlight: 'A strong foundation in marketing, including market research, product development, branding, and advertising.',
    description: 'Perspiciatis nobis et nihil rem amet ut iusto quis architecto, recusandae, fugiat quaerat porro. Laboriosam ut libero possimus, ratione magni illo.',
  },
  {
    image: 'images/courses/9.jpg',
    name: 'Health and Fitness',
    highlight: 'A strong foundation in health and fitness, including nutrition, exercise, and stress management.',
    description: 'Saepe error, voluptatem ab similique aspernatur beatae, nisi facilis a nostrum veritatis ut, reiciendis obcaecati et autem sapiente quo? Exercit quia voluptate cupiditate.',
  },
  {
    image: 'images/courses/10.jpg',
    name: 'Photography',
    highlight: 'A strong foundation in photography, including composition, lighting, and editing.',
    description: 'Mollitia sit, quis perferendis, voluptatibus quibusdam asperiores veniam accusamus consequatur sequi iusto aperiam assumenda obcaecati quas facere, aspernatur illum excepturi aut.',
  },
  {
    image: 'images/courses/11.jpg',
    name: ' Teaching and Academics',
    highlight: 'A strong foundation in teaching, including lesson planning, classroom management, and student assessment.',
    description: 'Dignissimos, sed nostrum blanditiis esse expedita, eos quis quibusdam odio fugit voluptatem nemo eius maiores assumenda error, alias id omnis cupiditate animi.',
  },
  {
    image: 'images/courses/12.jpg',
    name: 'Music',
    highlight: 'A strong foundation in music, including music theory, composition, and performance.',
    description: ' Odit magnam quaerat atque ad saepe repellendus consectetur dolore necessitatibus. Impedit, dolorem asperiores! Magni non doloribus nisi vero, commodi illo dolore a? Autem, voluptas nulla.',
  },
];

// create array with 5 ramdon integers
// to be used as index to SHUFFLE through the coursesDatabase
const sixRamdonIndexes = [];
sixRamdonIndexes.push(random(0, coursesDatabase.length - 1));
while (sixRamdonIndexes.length < 6) {
  const ramdonIndex = random(0, coursesDatabase.length - 1);
  if (sixRamdonIndexes.includes(ramdonIndex) === false) {
    sixRamdonIndexes.push(ramdonIndex);
  }
}

// ----------------

const featCourses = document.getElementById('courses');
// Section heading
const h2 = document.createElement('h2');
h2.className = 'card-heading';
h2.textContent = 'Our Featured Courses';
featCourses.appendChild(h2);
// litle line between
const span = document.createElement('span');
featCourses.appendChild(span);
// create a card-gird ul list for courses
const ul = document.createElement('ul');
ul.id = 'courses-grid';
featCourses.appendChild(ul);

// create a cards  (li items
for (let i = 0; i < 6; i += 1) {
  const li = document.createElement('li');
  li.classList = 'courses-card';
  if (i > 1) { // class only for 3rd to 6th card
    li.classList = 'courses-card more-mobile';
  }
  ul.appendChild(li);

  // create elements & put in the cards li
  // card image container
  const divImg = document.createElement('div');
  divImg.classList = 'img-container';
  li.appendChild(divImg);
  // card image
  const img = document.createElement('img');
  img.src = coursesDatabase[sixRamdonIndexes[i]].image;
  divImg.appendChild(img);
  // div for card info
  const div = document.createElement('div');
  div.className = 'card-info';
  li.appendChild(div);
  // heading - course NAME
  const h3 = document.createElement('h3');
  h3.textContent = coursesDatabase[sixRamdonIndexes[i]].name;
  div.appendChild(h3);
  // sub-heading "course highlight"
  const p1 = document.createElement('p');
  p1.classList = 'p1';
  p1.textContent = coursesDatabase[sixRamdonIndexes[i]].highlight;
  div.appendChild(p1);
  // short description
  const p2 = document.createElement('p');
  p2.classList = 'p2';
  p2.textContent = coursesDatabase[sixRamdonIndexes[i]].description;
  div.appendChild(p2);
}
const button = document.createElement('button');
button.id = 'see-more';
button.innerHTML = 'more <i class="fa-solid fa-angle-down text-danger"></i>';
featCourses.appendChild(button);

button.addEventListener('click', () => {
  const moreCards = document.querySelectorAll('.more-mobile');
  moreCards.forEach((card) => {
    card.classList.remove('more-mobile');
  });
  button.remove();
});
