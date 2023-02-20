export const sleep = (ms = 1000) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });

export const generateID = () => {
  const timestamp = (new Date().getTime() / 1000 | 0).toString(16).padStart(8, '0');
  const machineId = Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0');
  const processId = Math.floor(Math.random() * 65536).toString(16).padStart(4, '0');
  const increment = Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0');
  return timestamp + machineId + processId + increment;
};

export default {
  sleep,
  generateID,
};
