import Profile from './Plofile/Profile';
import Statistics from './Statistics/Statistics';
import FriendsList from './Friends/FriendsList';
import Spending from './Spending/Spending';

import user from './Plofile/user.json';
import data from './Statistics/data.json';
import friends from './Friends/friends.json';
import transactions from './Spending/transactions.json';

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

    <Spending transactions={transactions}/>
    
    </>
  );
};
