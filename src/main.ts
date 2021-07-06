import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { RegionType, RegionEnum } from './interface/manager/events/types/region'
import { StatChangeEventArgs } from './interface/manager/containerClasses/statChangeEventArgs'
import { Manager } from '@/interface/manager/events/types/statTypes/types'
import { ObjectTemplate } from './interface/manager/containerClasses/objectTemplate'
import { Manager as Mechanic } from '@/interface/manager/mechanics/formMechanic'
import _ from '@/interface/manager/events/types/index'

createApp(App).use(store).use(router).mount('#app')
// region.ObjectType.Init()
const varName = function (e: StatChangeEventArgs) {
  console.log(e.Amount)
}

RegionType.RegionTypes[RegionEnum.Form].Subscribe(_.ObjectTypeEnum.Field, _.SubObjectTypeEnum.ParentObject, varName)
_.ObjectType.ObjectTypes[_.ObjectTypeEnum.Field].InvokeStatChange('test', 'test')
// _.ObjectType.ObjectTypes[_.ObjectTypeEnum.Field].GetVueComponent()
const temp:Manager.Events.Type.StatAbstract = _.StatType.StatTypes[_.StatTypeEnum.Title]()
temp.Data = 'test'
console.log(temp.Data)
const test:Manager.Events.Type.StatAbstract = _.StatType.StatTypes[_.StatTypeEnum.Title]()
console.log(test.Data)
// const koko = new ObjectTemplate()
// console.log(koko.Stats[StatTypeEnum.Title].Value)
const mech = new Mechanic.Mechanic.FormMechanic()
const objectTemplates = mech.InitSet(
  [new ObjectTemplate(_.ObjectTypeEnum.Field, _.SubObjectTypeEnum.ParentObject, _.ActionTypeEnum.None, {
    [_.StatTypeEnum.Title]: _.StatType.StatTypes[_.StatTypeEnum.Title]().CreateStat()
  })]
)
console.log(objectTemplates)
