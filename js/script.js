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
    coverPhoto.addEventListener('click', (e) => {
      // Use data-img attribute for dynamic path
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

  // Share Contact Button
  const shareButton = document.querySelector('.share-btn');
  if (shareButton) {
    shareButton.addEventListener('click', async () => {
      const shareData = {
        title: 'Rod Ideas Contact',
        text: 'Contact Tesfamlak Hadgu:\nPhone: +251916131313\nWebsite: https://rodgraphics.com.et',
        url: 'https://rodgraphics.com.et'
      };
      try {
        if (navigator.share) {
          await navigator.share(shareData);
        } else {
          await navigator.clipboard.writeText(shareData.url);
          alert('Contact URL copied to clipboard!');
        }
      } catch (err) {
        console.error('Share failed:', err);
      }
    });
  }

  // Carousel
  const carouselTrack = document.getElementById('carouselTrack');
  const totalOriginalImages = 5; // number of unique images
  let currentIndex = 0;
  const slideWidthPercent = 10; // since each img is 10% width

  if (carouselTrack) {
    function updateCarousel() {
      carouselTrack.style.transform = `translateX(-${currentIndex * slideWidthPercent}%)`;
    }

    function moveToNextSlide() {
      currentIndex++;
      if (currentIndex >= totalOriginalImages) {
        carouselTrack.style.transition = 'none';
        currentIndex = 0;
        updateCarousel();
        setTimeout(() => {
          carouselTrack.style.transition = 'transform 0.5s ease-in-out';
          currentIndex++;
          updateCarousel();
        }, 50);
      } else {
        updateCarousel();
      }
    }

    let autoSlideInterval = setInterval(moveToNextSlide, 5000);

    // Pause on hover (optional)
    carouselTrack.parentElement.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    carouselTrack.parentElement.addEventListener('mouseleave', () => {
      autoSlideInterval = setInterval(moveToNextSlide, 5000);
    });
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
