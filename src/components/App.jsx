import user from '../data/user.json';
import dataStat from '../data/data.json';
import { Profile } from './profile/Profile';
import { Statistics } from './statistic/Statistics';

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
      {dataStat[0].id}
      {/* <Statistics title="Upload stats" stat={dataStat} /> */}
    </div>
  );
};
