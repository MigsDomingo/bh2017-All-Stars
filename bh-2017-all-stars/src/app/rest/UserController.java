package app.rest;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Component;

import app.components.Reply;
import app.components.UserParam;
import app.entities.User;
import app.repositories.UserRepository;

@Component
@Path("/users")
public class UserController {
	@Autowired
	private UserRepository userRepo;
	
	/*
	@GET
	@Path("/add")
	@Produces(MediaType.APPLICATION_JSON)
	public Reply create(@QueryParam("firstName") String firstName,
			@QueryParam("lastName") String lastName,
			@QueryParam("username") String username,
			@QueryParam("password") String password,
			@QueryParam("occupation") String occupation)
	{
		User userEntity = new User();
		userEntity.setFirstName(firstName);
		userEntity.setLastName(lastName);
		userEntity.setUsername(username);
		userEntity.setPassword(password);
		userEntity.setOccupation(occupation);
		
		System.out.println("Hey");
		Reply response = new Reply();
		response.setStatus(200);
		
		response.setMessage("User Added");
		userRepo.save(userEntity);
		
		return response;
	}
	*/
	
	
	@javax.ws.rs.POST
	@Path("/add")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Reply create(UserParam s) throws IOException
	{
		System.out.println("Test");
		Reply response = new Reply();
		response.setStatus(200);
		response.setMessage("User Added");
		
		User userEntity = new User();
		userEntity.setFirstName(s.getFirstName());
		userEntity.setLastName(s.getLastName());
		userEntity.setUsername(s.getUsername());
		userEntity.setPassword(s.getPassword());
		userEntity.setOccupation(s.getOccupation());
		
		userRepo.save(userEntity);
		return response;
		
	}
	
	/*
	@GET
	@Path("/all")
	@Produces(MediaType.APPLICATION_JSON)
	public List<User> listUsers() throws IOException
	{
		System.out.println("It gets here");
		List<User> allUsers = userRepo.findAll();
		for (User user: allUsers){
			System.out.println("User: " + user.getFirstName());
		}
		return allUsers;
	}*/
	
	@POST
	@Path("/remove")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.TEXT_PLAIN)
	public String delete(@FormParam("firstname") String firstname) throws IOException
	{
		System.out.println("hey");
		User user = new User();
		user = userRepo.findByFirstName(firstname);
		userRepo.delete(user);
		
		return "User Removed";
	}
}
