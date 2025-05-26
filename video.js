window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const videoContent = document.getElementById('video-content');
  
    setTimeout(() => {
      loader.classList.add('hidden');
      videoContent.classList.remove('hidden');
    }, 2000); // Adjust loading time if needed
  });
  