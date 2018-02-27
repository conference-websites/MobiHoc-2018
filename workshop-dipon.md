---
layout: default
title: Distributed Information Processing in Wireless Networks
short: DIPON'2018
group: Workshops

dates:
    - info: Submission deadline
      date: April, 1 2018
    - info: Acceptance notification
      date: May 2, 2018
    - info: Camera ready deadline
      date: May 10, 2018

committees:
    - role: Workshop Co-Chairs
      people:
       - name:        Ketan Rajawat
         affiliation: IIT Kanpur, India
         email:       ketan@iitk.ac.in

       - name:        Pramod Kumar Varshney
         affiliation: Syracuse University, USA
         email:       varshney@syr.edu

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

### Call For Papers

The unprecedented advances in sensing, communication, and storage technologies have motivated the development of a plethora of optimization and learning algorithms capable of distributed operation over networks. Some of the popular application areas where such algorithms have been widely applied include distributed signal processing in wireless sensor networks, distributed resource allocation in cellular and ad hoc networks, distributed machine learning algorithms for Big Data, and distributed localization and tracking.

Desired attributes of such decentralized information processing algorithms include parallelizability, scalability, robustness to channel impairments and network delays, low-cost operation, and the ability to handle uncertain and dynamic network topologies. Embedding such features into classical information processing techniques is challenging, and has sparked the development of a gamut of distributed algorithms.

The aim of the workshop is to provide an international forum for discussions of recent developments in distributed learning, optimization, signal processing, and resource management. The focus will be on the design and analysis of algorithms capable of handling the vagaries of wireless networks, such as delays, limited and heterogeneous abilities, channel impairments, and communication restrictions arising due to the network topology.

Topics of interest include (but are not limited to):

- Machine learning over networks
- Signal processing over networks
- Statistical signal processing on networks
- Distributed optimization for signal processing
- Distributed optimization for communication systems
- Distributed optimization for cyber physical systems
- Distributed control over networked systems
- Distributed resource management over networks
- Non-convex optimization methods over networks
- Robust and stochastic optimization methods over networks
- Privacy preservation in distributed algorithms
- Asynchronous coordination schemes

### Submission Instructions

We solicit regular papers that present novel and unpublished research results. Workshop papers should not exceed 6 pages in standard double column ACM conference format, including figures, tables, references, and appendix. As per ACM policy, papers submitted to other conferences or journals will not be considered for publication. Accepted papers will appear in the conference proceedings published by the ACM.

For paper submission to ACM MobiHoc 2018 Workshop on Distributed Information Processing in Wireless Networks, please visit [https://dipon18.hotcrp.com/](https://dipon18.hotcrp.com/).

### [>> PDF Version of this call <<]({% asset MobiHoc-2018-Workshop-DIPON-2018.pdf @path %})
{: style="text-align: center; margin-bottom: 1em;" }

{% include dates2.html dates=page.dates %}

<div class="row">
  <div class="col-sm-6 col-sm-offset-3">
    <a href="mailto:{% for person in page.committees[0].people %}{% if person.email and person.email != "" %}{% unless forloop.first %},{% endunless %}{{ person.email }}{% endif %}{% endfor %}?subject=[{{ page.short }}]" class="btn btn-primary btn-block" role="button">Contact Workshop Chairs</a>
  </div>
</div>

### Committees

{% include committees.html committees=page.committees %}
