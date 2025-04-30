
// ----------------------------------------
let currentIndexOne = 0;
let currentIndexTwo = 0;

function nextSlide(carouselId) {
  const carousel = document.getElementById(carouselId);
  const items = carousel.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  if (carouselId === 'carouselOne') {
    currentIndexOne = (currentIndexOne + 1) % totalItems;
    updateCarousel(carouselId, currentIndexOne);
  } else {
    currentIndexTwo = (currentIndexTwo + 1) % totalItems;
    updateCarousel(carouselId, currentIndexTwo);
  }
}

function prevSlide(carouselId) {
  const carousel = document.getElementById(carouselId);
  const items = carousel.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  if (carouselId === 'carouselOne') {
    currentIndexOne = (currentIndexOne - 1 + totalItems) % totalItems;
    updateCarousel(carouselId, currentIndexOne);
  } else {
    currentIndexTwo = (currentIndexTwo - 1 + totalItems) % totalItems;
    updateCarousel(carouselId, currentIndexTwo);
  }
}

function updateCarousel(carouselId, index) {
  const carousel = document.getElementById(carouselId);
  const items = carousel.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  // Reset all items to inactive
  items.forEach(item => item.classList.remove('active'));

  // Set the active class on the current item
  items[index].classList.add('active');

  // Adjust the inner container position for the sliding effect
  const carouselInner = carousel.querySelector('.carousel-inner');
  carouselInner.style.transform = `translateX(-${index * 100}%)`;
}


 
 //------------faq section--------------------

 const faqItems = document.querySelectorAll(".faq-item");

 faqItems.forEach((item) => {
   const question = item.querySelector(".faq-question");
   question.addEventListener("click", () => {
     // Close all other open FAQ items
     faqItems.forEach((otherItem) => {
       if (otherItem !== item) {
         otherItem.classList.remove("open");
       }
     });

     // Toggle the clicked FAQ item
     item.classList.toggle("open");
   });
 });
   //-----------------------------------------------//
   const popup = document.getElementById('popupForm');

   function openPopup() {
     popup.style.display = 'flex';
   }

   function closePopup() {
     popup.style.display = 'none';
   }

   // Form submission handler
   document.getElementById('bookingForm').addEventListener('submit', function (e) {
     e.preventDefault();
     alert('Your booking request has been submitted successfully!');
     closePopup();
   });


  //  --------------------------------------
 
  $(".slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000, // 2000ms = 2s
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1, // Small screens: 1 card visible
      },
      600: {
        items: 2, // Medium screens: 2 cards visible
      },
      1000: {
        items: 3, // Large screens: 3 cards visible
      }
    }
  });