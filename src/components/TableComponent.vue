<template>
  <table class="table" v-if="renderComponent">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Naslov</th>
      <th scope="col">Opcije</th>
    </tr>
  </thead>
  <tbody>
    <component  v-for="(_objectTemplate, key, index) in objectTemplates" :key="`${ key }-${ index }`" :is="getComponent(_objectTemplate.ObjectEnum)" :object='_objectTemplate'> </component>
  </tbody>
</table>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { ObjectTemplate } from '@/interface/manager/containerClasses/objectTemplate'
import { Manager } from '@/interface/manager/mechanics/tableMechanic'
import { MechanicAbstract } from '@/interface/manager/mechanics/mechanicAbstract'
import { RegionEnum, ObjectTypeEnum, SubObjectTypeEnum, ActionTypeEnum, StatTypeEnum, StatType, ObjectType } from '@/interface/manager/events/types/index'
@Options({
  props: {
    msg: String
  }
})
export default class TableComponent extends Vue {
  msg!: string
  mechanic: MechanicAbstract = new Manager.Mechanic.TableMechanic()
  renderComponent= false
  objectTemplates!: ObjectTemplate[]

  beforeUnmount () {
    this.mechanic.UnsubscribeConditions()
  }

  created () {
    this.Init()
  }

  async Init () {
    this.objectTemplates = this.mechanic.InitSet(await this.mechanic.InitGet(-1))
    console.log(this.objectTemplates)
    this.renderComponent = true
  }

  getComponent (_objectEnum: number) {
    return ObjectType.ObjectTypes[_objectEnum].GetVueComponent()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
