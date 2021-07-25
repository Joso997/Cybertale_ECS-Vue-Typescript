
import { StatChangeDel } from '@/interface/manager/containerClasses/statChangeEventArgs'
import { ObjectTypeEnum, ObjectType } from '../objectType'
import { SubObjectTypeEnum } from '../subObjectType'

export namespace Manager.Events.Type{

   export abstract class RegionAbstract {
     public Subscribe (_objectType: ObjectTypeEnum, _subObjectType: SubObjectTypeEnum, _statChangeDel:StatChangeDel): void {
       ObjectType.ObjectTypes[_objectType].Subscribe(_subObjectType, _statChangeDel)
     }
   }

  export class Form extends RegionAbstract {

  }

  export class Table extends RegionAbstract {

  }

  export class TableColumn extends RegionAbstract {

  }

  export class Show extends RegionAbstract {

  }
}
