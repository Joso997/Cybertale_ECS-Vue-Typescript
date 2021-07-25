import { ActionTypeEnum } from '../events/types/actionType'
import { ObjectTypeEnum } from '../events/types/objectType'
import { SubObjectTypeEnum } from '../events/types/subObjectType'
import { Manager } from '../events/types/statTypes/types'
import { RegionEnum, RegionType } from '../events/types/region'
import { StatChangeEventArgs } from './statChangeEventArgs'

export class ObjectTemplate {
  public Region!: RegionEnum;
  public ObjectEnum!: ObjectTypeEnum;
  public SubObjectEnum!: SubObjectTypeEnum
  public ActionEnum!: ActionTypeEnum
  public Stats: { [index: number]: Manager.Events.Type.StatAbstract } = { }

  constructor (_regionEnum: RegionEnum, _objectEnum: ObjectTypeEnum, _subObjectEnum: SubObjectTypeEnum, _actionEnum: ActionTypeEnum, _stats: { [index: number]: Manager.Events.Type.StatAbstract }) {
    this.Region = _regionEnum
    this.ObjectEnum = _objectEnum
    this.SubObjectEnum = _subObjectEnum
    this.ActionEnum = _actionEnum
    this.Stats = _stats
    this.subscribe()
  }

  subscribe () : void {
    console.log(this.Stats)
    RegionType.RegionTypes[this.Region].Subscribe(this.ObjectEnum, this.SubObjectEnum, this.changeStat)
  }

  changeStat (e: StatChangeEventArgs) : void {
    console.log(e.Amount)
    console.log(this)
    this.Stats[e.StatType].Data = e.Amount
    console.log('here2')
    this.Stats[e.StatType].CheckRequirements(this)
  }
}
