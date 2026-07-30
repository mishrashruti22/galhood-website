<script>
document.querySelectorAll('.yapping-card').forEach(function(card){
  var video = card.querySelector('.yapping-video');
  var overlay = card.querySelector('.yapping-overlay');
  var previewSeconds = parseFloat(video.dataset.previewSeconds) || 4;

  video.play().catch(function(){});

  video.addEventListener('timeupdate', function(){
    if(video.currentTime >= previewSeconds){
      video.pause();
      overlay.classList.add('show');
    }
  });

  card.addEventListener('mouseleave', function(){
    if(!overlay.classList.contains('show')){
      video.currentTime = 0;
      video.play().catch(function(){});
    }
  });
});
</script>
