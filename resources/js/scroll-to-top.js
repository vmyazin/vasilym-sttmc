class ScrollToTop {
  constructor () {
    this.scrollToTopEl.addEventListener('click', this.doScrollToTop.bind(this, 0, 1250))
    window.addEventListener('scroll', this.showScrollToTop.bind(this, -500))
  }

  get bodyEl () {
    if (!this.bodyEl_) {
      this.bodyEl_ = document.querySelector('body')
    }
    return this.bodyEl_
  }

  get scrollToTopEl () {
    if (!this.scrollToTopEl_) {
      this.scrollToTopEl_ = document.getElementsByClassName("scroll-to-top")[0]
    }
    return this.scrollToTopEl_
  }

  doScrollToTop (to, duration) {
    // to = pixel postion from top of body
    // duration = animation time in miliseconds

    const element = document.scrollingElement || document.documentElement,
          start = element.scrollTop,
          change = to - start,
          startDate = +new Date(),
          // t = current time
          // b = start value
          // c = change in value
          // d = duration
          easeInOutQuad = function(t, b, c, d) {
              t /= d/2;
              if (t < 1) return c/2*t*t + b;
              t--;
              return -c/2 * (t*(t-2) - 1) + b;
          },
          animateScroll = function() {
              const currentDate = +new Date();
              const currentTime = currentDate - startDate;
              element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));

              if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
              }
              else {
                element.scrollTop = to;
              }
          }

    animateScroll();
  }

  showScrollToTop (offsetFromTop) {
    let viewportOffset = this.bodyEl.getBoundingClientRect();
    // these are relative to the viewport
    let top = viewportOffset.top;
    if (top < offsetFromTop) {
      this.scrollToTopEl.classList.remove('hidden')
    } else {
      this.scrollToTopEl.style.removeProperty('opacity')
      this.scrollToTopEl.classList.add('hidden')
    }
  }
}

document.addEventListener('DOMContentLoaded', init)
function init() {
  new ScrollToTop()
}
