---
layout: default
title: SmartCitySecurity
short: SmartCitySecurity'2018
group: Workshops

dates:
    - info: Submission deadline
      date: April 1, 2018
    - info: Acceptance notification
      date: May 2, 2018
    - info: Camera ready deadline
      date: May 11, 2018
    - info: Workshop Date
      date: June 25, 2018

committees:
    - role: Workshop Co-Chairs
      people:
       - name:        Danda B. Rawat
         affiliation: Howard University, USA
         email:       danda.rawat@howard.edu

       - name:        Min Song
         affiliation: Michigan Tech, USA
         email:       MinS@mtu.edu

       - name:        Syed Hassan Ahmed
         affiliation: University of Central Florida, USA
         email:       sh.ahmed@ieee.org

       - name:        Jaime Lloret Mauri
         affiliation: UPV, Valencia, Spain
         email:       jlloret@dcom.upv.es

    - role: Technical Program Committee
      people:
       - name: TBD
         affiliation: TBD

---

## 1st ACM MobiHoc Workshop on Networking and Cybersecurity for Smart Cities (SmartCitySecurity 2018)

{% comment %}

<!-- ### Workshop Program -->

<!-- {% include program-online.html type="dipon" %} -->

{% endcomment %}

### Call For Papers

Cities have been incorporating new technologies for several years, but lately the rate of technology adoption has increased and cities around the world are becoming connected and smarter. Furthermore, plethora of networking technologies and connectable devices made it more convenient to build smart ecosystems and connected commodities that can help us predict the Smart Cities to become reality very soon. The key applications could be ranging from Smart Campuses for education, connected Hospitals for better treatment and medical information sharing among doctors & patients, Smart Watering & Gardening systems at the city level to reserve natural resources, smart fishing, Smart & connected transportation systems, and many more to name. Moreover, Internet of Things (IoT) can bring noticeable efforts to connect various entities yet those efforts are prone to cyber-attacks. Likewise, every new technology and innovation brings new challenges and problems. In this workshop, we are focusing on networking and cybersecurity-related problems that currently affect or will affect cities in general around the world, whether considered smart or not. These problems would impact the city government, residents, and the businesses and other organizations that conduct business there. Keeping in mind the new technologies and life in a smarter city, let’s consider what could happen if one or more technology-reliant services don’t work. What would be commuting look like with non-functioning traffic control systems, no street lights, and no public transportation? How would citizens respond to an inadequate supply of electricity or water, dark streets, and no cameras? What if garbage collection is interrupted in summertime and stinks up the streets? We believe, it would be unpleasant and cause a lot of chaos in any city.

We expect this workshop to be one of the key steps towards gathering researchers and developers to get under one roof and pave through the policy making and providing interesting insights of the following topics, but not limited to:

- Networking and Security Framework for Smart Cities
- Cyber Security Challenges, Issues and Solutions
- Poor or Nonexistent Security Issues
- Encryption Issues
- Privacy Issues in Smart Cities
- Cybersecurity Policies and Standards
- Computer Emergency Response Maneuvers
- Protection Against Large and Complex Cyber Attacks
- Patch Deployment Issues
- Secure integration of IoT /CPS and other networks
- Intrusion Detection/Prevention Techniques
- Secure Data Storage, Communications and Computing
- Heterogeneous System Modeling for Smart City Security
- Insecure Legacy Systems
- Simple Bugs with Huge Impact
- Cyber Attack Emergency Plans
- Susceptibility to Denial of Service
- Privacy issues in Intelligent Transportation
- Cyber Forensics & Challenges
- Big Data Analytics for Smart Cities Security

### Submission Instructions

For paper submission to ACM SmartCitySecurity 2018, please visit [https://smartcitysecurity18.hotcrp.com](https://smartcitysecurity18.hotcrp.com).

### [>> PDF Version of this call <<]({% asset MobiHoc-2018-Worklshop-SmartCitySecurity-2018.pdf @path %})
{: style="text-align: center; margin-bottom: 1em;" }

<!-- <hr/> -->

{% include dates2.html dates=page.dates %}

<div class="row">
  <div class="col-sm-6 col-sm-offset-3">
    <a href="mailto:{% for person in page.committees[0].people %}{% if person.email and person.email != "" %}{% unless forloop.first %},{% endunless %}{{ person.email }}{% endif %}{% endfor %}?subject=[{{ page.short }}]" class="btn btn-primary btn-block" role="button">Contact Workshop Chairs</a>
  </div>
</div>

<!-- ### Committees -->

{% include committees.html committees=page.committees %}
