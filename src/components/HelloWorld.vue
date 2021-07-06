<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <component  v-for="_objectTemplate in objectTemplates" :key="_objectTemplate.ObjectEnum" :is="getComponent(_objectTemplate.ObjectEnum)" :object='_objectTemplate'> </component>
    <h3>Installed CLI Plugins</h3>
    <button @Click='read()'></button>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { ObjectTemplate } from '@/interface/manager/containerClasses/objectTemplate'
import { Manager } from '@/interface/manager/mechanics/formMechanic'
import { MechanicAbstract } from '@/interface/manager/mechanics/mechanicAbstract'
import _ from '@/interface/manager/events/types/index'
@Options({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string
  mechanic: MechanicAbstract = new Manager.Mechanic.FormMechanic()
  items = [
    { message: 'Foo' },
    { message: 'Foo' }
  ]

  objectTemplates = this.mechanic.InitSet(
    [
      new ObjectTemplate(_.ObjectTypeEnum.Field, _.SubObjectTypeEnum.ParentObject, _.ActionTypeEnum.None, {
        [_.StatTypeEnum.Title]: _.StatType.StatTypes[_.StatTypeEnum.Title]().CreateStat().InitData('Title'),
        [_.StatTypeEnum.Value]: _.StatType.StatTypes[_.StatTypeEnum.Value]().CreateStat()
      }),
      new ObjectTemplate(_.ObjectTypeEnum.Field, _.SubObjectTypeEnum.ParentObject, _.ActionTypeEnum.None, {
        [_.StatTypeEnum.Title]: _.StatType.StatTypes[_.StatTypeEnum.Title]().CreateStat(),
        [_.StatTypeEnum.Value]: _.StatType.StatTypes[_.StatTypeEnum.Value]().CreateStat()
      })
    ]
  )

  getComponent (_objectEnum: number) {
    console.log(_.ObjectType.ObjectTypes[_objectEnum])
    return _.ObjectType.ObjectTypes[_objectEnum].GetVueComponent()
  }

  read () {
    alert('test')
    this.objectTemplates[0].Stats[_.StatTypeEnum.Value].CheckRequirements('test')
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
