//hardcoded teams
const hawks = require("./teams/hawks.json")
const generals = require("./teams/generals.json")

const calcTeamTotalStats = (team) => {
  let totalDefense = 0
  let totalPlaymaking = 0
  let totalOffense = 0
  team.players.forEach((player) => {
    //total team defense, weighted by position
    let playerDefenseWeight = (15 + (2.5 * (player.position - 1)))
    totalDefense += player.defense * playerDefenseWeight

    //total team playmaking, weighted by position
    let playerPlaymakingWeight = 30 - (5 * (player.position - 1))
    totalPlaymaking += player.playmaking * playerPlaymakingWeight

    //total team shot skill (2p + 3p)
    totalOffense += (player.insideScoring + player.threePointShooting)

    //total team rebounding, weighted by position
    let playerReboudingWeight = 10 + (5 * (player.position * 5)

  })



}

const simulatePosession = (offense, defense) => {
  //does turnover happen?

  //who shoots?

  //is there an assist?
  //if so, who assists?

  //2p shot or 3p shot?

  //Make or miss?

  //Rebound
}

const simulateQuarter = (team1, team2) => {
  //simulate 25 posessions for each team
}

const simulateGame = (team1, team2) => {
  //simulate 4 quarters
}