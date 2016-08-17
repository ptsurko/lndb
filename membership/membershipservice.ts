import MembershipList from './membershiplist';
import Member from './member';
import Partition from './partition';

export default class MembershipService {
  private membershipList_: MembershipList;
  private hashRange_: number;

  constructor(hashRange: number) {
    this.membershipList_ = new MembershipList();
    this.hashRange_ = hashRange;
  }

  join(address): Partition {
    let newMember = new Member(address);
    this.membershipList_.add(newMember);
    let members = this.membershipList_.getMembers();
    let partitionSize = members.length / this.hashRange_;

    this.membershipList_.getMembers().forEach((member, index) => {
      member.Partition = new Partition(partitionSize * index, partitionSize * (index + 1));
    });

    return newMember.Partition;
  }

  getMembershipList():MembershipList {
    return this.membershipList_;
  }
}
