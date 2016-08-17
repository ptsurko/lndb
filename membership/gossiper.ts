import Scheduler from '../scheduler';
import MembershipService from './membershipservice';
import Member from './member';
import Utils from '../utils';

abstract class Gossiper {
  private interval_: number;
  private gossipCount_: number;
  private schedulingService_: Scheduler;
  private membershipService_: MembershipService;

  constructor(interval: number, gossipCount: number, schedulingService: Scheduler, membershipService: MembershipService) {
    this.interval_ = interval;
    this.gossipCount_ = gossipCount;
    this.schedulingService_ = schedulingService;
    this.membershipService_ = membershipService;
  }

  start() {
    this.schedulingService_.schedule(this.gossipCallback_, this.interval_);
  }

  abstract gossipToMember(member:Member);

  private gossipCallback_() {
    let membershipList = this.membershipService_.getMembershipList();
    let members = membershipList.getAvailableMembers();
    let pickedMembers = Utils.pickRandom(this.gossipCount_, members);
    pickedMembers.forEach(this.gossipToMember);

    this.schedulingService_.schedule(this.gossipCallback_, this.interval_);
  }
}

export default Gossiper;
