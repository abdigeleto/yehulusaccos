document.addEventListener('DOMContentLoaded', () => {
  // Banking Details Toggle
  const bankingBtn = document.getElementById('bankingBtn');
  const bankDetails = document.getElementById('bankDetails');
  bankingBtn.addEventListener('click', () => {
    bankDetails.classList.toggle('show');
  });

  // Modal for Cover and Profile Photos
  const coverPhoto = document.getElementById('coverPhoto');
  const profilePhoto = document.getElementById('profilePhoto');
  const coverModal = document.getElementById('coverModal');
  const profileModal = document.getElementById('profileModal');
  const coverModalImg = document.getElementById('coverModalImg');
  const profileModalImg = document.getElementById('profileModalImg');
  const closeCover = document.getElementById('closeCover');
  const closeProfile = document.getElementById('closeProfile');

  coverPhoto.addEventListener('click', (e) => {
    if (e.target === coverPhoto) {
      coverModal.style.display = 'block';
      coverModalImg.src = 'images/cover.png';
    }
  });

  profilePhoto.addEventListener('click', (e) => {
    e.stopPropagation();
    profileModal.style.display = 'block';
    profileModalImg.src = 'images/profile.png';
  });

  closeCover.addEventListener('click', () => {
    coverModal.style.display = 'none';
  });

  closeProfile.addEventListener('click', () => {
    profileModal.style.display = 'none';
  });

  coverModal.addEventListener('click', (e) => {
    if (e.target === coverModal) {
      coverModal.style.display = 'none';
    }
  });

  profileModal.addEventListener('click', (e) => {
    if (e.target === profileModal) {
      profileModal.style.display = 'none';
    }
  });

  // Share Contact Button
  const shareButton = document.querySelector('.share-btn');
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
        navigator.clipboard.writeText(shareData.url).then(() => {
          alert('Contact URL copied to clipboard!');
        });
      }
    } catch (err) {
      console.error('Share failed:', err);
    }
  });

  // Carousel
  const carouselTrack = document.getElementById('carouselTrack');
  const totalImages = 5; // Original images (not counting clones)
  let currentIndex = 0;
  const slideWidth = 10; // 100% / 5 images = 20% per image

  function updateCarousel() {
    carouselTrack.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
  }

  function moveToNextSlide() {
    currentIndex++;
    if (currentIndex >= totalImages) {
      currentIndex = 0;
      carouselTrack.style.transition = 'none';
      updateCarousel();
      setTimeout(() => {
        carouselTrack.style.transition = 'transform 0.5s ease-in-out';
      }, 50);
    } else {
      updateCarousel();
    }
  }

  let autoSlideInterval = setInterval(moveToNextSlide, 5000);

  // 🚀 Make the carousel clickable
  const clickableCarousel = document.getElementById('clickableCarousel');
  if (clickableCarousel) {
    clickableCarousel.addEventListener('click', () => {
      window.open('https://yehulusaccos.et/en/home', '_blank');
    });
    clickableCarousel.style.cursor = 'pointer'; // Optional: show hand cursor
  }
});
