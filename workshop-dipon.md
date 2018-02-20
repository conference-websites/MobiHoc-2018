---
layout: default
title: Distributed Information Processing in Wireless Networks
short: DIPON'2018
group: Workshops

dates:
    - info: Submission deadline
      date: TBD
    - info: Acceptance notification
      date: TBD
    - info: Camera ready deadline
      date: TBD

committees:
    - role: Workshop Co-Chairs
      people:
       - name:        Pramod Kumar Varshney
         affiliation:
         email:       varshney@syr.edu

       - name:        Ketan
         affiliation:
         email:       ketan@iitk.ac.in

    - role: Technical Program Committee
      people:
       - name: TBD
         affiliation: TBD

---

## ACM MobiHoc Workshop on Distributed Information Processing in Wireless Networks

{% comment %}

<!-- ### Workshop Program -->

<!-- {% include program-online.html type="dipon" %} -->

{% endcomment %}

<!-- ### Call For Papers -->

<!-- TBD -->

<!-- #### Submission Instructions -->

{% include dates2.html dates=page.dates %}

<div class="row">
  <div class="col-sm-6 col-sm-offset-3">
    <a href="mailto:{% for person in page.committees[0].people %}{% if person.email and person.email != "" %}{% unless forloop.first %},{% endunless %}{{ person.email }}{% endif %}{% endfor %}?subject=[{{ page.short }}]" class="btn btn-primary btn-block" role="button">Contact Workshop Chairs</a>
  </div>
</div>

### Committees

{% include committees.html committees=page.committees %}
