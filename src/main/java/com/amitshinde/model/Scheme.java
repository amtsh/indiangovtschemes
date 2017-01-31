package com.amitshinde;


import org.springframework.data.annotation.Id;

import java.util.List;

/**
 * Created by amitshinde on 2017/01/28.
 */
public class Scheme {

  @Id private String id;

  private String title;
  private Description description;
  private String category;
  private String schemesource;
  private List<String> tags;

  public void setTitle(String title) {
    this.title = title;
  }

  public void setDescription(Description description) {
    this.description = description;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public void setSchemesource(String schemesource) {
    this.schemesource = schemesource;
  }

  public void setTags(List tags) {
    this.tags = tags;
  }

  public String getTitle() {
    return this.title;
  }

  public Description getDescription() {
    return this.description;
  }

  public String getCategory() {
    return this.category;
  }

  public String getSchemesource() {
    return this.schemesource;
  }

  public List getTags() {
    return this.tags;
  }

}
