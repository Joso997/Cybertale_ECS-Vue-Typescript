
import { StatChangeDel } from '@/interface/manager/containerClasses/statChangeEventArgs'
import { ObjectTypeEnum, ObjectType } from '../objectType'
import { SubObjectTypeEnum } from '../subObjectType'

export namespace Manager.Events.Type{

   export abstract class RegionAbstract {
     // protected persons: { [id: string] : object; } = {};
     // protected abstract SetObjects() : Record<string, RegionEnum>;
     // public abstract Objects: Record<string, string>;// TODO InteractableObjectTypeAbstract
      public abstract Subscribe(_objectType: ObjectTypeEnum, _subObjectType: SubObjectTypeEnum, _statChangeDel:StatChangeDel) : void;
   }

  export class Form extends RegionAbstract {
    /* protected SetObjects (): Record<string, region.RegionEnum> {
      throw new Error('Method not implemented.')
    } */

    public Subscribe (_objectType: ObjectTypeEnum, _subObjectType: SubObjectTypeEnum, _statChangeDel:StatChangeDel): void {
      ObjectType.ObjectTypes[_objectType].Subscribe(_subObjectType, _statChangeDel)
    }
  }
}
