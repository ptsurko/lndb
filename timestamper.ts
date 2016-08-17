
class Timestamper {
  getCurrentTimestamp(): number {
    return (new Date()).getTime();
  }
}

export default Timestamper;
