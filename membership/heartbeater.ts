import Scheduler from '../scheduler';
import MembershipService from './membershipservice';
import Member from './member';
import Gossiper from './gossiper';
import Utils from '../utils';
import NodeService from '../nodeservice';

class Heartbeater extends Gossiper {
  private nodeService_: NodeService;

  constructor(interval: number, gossipCount: number, scheduler: Scheduler, membershipService: MembershipService, nodeService: NodeService) {
    super(interval, gossipCount, scheduler, membershipService);
    this.nodeService_ = nodeService;
  }

  gossipToMember(member: Member) {

  }
}

export default Heartbeater;
