<template>
  <form v-if="renderComponent">
    <component  v-for="(_objectTemplate, key, index) in objectTemplates" :key="`${ key }-${ index }`" :is="getComponent(_objectTemplate.Region, _objectTemplate.ObjectEnum)" :object='_objectTemplate'> </component>
  </form>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { ObjectTemplate } from '@/interface/manager/containerClasses/objectTemplate'
import { Manager } from '@/interface/manager/mechanics/formMechanic'
import { MechanicAbstract } from '@/interface/manager/mechanics/mechanicAbstract'
import { RegionEnum, ObjectTypeEnum, SubObjectTypeEnum, ActionTypeEnum, StatTypeEnum, StatType, ObjectType, RegionType } from '@/interface/manager/events/types/index'
@Options({
  props: {
    msg: String
  }
})
export default class FormComponent extends Vue {
  msg!: string
  mechanic: MechanicAbstract = new Manager.Mechanic.FormMechanic()
  renderComponent= false
  objectTemplates!: ObjectTemplate[]

  beforeUnmount () {
    this.mechanic.UnsubscribeConditions()
  }

  created () {
    this.Init()
  }

  async Init () {
    this.objectTemplates = this.mechanic.InitSet(await this.mechanic.InitGet(this.$route.params.id === undefined ? -1 : Number(this.$route.params.id)))
    this.renderComponent = true
  }
  /* objectTemplates = this.mechanic.InitSet(
    [
      new ObjectTemplate(RegionEnum.Form, ObjectTypeEnum.Field, SubObjectTypeEnum.ParentObject, ActionTypeEnum.None, {
        [StatTypeEnum.Title]: StatType.StatTypes[StatTypeEnum.Title]().CreateStat().InitData('Title'),
        [StatTypeEnum.Value]: StatType.StatTypes[StatTypeEnum.Value]().CreateStat()
      }),
      new ObjectTemplate(RegionEnum.Form, ObjectTypeEnum.Field, SubObjectTypeEnum.ParentObject, ActionTypeEnum.None, {
        [StatTypeEnum.Title]: StatType.StatTypes[StatTypeEnum.Title]().CreateStat(),
        [StatTypeEnum.Value]: StatType.StatTypes[StatTypeEnum.Value]().CreateStat()
      }),
      new ObjectTemplate(RegionEnum.Form, ObjectTypeEnum.Button, SubObjectTypeEnum.Submit, ActionTypeEnum.Click, {
        [StatTypeEnum.Title]: StatType.StatTypes[StatTypeEnum.Title]().CreateStat().InitData('Button')
      })
    ]
  ) */

  getComponent (_regionEnum : number, _objectEnum: number) {
    return RegionType.RegionTypes[_regionEnum].ObjectTypes[_objectEnum].GetVueComponent()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
