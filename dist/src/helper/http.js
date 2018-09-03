import { storage, isEmpty } from "./localStorage";
import $ from "jquery";
const { __DOMAIN__ } = { __DOMAIN__: 'some' };
const browser = window.chrome;

export const getToken = () => {
  console.time(`getToken`);
  return new Promise((res, rej) => {
    window.chrome.runtime.sendMessage({ cmd: "getToken" }, response => {
      console.timeEnd(`getToken`);
      res(response);
    });
  });
};

export const setToken = _token => {
  return new Promise((res, rej) => {
    window.chrome.runtime.sendMessage(
      { cmd: "setToken", data: _token },
      response => {
        if (response) {
          res(response);
        } else {
          rej(response);
        }
      }
    );
  });
};
const Request = class {
  async post(
    { url, success, error = this.onError, data, header = {}, domain },
    next
  ) {
    $.ajax({
      url: domain ? `${__DOMAIN__}${url}` : url,
      type: "POST",
      dataType: "json",
      crossDomain: true,
      data: data,
      processData: false,
      headers: { "X-Auth-Token": await getToken() },
      ...header,
      success: response => {
        success(response);
      },
      error: response => {
        error(response);
      }
    });
  }

  async amazonPdf(
    { url, success, error = this.onError, data, header = {}, domain },
    next
  ) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4) {
        const blob = xmlhttp.response;
        success(blob);
      }
    };

    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlhttp.responseType = "blob";
    xmlhttp.send(data);
    // $.ajax({
    //   url: domain ? `${__DOMAIN__}${url}` : url,
    //   type: "POST",
    //   data: data,
    //   success: resp => {
    //     console.log(resp)
    //   }
    // })
  }

  async get({ url, success, error = this.onError, domain, header = {} }, next) {
    $.ajax({
      url: `${domain && __DOMAIN__}${url}`,
      type: "GET",
      dataType: "json",
      crossDomain: true,
      contentType: false,
      headers: { "X-Auth-Token": await getToken() },
      processData: false,
      ...header,
      success: response => {
        success(response);
      },
      error: response => {
        error(response);
      }
    });
  }

  onError = error => console.warn(error);
};

export const Http = new Request();
