package com.hexaware.cricketmgmt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import com.hexaware.cricketmgmt.dto.PlayerDto;
import com.hexaware.cricketmgmt.entity.Player;
import com.hexaware.cricketmgmt.service.IPlayerService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/players")
public class PlayerRestController {

    @Autowired
    private IPlayerService service;

    
    @PostMapping("/add")
    public Player createPlayer(@RequestBody @Valid PlayerDto dto) {
        return service.createPlayer(dto);
    }

  
    @PutMapping("/{id}")
    public Player updatePlayer(@PathVariable int id, @RequestBody @Valid PlayerDto dto) {
        return service.updatePlayer(id, dto);
    }

    
    @GetMapping("/{id}")
    public Player getPlayerById(@PathVariable int id) {
        return service.getPlayerById(id);
    }

    
    @GetMapping("/getall")
    public List<Player> getAllPlayers() {
        return service.getAllPlayers();
    }


    @DeleteMapping("/delete/{id}")
    public String deleteById(@PathVariable int id) {
        return service.deleteById(id);
    }

   

    
    @GetMapping("/team/{teamName}")
    public List<Player> getPlayersByTeam(@PathVariable String teamName) {
        return service.getPlayersByTeam(teamName);
    }
    
    @GetMapping("/totalMatches/{totalMatches}")
    public List<Player> getByTotalMatchesGreaterThan(@PathVariable int totalMatches) {
    	return service.getByTotalMatchesGreaterThan(totalMatches);
    }
}

