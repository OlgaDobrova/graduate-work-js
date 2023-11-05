import { authorization } from "./modules/admin/userService/authorization";

import { RepairService } from "./modules/admin/repairService";
import { repairRender } from "./modules/admin/repairRender";
import { addRepairs } from "./modules/admin/addRepairs";
import { removeRepairs } from "./modules/admin/removeRepairs";
import { editRepairs } from "./modules/admin/editRepairs";
import { filterRepairs } from "./modules/admin/filterRepairs";
import { sortRepairs } from "./modules/admin/sortRepairs";

window.repairService = new RepairService();

repairService.getRepairs().then((data) => {
  repairRender(data);
});

authorization();

addRepairs();
removeRepairs();
editRepairs();
filterRepairs();
sortRepairs();
