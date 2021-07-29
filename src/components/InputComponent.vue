<template>
  <div class="mb-3 row justify-content-md-center">
    <div class="col"></div>
    <div class="col">
      <label class="form-label h3">{{object.Stats[statTypeEnum.Title].Data }}</label>
      <input :class="`${object.Stats[statTypeEnum.Design].Data}`" :value="object.Stats[statTypeEnum.Value].Data" @change="objectType.ObjectTypes[object.ObjectEnum].ChooseSubType(object, $event.target.value)" placeholder="edit me">
    </div>
    <div class="col"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { ObjectTemplate } from '@/interface/manager/containerClasses/objectTemplate'
import { ObjectType, StatTypeEnum, ObjectTypeEnum } from '@/interface/manager/events/types/index'
@Options({
  props: {
    object: ObjectTemplate
  }
})
export default class InputComponent extends Vue {
  statTypeEnum = StatTypeEnum
  objectTypeEnum = ObjectTypeEnum
  objectType = ObjectType
  object!: ObjectTemplate
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
