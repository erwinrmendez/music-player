// function to format time in miliseconds to mm:ss
export const formatTime = (miliseconds: number) => {
  const timestamp = new Date(miliseconds);
  const mins = timestamp.getUTCMinutes();
  const secs = timestamp.getUTCSeconds().toString();
  let timestring = mins + ":" + secs.padStart(2, "0");

  return timestring;
};
