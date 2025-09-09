export function onLongClick($target, holdTime, duration, callback) {
  let timeoutId;
  let intervalId;

  $target.onmousedown = () => {
    timeoutId = setTimeout(() => {
      callback();
      intervalId = setInterval(callback, duration);
    }, holdTime);
  };

  $target.onmouseup = $target.onmouseleave = () => {
    clearTimeout(timeoutId);
    clearInterval(intervalId);
  };
}
