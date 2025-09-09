export function onLongClick($target, duration, callback) {
  let intervalId;
  $target.onmousedown = () => {
    callback();
    intervalId = setInterval(callback, duration);
  };
  $target.onmouseup = $target.onmouseleave = () => {
    clearInterval(intervalId);
  };
}
