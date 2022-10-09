import user from './Plofile/user.json';
import Profile from './Plofile/Profile';
import data from './Statistics/data.json';
import Statistics from './Statistics/Statistics';
import friends from './Friends/friends.json';
import FriendsList from './Friends/FriendsList';
import transaction from './Transactions/transactions.json';
import Transactions from './Transactions/Transactions';

export const App = () => {
  return (
    <>
    
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
    
      <FriendsList friends={friends} />
      
      <Transactions transaction={transaction}/>
    
    </>
  );
};
