import MemberState from './memberstate';
import Partition from './partition';

class Member {
  private address_: string;

  constructor(address: string) {
    this.address_ = address;
  }

  get Address(): string {
    return this.address_;
  }

  Counter: number = 0;
  State: MemberState = MemberState.ALIVE;
  Timestamp: number = 0;
  Partition: Partition = new Partition();
}

export default Member;
