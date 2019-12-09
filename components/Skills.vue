<template>
  <div>
    <h2>Skills</h2>
    <draggable
      v-model="skills"
      class="d-flex flex-wrap justify-content-center mx-5 mt-3"
    >
      <div v-for="skill in skills" :key="skill">
        <div class="bg-dark rounded clearfix m-2">
          <div class="float-left p-2">
            <img :src="imageUrl(skill)" :alt="name(skill)" />
          </div>

          <div class="float-right mt-1" style="width: 6rem;">
            <div class="text-white">{{ name(skill) }}</div>

            <b-progress
              :value="level(skill)"
              max="10"
              show-value
              variant="info"
              height="1em"
              class="mx-2 mt-3"
            />
          </div>
        </div>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import skills from '~/assets/Skills.json'

export default {
  components: {
    draggable
  },
  data() {
    return {
      skills
    }
  },
  methods: {
    name(skill) {
      return skill[0]
    },
    level(skill) {
      return skill[1]
    },
    imageUrl(skill) {
      return `./img/skills/${skill[0]}.svg`
    }
  }
}
</script>
