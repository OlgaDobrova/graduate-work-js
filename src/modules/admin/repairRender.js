import { fillingSelect } from "./fillingSelect";

export const repairRender = (repairs) => {
  const tbody = document.getElementById("tbody");

  // fillingSelect();

  if (tbody) {
    tbody.innerHTML = "";

    repairs.forEach((repair) => {
      tbody.insertAdjacentHTML(
        "beforeend",
        `
        <tr class="table__row" data-key="${repair.id}">
						<td class="table__id table__cell">${repair.id}</td>
						<td class="table-type table__cell">${repair.type}</td>
						<td class="table-name table__cell">
            ${repair.name}
						</td>
						<td class="table-units table__cell">
            ${repair.units == "м2" ? "м<sup>2</sup>" : repair.units}
						</td>
						<td class="table-cost table__cell">
            ${repair.cost} руб
						</td>
						<td>
							<div class="table__actions table__cell">
								<button class="button action-change btn-edit"><span class="svg_ui"><svg class="action-icon_change"><use xlink:href="./img/sprite.svg#change"></use></svg></span><span>Изменить</span>
								</button>
								<button class="button action-remove btn-remove"><span class="svg_ui"><svg class="action-icon_remove"><use xlink:href="./img/sprite.svg#remove"></use></svg></span><span>Удалить</span>
								</button>
							</div>
						</td>
					</tr>
        `
      );
    });
  }
};
