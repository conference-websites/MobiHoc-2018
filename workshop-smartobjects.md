---
layout: default
title: SmartObjects
short: SmartObjects'2018
group: Workshops

dates:
    - info: Submission deadline
      date: March 20, 2018
    - info: Acceptance notification
      date: April 22, 2018
    - info: Camera ready deadline
      date: May 6, 2018

committees:
    - role: Workshop Co-Chairs
      people:
       - name:        Pietro Manzoni
         affiliation:
         email:       pmanzoni@disca.upv.es
       - name:        Claudio E. Palazzi
         affiliation:
         email:       cpalazzi@math.unipd.it
       - name:        Valeria Loscri
         affiliation:
         email:       valeria.loscri@inria.fr
       - name:        Anna Maria Vegni
         affiliation:
         email:       annamaria.vegni@uniroma3.it

---

## 4th ACM MobiHoc Workshop on Experiences with the Design and Implementation of Smart Objects

<hr/> 

### [Workshop website, call for papers, submission instructions](http://www.grc.upv.es/smartobjects2018/)

<hr/> 
  

<!-- ### Call For Papers -->

<!-- TBD -->

<!-- #### Submission Instructions -->

{% include dates2.html dates=page.dates %}

<div class="row">
  <div class="col-sm-6 col-sm-offset-3">
    <a href="mailto:{% for person in page.committees[0].people %}{% if person.email and person.email != "" %}{% unless forloop.first %},{% endunless %}{{ person.email }}{% endif %}{% endfor %}?subject=[{{ page.short }}]" class="btn btn-primary btn-block" role="button">Contact Workshop Chairs</a>
  </div>
</div>

<!-- ### Committees -->

{% include committees.html committees=page.committees %}
