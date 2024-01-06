'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const nav = document.querySelector('nav');
// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// forEach loop - replaced
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// implementing smooth scrolling to the first section

// step 1 add event listener to the button
// give event= e

// Button scrolling/////////////////
btnScrollTo.addEventListener('click', function (e) {
  // first need the cordiantes of section we want to scroll to.
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  // the one that was clicked
  // console.log(e.target.getBoundingClientRect());

  // current scroll position
  // console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

  // Scrolling (left value needed & top value(position from the top of the viewport))
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // dosent work cause top is always relative to the viewport but not to the document. Not to the top of the page.

  // to make animation nice and smooth gotta pass in an object instead of just one argument
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // modern way

  section1.scrollIntoView({ behavior: 'smooth' });
});

//////////////////////////////////////////////////////
// Page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add event to listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// /////////////////////////////////
// slectiing elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');

// console.log(allSections);

// document.getElementById('section--1');
// const allbtns = document.getElementsByTagName('button');
// console.log(allbtns);

// console.log(document.getElementsByClassName('btn'));

// // creating and inserting elements

// const message = document.createElement('div');
// message.classList.add('cookie-message');

// // message.textContent = 'We use cookies for improved functionality and analytics';
// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));

// // header.before(message);
// // header.after(message);

// // Delete Elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//     // message.parentElement.removeChild(message);
//   });

// // Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = 'Beautiful minialist logo';

// // non-standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.twitter-link');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// // Data attributes
// console.log(logo.dataset.versionNumber);

// // Classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c'); // not includes

// // Dont use
// logo.className = 'Keith';

// implementing smooth scrolling to the first section

// one click to smoothly scroll
// first way to show intresting stuff
// second way more modren

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   // need cordinates
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);

//   console.log(e.target.getBoundingClientRect());

//   console.log('Current scrool (X/Y)', window.pageXOffset, pageYOffset);

//   console.log(
//     'height/width viewport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );

//   window.scrollTo(s1coords);
// });

// implementing smooth scrolling to the first section
// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// // step 1 add event listener to the button
// // give event= e

// btnScrollTo.addEventListener('click', function (e) {
//   // first need the cordiantes of section we want to scroll to.
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);

//   // the one that was clicked
//   console.log(e.target.getBoundingClientRect());

//   // current scroll position
//   console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

//Scrolling (left value needed & top value(position from the top of the viewport))
// window.scrollTo(
//   s1coords.left + window.pageXOffset,
//   s1coords.top + window.pageYOffset
// );

// dosent work cause top is always relative to the viewport but not to the document. Not to the top of the page.

// to make animation nice and smooth gotta pass in an object instead of just one argument
// window.scrollTo({
//   left: s1coords.left + window.pageXOffset,
//   top: s1coords.top + window.pageYOffset,
//   behavior: 'smooth',
// });

// modern way

//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// // mouse enter event - like the hover event in css
// // fires whenever mouse enters a certain element
// // 2 more ways of listening to events

// const h1 = document.querySelector('h1');
// const alertH1 = function (e) {
//   alert('addEventLister: Great! You are reading the heading : D');

//   h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// Another way of attaching an eventlistener to an element
// using the on-event-property
// old way
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading : D');
// };

// rgb(255, 255, 255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// console.log(randomColor(0, 255));

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   // Stop propagation
//   e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('NAV', e.target, e.currentTarget);
//   },
//   false
// );

// const h1 = document.querySelector('h1');
// // going towards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// // Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// // not a direct parent/ no matter how far way it it.
// // multiple header elements with class header.
// // But only wanted to find one thats a parent element of an h1
// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // Going sideways: sibilings
// // can only access direct sibbling: previous and next one
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSiblingSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

// tabs.forEach(t => t.addEventListener('click', () => console.log('TAB')));

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // remove active classes for both
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation with event delegation
const handleHover = function (e) {
  console.log(this);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    // select the sibling elements/all the other links
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
// find the common parent element of all the links and including the logo there
// only working with links - nav__links but also want to work with the logo
// so using the parent container on which we will handle the event thatll bubble up with the event
// must bubble - mouseover/mouseout

// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });

// passing an "argument" into handler
// nav.addEventListener('mouseover', handleHover.bind(0.5));

// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });

// nav.addEventListener('mouseout', handleHover.bind(1));
// // bind returns a new funciton

// // Sticky Navigation

// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', function (e) {
//   console.log(window.scrollY);
//   // current scroll position
//   // as soon we reach first section it should nav sticky
//   // must determin position of first section
//   if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// the function
// will be called by 2 arguments
// entires - treshold entries
// observer
// const obsCallback = function (entires, observer) {
//   entires.forEach(entry => {
//     console.log(entry);
//     // IntersectionObs.Entry
//   });
// };

// // this is the object
// const obsOptions = {
//   // needs first a root perperty this is what the target is intersecting(section 1)
//   // this element is what we want our target element to interesct.
//   // null(viewport) is the alternative or write the element
//   root: null,
//   treshold: 0.2,
//   // 0% means callback will tigger each time the target element moves completly out of the view & as soon as it enters into the view.
//   // moving into the view and outta the view
//   // 1 - will be called when 100% of the target is visiable in the view port

//   // threshold is the percentage (10% ) of intersection at which the observer callback will be called (obsCallback)
// };

// // passing in a callback function and an object of options
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// // have to use this observer to obser a certain target the method is
// // called observe in yellow
// // then then the target element(section 1)
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
  // rootMargin: '-90px',
  // 90 is the height of the nav
  // when its 0% visiable/section is scrolled out of view.
});
headerObserver.observe(header);

// Reveal Sections - remove the class as we approach each section.

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Lazy Loading Images
const imgTargets = document.querySelectorAll('img[data-src]');
// console.log(imgTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;

  // replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.5)';
  // slider.style.overflow = 'visible';

  // 0%, 100%, 200%, 300%

  // Functions
  const createDots = function () {
    slides.forEach(function (s_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // starting positions 0%, 100%, 200%, 300%

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
