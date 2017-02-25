/**
 * Created by amitshinde on 2017/02/18.
 */

package com.yojna;

public class Filters {
  private Gender gender;
  private Categories categories;
  private Age_range age_range;

  public void setGender(Gender gender) { this.gender = gender; }
  public void setCategories(Categories categories) { this.categories = categories; }
  public void setAge_range(Age_range age_range) { this.age_range = age_range; }

  public Gender getGender() { return this.gender; }
  public Categories getCategories() { return categories; }
  public Age_range getAge_range() { return age_range; }

  public class Gender {
    private Boolean male;
    private Boolean female;

    public void setMale(Boolean male) { this.male = male; }
    public void setFemale(Boolean female) { this.female = female; }
    public Boolean getMale() { return this.male; }
    public Boolean getFemale() { return this.female; }
  }

  public class Categories {
    private Boolean open;
    private Boolean obc;
    private Boolean scst;
    private Boolean bpt;
    private Boolean disability;

    public void setOpen(Boolean open) { this.open = open; }
    public void setObc(Boolean obc) { this.obc = obc; }
    public void setScst(Boolean scst) { this.scst = scst; }
    public void setBpt(Boolean bpt) { this.bpt = bpt; }
    public void setDisability(Boolean disability) { this.disability = disability; }
    public Boolean getOpen() { return this.open; }
    public Boolean getObc() { return this.obc; }
    public Boolean getScst() { return this.scst; }
    public Boolean geBpt() { return this.bpt; }
    public Boolean getDisability() { return this.disability; }
  }

  public class Age_range {
    private String from;
    private String to;

    public void setFrom(String from) { this.from = from; }
    public void setTo(String to) { this.to = to; }
    public String getFrom () { return this.from; }
    public String getTo () { return this.to; }
  }

}
