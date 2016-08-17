import Member from './member';
import MemberState from './memberstate';

class MembershipList {
  private members_: Member[];
  constructor(members: Member[] = []) {
    this.members_ = members;
  }

  add(member: Member) {
    this.members_.push(member);
  }

  remove(member: Member) {
    let memberIndexToDelete = this.members_.indexOf(member);
    this.members_.splice(memberIndexToDelete, 1);
  }
  merge(membershipList: MembershipList) {

  }

  getMembers(): Member[] {
    return this.members_;
  }

  getAvailableMembers(): Member[] {
    return this.members_.filter(m => m.State == MemberState.ALIVE);
  }
}

export default MembershipList;
