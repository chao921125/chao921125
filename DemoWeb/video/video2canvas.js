let VideoToCanvas = (function(window, document) {
  function VideoToCanvas(videoElement) {
    if(!videoElement) {return;}

    let canvas = document.createElement('canvas');
    canvas.width = videoElement.offsetWidth;
    canvas.height = videoElement.offsetHeight;
    let ctx = canvas.getContext('2d');

    let newVideo = videoElement.cloneNode(false);

    let timer = null;

    let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

    let cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

    function drawCanvas() {
      ctx.drawImage(newVideo, 0, 0, canvas.width, canvas.height);
      timer = requestAnimationFrame(drawCanvas);
    }

    function stopDrawing() {
      cancelAnimationFrame(timer);
    }

    newVideo.addEventListener('play', function() {
      drawCanvas();
    },false);
    newVideo.addEventListener('pause', stopDrawing, false);
    newVideo.addEventListener('ended', stopDrawing, false);

    videoElement.parentNode.replaceChild(canvas, video);

    this.play = function() {
      newVideo.play();
    };

    this.pause = function() {
      newVideo.pause();
    };

    this.playPause = function() {
      if(newVideo.paused) {
        this.play();
      } else {
        this.pause();
      }
    };

    this.change = function(src) {
      if(!src) {return;}
      newVideo.src = src;
    };

    this.drawFrame = drawCanvas;
  }

  return VideoToCanvas;

})(window, document);
