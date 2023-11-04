import { UserService } from "./modules/admin/userService/userService";
import { render } from "./modules/admin/userService/render";
import { addUsers } from "./modules/admin/userService/addUsers";
import { removeUsers } from "./modules/admin/userService/removeUsers";
import { changePermissions } from "./modules/admin/userService/changePermissions";
import { editUsers } from "./modules/admin/userService/editUsers";
import { filterUsers } from "./modules/admin/userService/filterUsers";
import { sortUsers } from "./modules/admin/userService/sortUsers";

import { RepairService } from "./modules/admin/repairService";
import { repairRender } from "./modules/admin/repairRender";
import { addRepairs } from "./modules/admin/addRepairs";
import { removeRepairs } from "./modules/admin/removeRepairs";
import { editRepairs } from "./modules/admin/editRepairs";
import { filterRepairs } from "./modules/admin/filterRepairs";
import { sortRepairs } from "./modules/admin/sortRepairs";

window.userService = new UserService();

userService.getUsers().then((data) => {
  render(data);
});

window.repairService = new RepairService();

repairService.getRepairs().then((data) => {
  repairRender(data);
});

addUsers();
removeUsers();
changePermissions();
editUsers();
filterUsers();
sortUsers();

addRepairs();
removeRepairs();
editRepairs();
filterRepairs();
sortRepairs();
