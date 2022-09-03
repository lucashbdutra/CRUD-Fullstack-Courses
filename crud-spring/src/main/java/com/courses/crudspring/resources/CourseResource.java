package com.courses.crudspring.resources;

import com.courses.crudspring.entities.Course;
import com.courses.crudspring.services.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/courses")
@RequiredArgsConstructor
public class CourseResource {

    private final CourseService service;

    @GetMapping
    public ResponseEntity<List<Course>> findAll(){

        return ResponseEntity.ok().body(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Course> findById(@PathVariable Long id){

        return ResponseEntity.ok().body(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<Course> save(@RequestBody Course course){

        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(course));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Course> deleteById(@PathVariable Long id){

        return ResponseEntity.ok().body(service.deleteById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Course> update(@RequestBody Course course, @PathVariable Long id){
        return ResponseEntity.ok().body(service.update(course, id));
    }
}


