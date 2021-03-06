package com.devsuperior.movieflix.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.MovieDTO;
import com.devsuperior.movieflix.dto.MovieMinDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository repository;
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAllPaged(Pageable pageable) {
		Page<Movie> page = repository.findAll(pageable);
		return page.map(x -> new MovieDTO(x));
	}
	
	public MovieDTO findById(Long id) {
		Optional<Movie> obj = repository.findById(id);
		Movie entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new MovieDTO(entity);
	}
	
	@Transactional(readOnly = true)
	public Page<MovieMinDTO> findByGenre(Pageable pageable, Long genreId) {
		Long genre = (genreId == 0) ? null : genreId;
		Page<Movie> page = repository.findByGenre(pageable, genre);
		return page.map(x -> new MovieMinDTO(x));
	}
}
