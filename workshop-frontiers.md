---
layout: default
title: Frontiers of Networks
short: Frontiers of Networks'2018
group: Workshops and Tutorials

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
       - name:        Srinivas Shakkottai
         affiliation: "Texas A&M University"
         email:       sshakkot@tamu.edu

    - role: Program Committee
      people:
       - name: Longbo Huang
         affiliation: Tsinghua University

       - name: Srinivas Shakkottai
         affiliation: "Texas A&M University"

       - name: Lei Ying
         affiliation: Arizona State University

---

## 6th ACM MobiHoc Workshop on the Frontiers of Networks: Theory and Algorithms

### [>> Workshop website, call for papers, submission instructions <<](https://sites.google.com/tamu.edu/mobihoc-frontiers-2018/)
{: style="text-align: center; margin-bottom: 1em;" }

### Program

{% include program-online.html type="ws-frontiers" %}

{% comment %}

<!-- ### Workshop Program -->

<!-- {% include program-online.html type="dipon" %} -->

<!-- ### Call For Papers -->

<!-- TBD -->

<!-- #### Submission Instructions -->

{% include dates2.html dates=page.dates %}

<div class="row">
  <div class="col-sm-6 col-sm-offset-3">
    <a href="mailto:{% for person in page.committees[0].people %}{% if person.email and person.email != "" %}{% unless forloop.first %},{% endunless %}{{ person.email }}{% endif %}{% endfor %}?subject=[{{ page.short }}]" class="btn btn-primary btn-block" role="button">Contact Workshop Chairs</a>
  </div>
</div>

{% endcomment %}

Welcome to the Sixth Workshop on the Frontiers of Networks: Theory and Algorithms, to be held in coordination with MobiHoc 2018.
The workshop will bring together different research communities that utilize analytical methods to model, design and evaluate large scale networked systems.
The format of the workshop is to hold invited talks of 30 minutes duration each, and to explore a range of cutting edge topics in the space of communication, routing, scheduling, learning, games and optimization.
Each speaker has made significant contributions to their respective areas, and will bring a unique perspective on the topic of interest.

### Committees

{% include committees.html committees=page.committees %}
