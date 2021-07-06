import { ObjectTemplate } from '../containerClasses/objectTemplate'
import { SubObjectTypeEnum } from '../events/types/subObjectType'

export abstract class MechanicAbstract {
  protected abstract SubscribeConditions() : void;
  protected abstract Button(_subObjectType: SubObjectTypeEnum) : void;
  constructor () {
    this.SubscribeConditions()
  }

  public abstract InitGet(): ObjectTemplate[];

  public abstract InitSet(_objectTemplates: ObjectTemplate[]) : ObjectTemplate[];

  protected ObjectTemplates!: ObjectTemplate[];
}