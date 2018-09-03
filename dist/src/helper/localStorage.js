

// import { __CONFIG__ } from '../config'
const { stringify, parse } = JSON;

export const isEmpty = object => !Boolean(Object.keys(object).length);

export const isContain = (path, find) => ~path.indexOf(find);

export const getFileName = string =>
  string.substring(string.lastIndexOf("/") + 1, string.length);


const Storage = class {
    constructor(secret) {
      this.secret = secret;
    }
  
    checkOnUsungStorage() {
      try {
        let storage = parse(localStorage.getItem(this.secret));
        if (storage) {
          return true;
        } else {
          localStorage.setItem(this.secret, stringify({ state: {}, user: {}, token: ''  }));
        }
      } catch (error) {}
    }
  
    setItem(key, value) {
      try {
        let storage = parse(localStorage.getItem(this.secret));
        storage[key] = value;
        localStorage.setItem(this.secret, stringify(storage));
        return true;
      } catch (error) {
        console.warn(error);
        return false;
      }
    }
  
    getItem(key) {
      let storage = parse(localStorage.getItem(this.secret));
      if (storage[key]) {
        return storage[key];
      } else {
        return false;
      }
    }
  
    getAllItem() {
      let items = [];
      let storage = parse(localStorage.getItem(this.secret));
      if (Object.keys(storage).length) {
        for (let item of storage) {
          if (item) {
            items.push(item);
          }
        }
      }
      return items;
    }
  };
  
  //// Variables
// export const storage = new Storage(__CONFIG__.__SECRET__);
// storage.checkOnUsungStorage()