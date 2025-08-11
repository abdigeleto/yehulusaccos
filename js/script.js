document.addEventListener('DOMContentLoaded', () => {
  // Banking Details Toggle (if exists)
  const bankingBtn = document.getElementById('bankingBtn');
  const bankDetails = document.getElementById('bankDetails');
  if (bankingBtn && bankDetails) {
    bankingBtn.addEventListener('click', () => {
      bankDetails.classList.toggle('show');
    });
  }

  // Modal for Cover and Profile Photos
  const coverPhoto = document.getElementById('coverPhoto');
  const profilePhoto = document.getElementById('profilePhoto');
  const coverModal = document.getElementById('coverModal');
  const profileModal = document.getElementById('profileModal');
  const coverModalImg = document.getElementById('coverModalImg');
  const profileModalImg = document.getElementById('profileModalImg');
  const closeCover = document.getElementById('closeCover');
  const closeProfile = document.getElementById('closeProfile');

  if (coverPhoto && coverModal && coverModalImg && closeCover) {
    coverPhoto.addEventListener('click', () => {
      const coverImgSrc = coverPhoto.getAttribute('data-img');
      coverModalImg.src = coverImgSrc;
      coverModal.style.display = 'block';
    });

    closeCover.addEventListener('click', () => {
      coverModal.style.display = 'none';
    });

    coverModal.addEventListener('click', (e) => {
      if (e.target === coverModal) {
        coverModal.style.display = 'none';
      }
    });
  }

  if (profilePhoto && profileModal && profileModalImg && closeProfile) {
    profilePhoto.addEventListener('click', (e) => {
      e.stopPropagation();
      const profileImgSrc = profilePhoto.getAttribute('data-img');
      profileModalImg.src = profileImgSrc;
      profileModal.style.display = 'block';
    });

    closeProfile.addEventListener('click', () => {
      profileModal.style.display = 'none';
    });

    profileModal.addEventListener('click', (e) => {
      if (e.target === profileModal) {
        profileModal.style.display = 'none';
      }
    });
  }

// Share Button Script
document.querySelectorAll('.share-btn').forEach(button => {
  button.addEventListener('click', async () => {
    const name = button.dataset.name;
    const phone = button.dataset.phone;
    const website = button.dataset.website;

    const shareData = {
      title: `${name} Contact`,
      text: `Contact ${name}:\nPhone: ${phone}\nWebsite: ${website}`,
      url: website
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        alert(`Contact ${name}:\n${phone}\n${website}`);
      }
    } catch (err) {
      console.error('Sharing failed:', err);
    }
  });
});


  // Carousel
  const carouselTrack = document.getElementById('carouselTrack');
  const carouselContainer = document.querySelector('.carousel-container');
  const slideWidthPercent = 10;

  if (carouselTrack) {
    const images = carouselTrack.querySelectorAll('img');
    const slideCount = images.length;

    // Clone the first slide and append it to the end
    const firstClone = images[0].cloneNode(true);
    carouselTrack.appendChild(firstClone);

    let currentIndex = 0;

    function updateCarousel() {
      carouselTrack.style.transition = 'transform 0.5s ease-in-out';
      carouselTrack.style.transform = `translateX(-${currentIndex * slideWidthPercent}%)`;
    }

    function moveToNextSlide() {
      currentIndex++;
      updateCarousel();

      if (currentIndex === slideCount) {
        setTimeout(() => {
          carouselTrack.style.transition = 'none';
          currentIndex = 0;
          carouselTrack.style.transform = `translateX(0%)`;
        }, 500);
      }
    }

    let autoSlideInterval = setInterval(moveToNextSlide, 5000);

    // Pause on hover (optional)
    if (carouselContainer) {
      carouselContainer.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
      carouselContainer.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(moveToNextSlide, 5000);
      });
    }
  }

  // Make carousel clickable
  const clickableCarousel = document.getElementById('clickableCarousel');
  if (clickableCarousel) {
    clickableCarousel.style.cursor = 'pointer';
    clickableCarousel.addEventListener('click', () => {
      window.open('https://yehulusaccos.et/en/home', '_blank');
    });
  }
});
