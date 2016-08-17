
class Scheduler {
  schedule(func: Function, delay: number = 0) {
    setTimeout(func, delay);
  }
}

export default Scheduler;
