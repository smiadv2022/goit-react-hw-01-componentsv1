import user from '../data/user.json';
import dataStat from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Profile } from './profile/Profile';
import { Statistics } from './statistic/Statistics';
import FriendList from './friendList/FriendList';
import TransactionHistory from './transactions/transactions';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* {dataStat[0].id} */}
      <Statistics title="Upload stats" stat={dataStat} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
