<script>
import { CIcon, CInput, CFlex } from '@chakra-ui/vue'
export default {
  name: 'PriceRangeSlider',
  components: {
    CIcon,
    CInput,
    CFlex,
  },
  props: {
    trackHeight: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      min: 10,
      max: 1000,
      minValue: 20,
      maxValue: 100,
      step: 10,
      totalSteps: 0,
      percentPerStep: 1,
      trackWidth: null,
      isDragging: false,
      pos: {
        curTrack: null,
      },
    }
  },

  mounted() {
    // calc per step value
    this.totalSteps = (this.max - this.min) / this.step

    // percent the track button to be moved on each step
    this.percentPerStep = 100 / this.totalSteps
    // console.log('percentPerStep', this.percentPerStep)

    // set track1 initilal
    document.querySelector('.track1').style.left =
      this.valueToPercent(this.minValue) + '%'
    // track2 initial position
    document.querySelector('.track2').style.left =
      this.valueToPercent(this.maxValue) + '%'
    // set initila track highlight
    this.setTrackHightlight()

    const self = this

    ;['mouseup', 'mousemove'].forEach((type) => {
      document.body.addEventListener(type, (ev) => {
        // ev.preventDefault();
        if (self.isDragging && self.pos.curTrack) {
          self[type](ev, self.pos.curTrack)
        }
      })
    })
    ;[
      'mousedown',
      'mouseup',
      'mousemove',
      'touchstart',
      'touchmove',
      'touchend',
    ].forEach((type) => {
      document.querySelector('.track1').addEventListener(type, (ev) => {
        ev.stopPropagation()
        self[type](ev, 'track1')
      })

      document.querySelector('.track2').addEventListener(type, (ev) => {
        ev.stopPropagation()
        self[type](ev, 'track2')
      })
    })

    // on track clik
    // determine direction based on click proximity
    // determine percent to move based on track.clientX - click.clientX
    document.querySelector('.track').addEventListener('click', function (ev) {
      ev.stopPropagation()
      self.setClickMove(ev)
    })

    document
      .querySelector('.track-highlight')
      .addEventListener('click', function (ev) {
        ev.stopPropagation()
        self.setClickMove(ev)
      })
  },
  methods: {
    moveTrack(track, ev) {
      const percentInPx = this.getPercentInPx()

      const trackX = Math.round(
        this.$refs._vpcTrack.getBoundingClientRect().left
      )
      const clientX = ev.clientX
      const moveDiff = clientX - trackX

      const moveInPct = moveDiff / percentInPx
      // console.log(moveInPct)

      if (moveInPct < 1 || moveInPct > 100) return
      const value =
        Math.round(moveInPct / this.percentPerStep) * this.step + this.min
      if (track === 'track1') {
        if (value >= this.maxValue - this.step) return
        this.minValue = value
      }

      if (track === 'track2') {
        if (value <= this.minValue + this.step) return
        this.$emit('funct', this.minValue)
        this.maxValue = value
      }

      this.$refs[track].style.left = moveInPct + '%'
      this.setTrackHightlight()
    },
    mousedown(ev, track) {
      if (this.isDragging) return
      this.isDragging = true
      this.pos.curTrack = track
    },

    touchstart(ev, track) {
      this.mousedown(ev, track)
    },

    mouseup(ev, track) {
      if (!this.isDragging) return
      this.isDragging = false
    },

    touchend(ev, track) {
      this.mouseup(ev, track)
    },

    mousemove(ev, track) {
      if (!this.isDragging) return
      this.moveTrack(track, ev)
    },

    touchmove(ev, track) {
      this.mousemove(ev.changedTouches[0], track)
    },

    valueToPercent(value) {
      return ((value - this.min) / this.step) * this.percentPerStep
    },

    setTrackHightlight() {
      this.$refs.trackHighlight.style.left =
        this.valueToPercent(this.minValue) + '%'
      this.$refs.trackHighlight.style.width =
        this.valueToPercent(this.maxValue) -
        this.valueToPercent(this.minValue) +
        '%'
    },

    getPercentInPx() {
      const trackWidth = this.$refs._vpcTrack.offsetWidth
      const oneStepInPx = trackWidth / this.totalSteps
      // 1 percent in px
      const percentInPx = oneStepInPx / this.percentPerStep

      return percentInPx
    },

    setClickMove(ev) {
      const track1Left = this.$refs.track1.getBoundingClientRect().left
      const track2Left = this.$refs.track2.getBoundingClientRect().left
      // console.log('track1Left', track1Left)
      if (ev.clientX < track1Left) {
        this.moveTrack('track1', ev)
      } else if (ev.clientX - track1Left < track2Left - ev.clientX) {
        this.moveTrack('track1', ev)
      } else {
        this.moveTrack('track2', ev)
      }
    },
  },
}
</script>

<template>
  <div class="slider__price">
    <div class="track-container">
      <div ref="_vpcTrack" class="track"></div>
      <div ref="trackHighlight" class="track-highlight"></div>
      <button ref="track1" class="track-btn track1"></button>
      <button ref="track2" class="track-btn track2"></button>
    </div>
    <CFlex align="center" gap="9px" mt="29px">
      <c-input
        color="color.InputColor"
        :value="minValue"
        _focus="none"
        w="103px"
        border-radius="12px"
        border-color="borders.InputBorder"
        bg="transparent"
        placeholder="от"
      />

      <CIcon name="priceSlider" />

      <c-input
        :value="maxValue"
        color="color.InputColor"
        _focus="none"
        w="103px"
        border-radius="12px"
        border-color="borders.InputBorder"
        bg="transparent"
        placeholder="до"
      />

      <c-button
        background-color="color.TextColor2"
        color="white"
        cursor="pointer"
        _focus="none"
        border-radius="12px"
        _hover="none"
        font-weight="300"
        type="submit"
      >
        {{ $t('search') }}
      </c-button>
    </CFlex>
  </div>
</template>

<style>
.slider__price {
  margin-top: 32px;
}
.range-value {
  position: absolute;
  top: -2rem;
}
.range-value.min {
  left: 0;
}

.range-value.max {
  right: 0;
}
.track-container {
  width: 100%;
  position: relative;
  cursor: pointer;
  height: 0.5rem;
}

.track,
.track-highlight {
  display: block;
  position: absolute;
  width: 100%;
  height: 0.5rem;
}

.track {
  border-radius: 12px;
  background-color: #e3e6e6;
}

.track-highlight {
  background-color: #e50914;
  z-index: 2;
}

.track-btn {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;
  display: block;
  position: absolute;
  border-radius: 50%;
  z-index: 2;
  width: 1.5rem;
  height: 1.5rem;
  top: calc(-50% - 0.25rem);
  margin-left: -1rem;
  border: none;
  background-color: #4a4d4d;
  -ms-touch-action: pan-x;
  touch-action: pan-x;
  transition: box-shadow 0.3s ease-out, background-color 0.3s ease,
    -webkit-transform 0.3s ease-out;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out,
    background-color 0.3s ease;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out,
    background-color 0.3s ease, -webkit-transform 0.3s ease-out;
}
</style>
