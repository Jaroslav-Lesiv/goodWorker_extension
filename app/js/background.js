const { stringify, parse } = JSON;

const color = "#3a83ed";

const isContain = (path, find) => ~path.indexOf(find);

const isPDF = path => ~path.indexOf(".pdf");

const setBadgeText = text => {
  chrome.browserAction.setBadgeText({ text: text });
};

const openApp = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const data = { cmd: "toggleOpen", data: true };
    chrome.tabs.sendMessage(tabs[0].id, data, response => {
      console.log(response);
    });
  });
};
const openConvert = payload => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const data = { cmd: "openConvert", data: payload };
    chrome.tabs.sendMessage(tabs[0].id, data, response => {
      console.log(response);
    });
  });
};

const setIcon = icon => {
  chrome.browserAction.setIcon({ path: icon });
};
const setBadgeBackgroundColor = color => {
  chrome.browserAction.setBadgeBackgroundColor({ color: color });
};

// document.addEventListener("DOMContentLoaded", function() {
  chrome.browserAction.onClicked.addListener(tab => {
    openApp();
  });
// });

const setToken = (_token, sender) => {
  chrome.storage.sync.set({ _token }, () => {
    sender(true);
  });
};

const setStore = (data, sender) => {
  storage.set("store", data).then(bool => {
    sender(bool);
  });
};
const getStore = sender => {
  storage.get("store").then(store => {
    sender(store);
  });
};

const sendToken = sender => {
  chrome.storage.sync.get(["_token"], result => {
    sender(result._token || null);
  });
};
// chrome.notifications.create('myCustom notif',{
//   iconUrl: '/icons/icon64.png',
//   title: 'myT',
//   message: 'my messages',
//   type: 'basic',
//   priority: 1,
//   buttons: [{title: 'open', iconUrl: '/icons/icon64.png'}, {title: 'close', iconUrl: '/icons/icon16.png',}]
//   }, (a, b) => {console.log(a,b)})

const notificationOptions = {
  iconUrl: '/icons/icon64.png',
  title: 'goodWorker',
  message: 'goodWorker messages',
  type: 'basic',
  priority: 1,
  buttons: [{title: 'Open Extension', iconUrl: '/icons/icon64.png'}]
}
const Task = new class {
  constructor() {
    this.task_timer = new Time({
      onTimeEnd: () => this.createNotification(),
      onUpdate: data => this.updateTask(data)
    });
    this.audio = {
      in: new Audio('/audio/intuition.ogg'),
      out: new Audio('/audio/pull-out.ogg')
    }
    chrome.notifications.onClosed.addListener((id, user) => {
      this.createAudioSignal('out')
    })
    chrome.notifications.onButtonClicked.addListener( (id, buttonIdx) => {
      switch (buttonIdx) {
        case 0:
          openConvert()
          break;
      
        default:
          break;
      }
    } )
  }

  createNotification(options = {}) {
    const _options = {...notificationOptions, ...options}
    const notificationId = `${+new Date()}`
    chrome.notifications.create(notificationId, _options, _id => console.info(`Notification ${_id} created`))
    this.createAudioSignal()
    setTimeout(() => this.closeNotification(notificationId), 7000)
  }

  closeNotification(_id) {
    chrome.notifications.getAll( notifications => {
      if (_id in notifications) {
        chrome.notifications.clear(_id, id => console.log(`Notification ${id} closed`))
        this.createAudioSignal('out')
      }
    } )
    
  }

  createAudioSignal(type = 'in') {
    this.audio[type].play()
  }

  async addTask(task) {
    const task_list = await storage.get("task_list", []);
    storage.set("task_list", [...task_list, { ...task, id: +new Date(), created_at: +new Date() }]);
  }

  async getTask(_id, sender) {
    const task_list = await storage.get("task_list", []);
    const task = task_list.find(_task => _task.id === +_id)
    sender(task)
  }

  async getTaskList(sender) {
    const task_list = await storage.get("task_list", []);
    sender(task_list);
  }

  async getDoneList(sender) {
    const done_list = await storage.get("done_list", []);
    sender(done_list);
  }

  setTaskList(task_list) {
    storage.set("task_list", task_list);
  }

  async updateTask(_task) {
    const task_list = await storage.get("task_list", []);
    const taskIdx = task_list.findIndex(task => task.id == _task.id);
    if (~taskIdx) task_list[taskIdx] = { ...task_list[taskIdx], ..._task };

    console.log(~taskIdx, task_list[taskIdx])
    storage.set("task_list", task_list);
  }

  async deleteTask(list) {
    const task_list = await storage.get("task_list", []);
    if (list.includes(this.task_timer.taskId)) this.stopTimer();
    storage.set("task_list", task_list.filter(task => !list.includes(task.id)));
  }

  async doneTask(_id) {
    const [task_list, done_list] = await Promise.all([
      storage.get("task_list", []),
      storage.get("done_list", [])
    ]);

    const task = task_list.find(task => task.id == _id);

    storage.set("task_list", task_list.filter(task => task.id != _id));
    storage.set("done_list", [...done_list, {...task, done_at: +new Date()}]);
    if (_id === this.task_timer.taskId) this.stopTimer();
  }

  async removeFromDoneTask(_id) {
    const [task_list, done_list] = await Promise.all([
      storage.get("task_list", []),
      storage.get("done_list", [])
    ]);
    const task = done_list.find(task => task.id == _id);

    storage.set("task_list", [...task_list, task]);
    storage.set("done_list", done_list.filter(task => task.id != _id));
  }

  activate(_id) {
    this.task_timer.activate(_id);
  }

  stopTimer() {
    this.task_timer.stopTimer();
  }
}();

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.cmd) {
    case "getToken":
      sendToken(sendResponse);
      break;

    case "setToken":
      setToken(request.data, sendResponse);
      break;
    case "openApp":
      openApp();
      break;
    case "openConvert":
      openConvert(request.data);
      break;
    // case "set_store":
    //   setStore(request.data, sendResponse)
    //   break;
    // case "get_store":
    //   getStore(sendResponse)
    //   break;
    // case "set_active":
    //   getStore(sendResponse)
    //   break;

    case "set_task_list":
      Task.setTaskList(request.data);
      break;
    case "add_task":
      Task.addTask(request.data);
      break;
    case "delete_task":
      Task.deleteTask(request.data);
      break;
    case "update_task":
      console.log('update_task', request.data)
      Task.updateTask(request.data);
      break;
    case "done_task":
      Task.doneTask(request.data);
      break;
    case "remove_from_done":
      Task.removeFromDoneTask(request.data);
      break;
    case "get_task_list":
      Task.getTaskList(sendResponse);
      break;
    case "get_done_list":
      Task.getDoneList(sendResponse);
      break;

    case "activate_task":
      Task.activate(request.data);
      break;
    case "disable_task":
      Task.stopTimer();
      break;

    case "get_task":
      Task.getTask(request.data, sendResponse);
      break;

      
    case "create_notification":
      Task.createNotification(request.data);
      break;
    // case "create_notification":
    //   Task.createNotification(request.data);
    //   break;

    default:
      break;
  }
  return true;
});
