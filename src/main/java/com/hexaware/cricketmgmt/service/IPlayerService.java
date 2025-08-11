package com.hexaware.cricketmgmt.service;

import java.util.List;

import com.hexaware.cricketmgmt.dto.PlayerDto;
import com.hexaware.cricketmgmt.entity.Player;

public interface IPlayerService {
    List<Player> getAllPlayers();
    Player createPlayer(PlayerDto dto);
    Player getPlayerById(int id);
    Player updatePlayer(int id, PlayerDto dto);
    String deleteById(int id);
    List<Player> getPlayersByTeam(String teamName);
	List<Player> getByTotalMatchesGreaterThan(int totalMatches);
	
}