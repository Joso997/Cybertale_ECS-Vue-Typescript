<template>
  <h3>{{title}}</h3>
  <input v-bind:value="value" @change="test($event)"  placeholder="edit me">
  <button @Click='read()'></button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { ObjectTemplate } from '@/interface/manager/containerClasses/objectTemplate'
import { StatTypeEnum } from '@/interface/manager/events/types/statType'
@Options({
  props: {
    object: ObjectTemplate
  }
})
export default class InputComponent extends Vue {
  object!: ObjectTemplate
  value = 'error'
  title = 'error'

  created () {
    this.value = this.object.Stats[StatTypeEnum.Value].Data
    this.title = this.object.Stats[StatTypeEnum.Title].Data
  }

  test (event: any) {
    this.object.Stats[StatTypeEnum.Value].Data = event.target.value
  }

  read () {
    this.object.Stats[StatTypeEnum.Value].CheckRequirements('test')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
