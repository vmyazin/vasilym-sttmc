class TopNav {
  constructor () {
    this.setUpTopNav()
    window.addEventListener('scroll', this.toggleOpaqueMenu.bind(this, -300))
  }

  get bodyEl () {
    if (!this.bodyEl_) {
      this.bodyEl_ = document.querySelector('body')
    }
    return this.bodyEl_
  }

  get topNavEl () {
    if (!this.topNavEl_) {
      this.topNavEl_ = document.getElementsByClassName("navbar")[0]
    }
    return this.topNavEl_
  }

  toggleOpaqueMenu (offsetFromTop) {
    let viewportOffset = this.bodyEl.getBoundingClientRect();
    // these are relative to the viewport
    let top = viewportOffset.top;

    if (this.bodyEl.classList.contains('intro')) {
      if (top < offsetFromTop) {
        this.topNavEl.classList.add('opaque')
      } else {
        // this.topNavEl.style.removeProperty('opacity')
        this.topNavEl.classList.remove('opaque')
      }
    }
  }

  setUpTopNav () {
    if (!this.bodyEl.classList.contains('intro')) {
      this.topNavEl.classList.add('opaque')
    }
  }
}

document.addEventListener('DOMContentLoaded', init)
function init() {
  new TopNav()
}
