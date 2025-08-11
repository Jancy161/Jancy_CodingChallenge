package com.hexaware.cricketmgmt.dto;

import com.hexaware.cricketmgmt.entity.Player;
//import com.hexaware.cricketmgmt.entity.Player.Role;
import io.swagger.v3.oas.annotations.media.Schema;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PlayerDto {
	
	private int id;
	
	@Pattern(regexp = "[A-Z][a-z]{1,15}")
    private String name;
	
	 @Min(value=1)
	    @Max(value=99)
    private Integer jerseyNumber;
	 
	 @NotNull
	 @Pattern(regexp = "Batsman|Bowler|Keeper|AllRounder", 
     message = "Role must be one of: Batsman, Bowler, Keeper, AllRounder")
	    private String role;

	 @Min(1)
    private Integer totalMatches;
	 
	 @Pattern(regexp ="[A-Z]{1,15}[a-z]{1,15}")
    private String teamName;
	 
	 @Pattern(regexp ="[A-Z][a-z]{1,15}")
    private String state;
	 
	 @NotBlank
    private String description;
}
