import { validate } from "./validation";

const {
  stringify,
  parse
} = JSON;

const isEmpty = data => {
  if (Array.isArray(data)) {
    return data.length > 0 ? false : true;
  } else {
    return !Boolean(Object.keys(data).length);
  }
};

const isContain = (path, find) => ~path.indexOf(find);

const getFileName = string =>
  string.substring(string.lastIndexOf("/") + 1, string.length);


const toSeconds = (value, type) => type === 'minutes' ? value * 60 : type === 'hour' ? value * 60 * 60 : value
const validateTime = time => time.length <= 1 ?`0${time}` : time  
const toDate = _seconds => {
  const hour = validateTime(`${Math.floor((_seconds / (60 * 60)) % 24)}`)
  const minutes = validateTime(`${Math.floor((_seconds / 60) % 60)}`)
  const seconds = validateTime(`${Math.floor(_seconds % 60)}`)
  return `${hour}h ${minutes}m ${seconds}s`
}

const toTime = seconds => `${Math.floor((seconds / (60 * 60)) % 24)} ${Math.floor((seconds / 60) % 60)} ${Math.floor(seconds % 60)}`
export {
  toSeconds,
  getFileName,
  isContain,
  isEmpty,
  toTime,
  toDate
}