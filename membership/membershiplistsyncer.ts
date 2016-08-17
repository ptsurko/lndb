import Scheduler from './../scheduler';
import MembershipService from './membershipservice';
import Member from './member';
import Gossiper from './gossiper';
import Utils from './../utils';

class MembershipListSyncer extends Gossiper {
  constructor(interval: number, gossipCount: number, scheduler: Scheduler, membershipService: MembershipService) {
    super(interval, gossipCount, scheduler, membershipService);
  }

  gossipToMember(member: Member) {
    //
  }
}

export default MembershipListSyncer;
