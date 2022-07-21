const DELTA_TIME = 3;

const INPUT_FULL_WIDTH = 200;
const INPUT_START_WIDTH = 50;

const BTN_START_POSITION = 0;
const BTN_END_POSITION = INPUT_FULL_WIDTH;

const DIRECTION_UP = 1;
const DIRECTION_DOWN = -1;

document.addEventListener("click", onSearchBtnClick);
// //reworked
function onSearchBtnClick(e) {
  if (e.target.classList.contains("search-btn")) {
    const $input = e.target.previousElementSibling;

    if (e.target.classList.toggle("active")) {
      commonStep(
        $input,
        e.target,
        BTN_END_POSITION,
        DIRECTION_DOWN,
        BTN_START_POSITION
      );
    } else {
      commonStep(
        $input,
        e.target,
        BTN_START_POSITION,
        DIRECTION_UP,
        BTN_END_POSITION
      );
    }
  }
}
function elementStep($btn, previousLeft, direction, endLeft, styleName) {}

function commonStep($input, $btn, previousLeft, direction, endLeft) {
  if (Math.abs(previousLeft - endLeft) > 0) {
    previousLeft += direction;
    $btn.style.left = `${previousLeft}px`;
    $input.style.width = `${previousLeft}px`;
    setTimeout(() => {
      commonStep($input, $btn, previousLeft, direction, endLeft);
    }, DELTA_TIME);
  }
}
