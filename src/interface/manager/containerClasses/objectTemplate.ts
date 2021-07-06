import { ActionTypeEnum } from '../events/types/actionType'
import { ObjectTypeEnum } from '../events/types/objectType'
import { SubObjectTypeEnum } from '../events/types/subObjectType'
import { Manager } from '../events/types/statTypes/types'

export class ObjectTemplate {
  public ObjectEnum!: ObjectTypeEnum;
  public SubObjectEnum!: SubObjectTypeEnum
  public ActionEnum!: ActionTypeEnum
  public Stats: { [index: number]: Manager.Events.Type.StatAbstract } = { }

  constructor (_objectEnum: ObjectTypeEnum, _subObjectEnum: SubObjectTypeEnum, _actionEnum: ActionTypeEnum, _stats: { [index: number]: Manager.Events.Type.StatAbstract }) {
    this.ObjectEnum = _objectEnum
    this.SubObjectEnum = _subObjectEnum
    this.ActionEnum = _actionEnum
    this.Stats = _stats
  }
}
