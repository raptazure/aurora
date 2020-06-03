<template>
  <footer id="footer">
    <div class="prpr" v-if="!$isMobile.value">
      <div class="tool">
        <APlayer :class="isMini && 'mini'" :audio="audio" preload="none" fixed mini @update:mini="handleUpdate" />
      </div>
    </div>
    <div class="site-info">
      <p>
        <i class="icon icon-copyright"></i>2019-2020
        <i class="icon icon-heart"></i>
        {{ $config.title }}
      </p>
      <p>
        Theme -
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/chanshiyucx/aurora">Aurora</a>
        |
        {{ $config.subtitle }}
      </p>
    </div>
    <img
      v-if="!$isMobile.value"
      class="sakura cursor"
      :src="sakura"
      @click="dropPanel"
      @mouseenter="handleHover('panel')"
      alt="sakura"
    />
  </footer>
</template>

<script>
import { mapState } from 'vuex'
import { random } from '@/utils'
import images from '@/assets/images'

const { sakura } = images

export default {
  name: 'Footer',
  data() {
    return {
      sakura,
      audio: this.$config.APlayer,
      isMini: true,
    }
  },
  computed: mapState({
    tips: (state) => state.tips,
    tipsUpdateAt: (state) => state.tipsUpdateAt,
  }),
  methods: {
    handleUpdate(isMini) {
      this.isMini = isMini
    },
    dropPanel() {
      this.$emit('dropPanel')
    },
  },
}
</script>

<style lang="scss" scope>
@import './index.scss';
</style>
