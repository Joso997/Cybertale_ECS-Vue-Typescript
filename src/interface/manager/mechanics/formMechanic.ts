import { ObjectTemplate } from '../containerClasses/objectTemplate'
import { ObjectType, ObjectTypeEnum } from '../events/types/objectType'
import { SubObjectTypeEnum } from '../events/types/subObjectType'
import { MechanicAbstract } from './mechanicAbstract'

export namespace Manager.Mechanic{

  export class FormMechanic extends MechanicAbstract {
    public InitGet (): ObjectTemplate[] {
      throw new Error('Method not implemented.')
    }

    public InitSet (_objectTemplates: ObjectTemplate[]): ObjectTemplate[] {
      this.ObjectTemplates = _objectTemplates
      return this.ObjectTemplates
    }

    protected SubscribeConditions (): void {
      ObjectType.ObjectTypes[ObjectTypeEnum.SubmitButton].SubscribeLogic(this.Button)
    }

    protected Button (_subObjectType: SubObjectTypeEnum): void {
      if (_subObjectType === SubObjectTypeEnum.Button) {

      }
    }
  }

}
