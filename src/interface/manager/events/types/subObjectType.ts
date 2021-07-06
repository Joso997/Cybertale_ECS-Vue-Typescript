import { Manager } from './subObjectTypes/types'

export enum SubObjectTypeEnum {ParentObject, DummyParentObject, Button}

export class SubObjectType {
 public static SubObjectTypes: { [index: number]: Manager.Events.Type.SubObjectTypeAbstract } = { [SubObjectTypeEnum.ParentObject]: new Manager.Events.Type.ParentObject() };
 public static Init () : void{
   SubObjectType.SubObjectTypes[SubObjectTypeEnum.ParentObject] = new Manager.Events.Type.ParentObject()
 }
}
