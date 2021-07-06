<template>
  <input v-bind:value="temp" @change="test($event)"  placeholder="edit me">
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
export default class SubmitButton extends Vue {
  object!: ObjectTemplate
  temp = this.object.Stats[StatTypeEnum.Title].Value
  test (event: any) {
    this.object.Stats[StatTypeEnum.Title].Value = event.target.value
  }

  read () {
    alert(this.object.Stats[StatTypeEnum.Title].Value)
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
