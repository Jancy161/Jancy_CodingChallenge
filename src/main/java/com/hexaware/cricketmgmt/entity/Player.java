package com.hexaware.cricketmgmt.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Player {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int id;

	   
	    private String name;

	    private Integer jerseyNumber;

	    //@Enumerated(EnumType.STRING)
	   
	    private String role;

	   
	    private Integer totalMatches;

	   
	    private String teamName;

	  
	    private String state;

	   
	    private String description;
	    
	    
	   // public enum Role {
	      //Batsman, Bowler, Keeper, AllRounder
	  // }

}
