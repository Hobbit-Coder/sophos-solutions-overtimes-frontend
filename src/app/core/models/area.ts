import { AuditableEntity } from "./auditable-entity";

export interface Area extends AuditableEntity {
  id: string;
  name: string;
  description: string;
}
