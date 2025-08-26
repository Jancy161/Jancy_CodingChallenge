package com.hexaware.cricketmgmt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hexaware.cricketmgmt.dto.PlayerDto;
import com.hexaware.cricketmgmt.entity.Player;
import com.hexaware.cricketmgmt.service.IPlayerService;

import jakarta.validation.Valid;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/players")
public class PlayerRestController {

    @Autowired
    private IPlayerService service;

    
    @PostMapping("/add")
    public Player createPlayer(@RequestBody @Valid PlayerDto dto) {
        return service.createPlayer(dto);
    }

  
    @PutMapping("/update/{id}")
    public Player updatePlayer(@PathVariable int id, @RequestBody @Valid PlayerDto dto) {
        return service.updatePlayer(id, dto);
    }

    
    @GetMapping("/get/{id}")
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

    @GetMapping("/totalmatches/{teamName}")
    public Integer getTotalMatchesByTeam(@PathVariable String teamName) {
        return service.getTotalMatchesByTeam(teamName);
    }

   
}

