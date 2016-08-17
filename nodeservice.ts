import MembershipList from './membership/membershiplist';
import {Promise} from 'es6-promise';

class NodeService {
  sendMembershipList(membershipList: MembershipList) {

  }

  sendHeartbeat(): Promise<void> {

  }

  joinCluster(nodeAddress: string): Promise<number> {
    return null;
  }
}

export default NodeService;
