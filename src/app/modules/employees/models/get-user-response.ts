import { Area } from "@core/models/area";

export interface GetUserResponse {
  id: string;
  name: string;
  lastName: string;
  email: string;
  userName: string;
  areaId: string;
  managerId: string;
  role: string[];
  area: Area;
}
