package com.amitshinde;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

/**
 * Created by amitshinde on 2017/01/28.
 */
@RepositoryRestResource(collectionResourceRel = "schemes", path = "schemes")
public interface SchemeRepository extends MongoRepository<Scheme, String> {
  List<Scheme> findByTitleLike(@Param("title") String title);
}
