import {  Player } from "../components/playerCard";

const operatingExpenseTable = [
  500,
  500,
  500,
  500,
  500, 
  500,
  1000,
  1000,
  1000,
  1000,
  1000,
  1500,
  1500,
  3000,
  2000,
  2000,
  "noHarvester",
  "noHarvester",
  "noTractor",
  "noTractor",
  "debt",
  "acres",
];

export enum crops {
  hay ='hay',
  grain = 'grain',
  fruit= 'fruit',
  cows = 'cows'
}

export default function operatingExpense(player: Player, crop: crops): number {
  let operatingExpense =
    operatingExpenseTable[
      Math.floor(Math.random() * (operatingExpenseTable.length - 0))
    ];
  console.log("raw OP", operatingExpense);
  switch (operatingExpense) {
    case "noHarvester":
      if (!player.equipment.harvester) {
        return 2000;
      } else {
        return 0;
      }
    case "noTractor":
      if (!player.equipment.tractor) {
        return 2000;
      } else {
        return 0;
      }
    case "debt":
      return player.debt * 0.1;
    case "acres":
      return player.crops[crop] * 100;
    default:
      return operatingExpense as number;
  }
}
