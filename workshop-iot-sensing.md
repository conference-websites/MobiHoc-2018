---
layout: default
title: Mobile IoT Sensing, Security, and Privacy
short: IoT Sensing'2018
group: Workshops and Tutorials

dates:
    - info: Submission deadline
      date: April 1, 2018
    - info: Extended submission deadline
      date: April 7, 2018, 23:59:59 EST
    - info: Acceptance notification
      date: April 30, 2018
    - info: Camera ready deadline
      date: May 7, 2018

committees:
    - role: Workshop Co-Chairs
      people:
       - name:        Mi Zhang
         affiliation: Michigan State University
         email:       mizhang@egr.msu.edu
       - name:        Guan-Hua (Scott) Tu
         affiliation: Michigan State University
         email:       ghtu@msu.edu

    - role: Technical Program Committee
      people:
       - name:        Muhammad Shahzad
         affiliation: North Carolina State University

       - name:        Ashwin Ashok
         affiliation: Georgia State University

       - name:        Aziz Mohaisen
         affiliation: University of Central Florida

       - name:        Yuan Tian
         affiliation: University of Virginia

       - name:        Feng Qian
         affiliation: Indiana University Bloomington

       - name:        Sunghoon Ivan Lee
         affiliation: UMass Amherst

       - name:        Fengwei Zhang
         affiliation: Wayne State University

       - name:        Yuanjie Li
         affiliation: University of California, Los Angeles

       - name:        Shin-Ming Cheng
         affiliation: National Taiwan University of Science and Technology

       - name:        Chi-Yu Li
         affiliation: National Chiao Tung University

       - name:        Kate Ching-Ju Lin
         affiliation: National Chiao Tung University

       - name:        Yan Huang
         affiliation: Indiana University Bloomington

---

## 1st ACM MobiHoc Workshop on Mobile IoT Sensing, Security, and Privacy

### Workshop Program

{% include program-online.html type="ws-mobile-iot-sensing" %}

### Call For Papers

Today's mobile Internet of Things devices (i.e., wireless-connected IoT devices) such as Amazon Alexa, WiFi smart bulbs, smart meters, and wearable devices are normally equipped with on-devices sensors. Although these sensors equip mobile IoT devices with the capability to sense users and their surrounding environment to provide context-aware services, they may also intrude users' privacy and bring up many security concerns. The goal of this workshop is to provide a forum to bring together researchers from both academia and industry to discuss the sensing, security and privacy issues and corresponding solutions related to the existing and emerging mobile internet of things devices and infrastructure.

The workshop comes at a critical time juncture where mobile IoT devices are proliferating commercially. The off-the-shelf availability of mobile IoT devices today has significantly improved, and those devices have been widely adopted in a broad spectrum of applications such as automation and control, energy monitoring, healthcare - to name a few. We hope that this workshop will serve as a catalyst for exploring novel sensing applications enabled by mobile IoT devices as well as investigating techniques that enhance the security of mobile IoT devices and protect users' privacy.

The focus areas include, but not limited to:

- Novel mobile IoT sensing systems and applications
- Cloud/Edge/Fog-based infrastructure for mobile IoT sensing
- Privacy-preserving mobile IoT sensing
- Key distribution and management
- Physical security and hardware/software security
- Authentication, authorization, audit, and access control for mobile IoT
- Lightweight security for mobile IoT
- Security framework of mobile IoT
- Security for 5G IoT
- Security for cellular IoT (2G/3G/4G, NB-IoT, Cate.M1, Cate.-1)
- Security for WiFi IoT (2.4GHz, 5GHz, 60GHz, etc)
- Security for Z-Wave, Bluetooth, LoRa, SigFox, 6LowPAN, NFC, Zigbee IoT


### Submission Instructions

Papers should be submitted via [https://mobileiotssp18.hotcrp.com/](https://mobileiotssp18.hotcrp.com/).

The papers should not exceed 6 pages (US letter size) double column including figures, tables, and references in standard ACM format.
Templates for the standard ACM format can be found at: [https://www.acm.org/publications/proceedings-template](https://www.acm.org/publications/proceedings-template).
Submission must be in PDF format.
All submissions will be reviewed using a single-blind review process.



{% include dates2.html dates=page.dates %}

<div class="row">
  <div class="col-sm-6 col-sm-offset-3">
    <a href="mailto:{% for person in page.committees[0].people %}{% if person.email and person.email != "" %}{% unless forloop.first %},{% endunless %}{{ person.email }}{% endif %}{% endfor %}?subject=[{{ page.short }}]" class="btn btn-primary btn-block" role="button">Contact Workshop Chairs</a>
  </div>
</div>

{% comment %} ### Committees {% endcomment %}

{% include committees.html committees=page.committees %}
