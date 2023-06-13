import { Area } from "@core/models/area";

export interface UpdateUserRequest {
  id: string;
  name: string;
  lastName: string;
  email: string;
  userName: string;
  areaId: string;
  managerId: string;
  roleId: string;
}
