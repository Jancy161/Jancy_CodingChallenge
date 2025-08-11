package com.hexaware.cricketmgmt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.hexaware.cricketmgmt.entity.Player;

@Repository
public interface IPlayerRepository extends JpaRepository<Player, Integer> {

	 @Query("SELECT SUM(p.totalMatches) FROM Player p WHERE p.teamName = ?1")
	    Integer findTotalMatchesByTeam( String teamName);
}