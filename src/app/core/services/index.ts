import { ApiService } from "./api.service";
import { LocalStorageService } from "./local-storage.service";
import { RoleService } from "./role.service";
import { UserService } from "./user.service";

export const services = [
  ApiService,
  LocalStorageService,
  RoleService,
  UserService
]

export * from "./api.service";
export * from "./local-storage.service";
export * from "./role.service";
