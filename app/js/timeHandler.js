const Time = class {
  constructor({ onTimeEnd, onUpdate }) {
    this.plain_time = 0;
    this.spend_time = 0;
    this.onTimeEnd = onTimeEnd;
    this.timer = null;
    this.taskId = null;
    this.current_time = null;
    this.current_task = {};
    this.onUpdate = onUpdate;
  }

  async activate(_id) {
    if (this.timer) clearInterval(this.timer);
    const task_list = await storage.get("task_list", []);
    const task = task_list.find(task => task.id == _id);
    this.current_task = task;
    this.taskId = _id;
    this.plain_time = task.plain_time;
    this.spend_time = task.spend_time;
    this.startTimer();
  }

  stopTimer() {
    if (this.timer) clearInterval(this.timer);
  }

  startTimer() {
    this.timer = setTimeout(() => this.tick(), 1000);
  }

  tick() {
    if (this.spend_time === this.plain_time) {
      this.onTimeEnd({
        title: `Time end`,
        message: `Time to do task ${this.current_task.label} is end`
      });
    }
    ++this.spend_time;
    this.timer = setTimeout(() => this.tick(), 1000);
    this.updateActiveTask();
  }

  updateActiveTask() {
    chrome.tabs.query({ active: true }, tabs => {
      const tab = tabs[0];
      const id = tab ? tab.id : null;
      const task = {
        plain_time: this.plain_time,
        spend_time: this.spend_time,
        id: this.taskId
        // site: {
        //     [this.current_time]:
        // }
      };
      this.onUpdate(task);
      if (id) {
        chrome.tabs.sendMessage(id, {
          data: task,
          cmd: "update_active_task"
        });
      }
    });
  }
};
