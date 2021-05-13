import React from 'react';
import Indiadailyconfirmedcases from './charts/Indiadailyconfirmed';
import Indiadailydeathscases from './charts/Indiadailydeathscases';
import Indiadailyrecoveredcases from './charts/Indiadailyrecoveredcases';
import Indiapredictedconfirmedcases from './charts/Indiapredictedconfirmedcases';
import Indiapredicteddeathscases from './charts/Indiapredicteddeathscases';
import Indiapredictedrecoveredcases from './charts/Indiapredictedrecoveredcases';
import Indiatotalconfirmedcases from './charts/Indiatotalconfirmedcases';
import Indiatotaldeathscases from './charts/Indiatotaldeathscases';
import Indiatotalrecoveredcases from './charts/Indiatotalrecoveredcases';
import Indiamap from './Indiamap';
import Table from './Table';

const Home = () => {
  return (
    <div className="ml-5 container-xxl">
      <div className="row">
        <div className="col">
          <Table />
        </div>
        <div className="col mt-5">
          <Indiamap />
          <div className="col pt-3 pr-5">
            <Indiatotalconfirmedcases />
          </div>
          <div className="col pt-5 pr-5">
            <Indiadailyconfirmedcases />
          </div>
          <div className="col pt-5 pr-5">
            <Indiatotalrecoveredcases />
          </div>
          <div className="col pt-5 pr-5">
            <Indiadailyrecoveredcases />
          </div>
          <div className="col pt-5 pr-5">
            <Indiatotaldeathscases />
          </div>
          <div className="col pt-4 pr-5">
            <Indiadailydeathscases />
          </div>
        </div>
      </div>
      <div className="row ml-5">
        <div className="col pt-4">
          <Indiapredictedconfirmedcases />
        </div>
        <div className="col pt-4 pr-5">
          <Indiapredictedrecoveredcases />
        </div>
      </div>
      <div className="row pl-5"> 
      <div className="col pt-4">
          <Indiapredicteddeathscases />
        </div>
      </div>
    </div>
  );
}

export default Home;