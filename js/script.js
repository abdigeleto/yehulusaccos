document.addEventListener('DOMContentLoaded', function() {
  // =============================================
  // 1. COVER PHOTO (now works exactly like profile photo)
  // =============================================
  const coverImg = document.getElementById('coverImg');
  const coverModal = document.getElementById('coverModal');
  const coverModalImg = document.getElementById('coverModalImg');
  
  if (coverImg && coverModal && coverModalImg) {
    coverImg.addEventListener('click', function() {
      coverModalImg.src = this.getAttribute('data-img');
      coverModal.style.display = 'block';
    });
  }

  // =============================================
  // 2. PROFILE PHOTO (existing code - unchanged)
  // =============================================
  const profilePhoto = document.getElementById('profilePhoto');
  const profileModal = document.getElementById('profileModal');
  const profileModalImg = document.getElementById('profileModalImg');
  const closeProfile = document.getElementById('closeProfile');

  if (profilePhoto && profileModal && profileModalImg && closeProfile) {
    profilePhoto.addEventListener('click', function(e) {
      e.stopPropagation();
      profileModalImg.src = this.getAttribute('data-img');
      profileModal.style.display = 'block';
    });

    closeProfile.addEventListener('click', function() {
      profileModal.style.display = 'none';
    });

    profileModal.addEventListener('click', function(e) {
      if (e.target === profileModal) {
        profileModal.style.display = 'none';
      }
    });
  }

  // =============================================
  // 3. COVER MODAL CLOSE (new, matches profile)
  // =============================================
  const closeCover = document.getElementById('closeCover');
  if (closeCover && coverModal) {
    closeCover.addEventListener('click', function() {
      coverModal.style.display = 'none';
    });

    coverModal.addEventListener('click', function(e) {
      if (e.target === coverModal) {
        coverModal.style.display = 'none';
      }
    });
  }

  // =============================================
  // 4. EXISTING FUNCTIONALITY (unchanged)
  // =============================================

  // Banking Details Toggle
  const bankingBtn = document.getElementById('bankingBtn');
  const bankDetails = document.getElementById('bankDetails');
  if (bankingBtn && bankDetails) {
    bankingBtn.addEventListener('click', function() {
      bankDetails.classList.toggle('show');
    });
  }

  // Share Button
  document.querySelectorAll('.share-btn').forEach(function(button) {
    button.addEventListener('click', async function() {
      const name = button.dataset.name;
      const phone = button.dataset.phone;
      const website = button.dataset.website;

      const shareData = {
        title: name + "'s Contact",
        text: "Name: " + name + "\nPhone: " + phone,
        url: website
      };

      try {
        if (navigator.share) {
          await navigator.share(shareData);
        } else {
          alert("Name: " + name + "\nPhone: " + phone + "\nWebsite: " + website);
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
    const firstClone = images[0].cloneNode(true);
    carouselTrack.appendChild(firstClone);

    let currentIndex = 0;

    function updateCarousel() {
      carouselTrack.style.transition = 'transform 0.5s ease-in-out';
      carouselTrack.style.transform = 'translateX(-' + (currentIndex * slideWidthPercent) + '%)';
    }

    function moveToNextSlide() {
      currentIndex++;
      updateCarousel();

      if (currentIndex === slideCount) {
        setTimeout(function() {
          carouselTrack.style.transition = 'none';
          currentIndex = 0;
          carouselTrack.style.transform = 'translateX(0%)';
        }, 500);
      }
    }

    let autoSlideInterval = setInterval(moveToNextSlide, 5000);

    if (carouselContainer) {
      carouselContainer.addEventListener('mouseenter', function() {
        clearInterval(autoSlideInterval);
      });
      carouselContainer.addEventListener('mouseleave', function() {
        autoSlideInterval = setInterval(moveToNextSlide, 5000);
      });
    }
  }

  // Clickable Carousel
  const clickableCarousel = document.getElementById('clickableCarousel');
  if (clickableCarousel) {
    clickableCarousel.style.cursor = 'pointer';
    clickableCarousel.addEventListener('click', function() {
      window.open('https://yehulusaccos.et/en/home', '_blank');
    });
  }
});
