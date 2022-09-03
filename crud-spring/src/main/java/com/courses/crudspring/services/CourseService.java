package com.courses.crudspring.services;

import com.courses.crudspring.entities.Course;
import com.courses.crudspring.repositories.CourseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseService {

    private final CourseRepository repository;

    public List<Course> findAll(){
        return repository.findAll();
    }

    public Course findById(Long id){
        return repository.findById(id).orElseThrow();
    }

    public Course save(Course course){
        repository.save(course);
        return course;
    }

    public Course deleteById(Long id){
        Course opt = repository.findById(id).orElseThrow();
        repository.deleteById(id);
        return opt;
    }

    public Course update(Course course, Long id){
        Course opt = repository.findById(id).orElseThrow();
        opt.setName(course.getName());
        opt.setCategory(course.getCategory());
        repository.save(opt);
        return opt;
    }

}
