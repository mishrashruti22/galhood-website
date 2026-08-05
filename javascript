<script>
// Apni saari video files yahan list karein, thumbnails ke same order me
var yappingVideos = [
  'videos/testimonial1.mp4',
  'videos/testimonial2.mp4',
  'videos/testimonial3.mp4',
  'videos/testimonial4.mp4',
  'videos/testimonial5.mp4'
];

var currentIndex = 0;
var modal = document.getElementById('yappingModal');
var modalVideo = document.getElementById('yappingModalVideo');

// thumbnails ko muted autoplay chalayein (preview ke liye)
document.querySelectorAll('.yapping-thumb video').forEach(function(v){
  v.play().catch(function(){});
});

function openModal(index){
  currentIndex = index;
  modalVideo.src = yappingVideos[currentIndex];
  modalVideo.play().catch(function(){});
  modal.classList.add('open');
}

function closeModal(){
  modal.classList.remove('open');
  modalVideo.pause();
}

document.querySelectorAll('.yapping-thumb').forEach(function(thumb){
  thumb.addEventListener('click', function(){
    var index = parseInt(thumb.dataset.index);
    openModal(index);
  });
});

document.getElementById('yappingClose').addEventListener('click', closeModal);

document.getElementById('yappingModalNext').addEventListener('click', function(){
  currentIndex = (currentIndex + 1) % yappingVideos.length;
  modalVideo.src = yappingVideos[currentIndex];
  modalVideo.play().catch(function(){});
});

document.getElementById('yappingModalPrev').addEventListener('click', function(){
  currentIndex = (currentIndex - 1 + yappingVideos.length) % yappingVideos.length;
  modalVideo.src = yappingVideos[currentIndex];
  modalVideo.play().catch(function(){});
});

// background pe click karke bhi close ho jaye
modal.addEventListener('click', function(e){
  if(e.target === modal){ closeModal(); }
});
</script>
