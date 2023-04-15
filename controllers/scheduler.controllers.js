const Member = require('../models/member.models');
const Court = require('../models/court.models');
const Reservation = require('../models/reservation.models');

const SchedulerController = {};

SchedulerController.loadData = async (req, res, next) => {

  const courtFileds = (court) => {
    return { text: court.court_name, id: court._id };
  }

  const playerFileds = (player) => {
    return { text: player.player_name, id: player._id };
  }

  let courts = await Court.find(req.query);
  courts = courts.map(courtFileds);
  // let courts = await res1.json();
  let members = await Member.find(req.query);
  members = members.map(playerFileds);
  // let members = await res2.json();

  let reservations = await Reservation.find(req.query);
  //let reservations = await res3.json();
  // let reservations = [{
  //   _id: 1,
  //   title: 'Reservation',
  //   courtId: 1,
  //   playerId: 1,
  //   startDate: 'Sat Mar 11 2023 11:30:03 GMT+0700 (Indochina Time)',
  //   endDate: 'Sat Mar 11 2023 14:30:03 GMT+0700 (Indochina Time)',
  //   player_name: 'Player 1'
  // }];

  res.json({ courts: courts, players: members, reservations: reservations });
}


module.exports = SchedulerController;



