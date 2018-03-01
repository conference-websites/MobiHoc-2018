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
    - info: Workshop date
      date: June 25, 2018

committees:
    - role: Workshop Co-Chairs
      people:
       - name:        Pietro Manzoni
         affiliation: Universitat Politècnica de València, SPAIN
         email:       pmanzoni@disca.upv.es
       - name:        Claudio E. Palazzi
         affiliation: Università degli Studi di Padova, ITALY
         email:       cpalazzi@math.unipd.it

    - role: TPC Co-Chairs
      people:
       - name:        Valeria Loscri
         affiliation: Inria Lille-Nord Europe / FUN, France
         email:       valeria.loscri@inria.fr

       - name:        Anna Maria Vegni
         affiliation: Roma Tre University, Rome, Italy
         email:       annamaria.vegni@uniroma3.it

    - role: Web & Publicity Chair
      people:
       - name:        Carlos T. Calafate
         affiliation: Universitat Politècnica de València, Spain
---

## 4th ACM MobiHoc Workshop on Experiences with the Design and Implementation of Smart Objects


### [>> Workshop website, call for papers, submission instructions <<](http://www.grc.upv.es/smartobjects2018/)
{: style="text-align: center; margin-bottom: 1em;" }

### Call For Papers

Internet of Things, Smart-cities and Fog computing are representative examples of modern ICT paradigms that aim to describe a dynamic and global cooperative infrastructure built upon objects intelligence and self-configuring capabilities; these connected objects are finding their way into vehicles (smart-cars), urban areas (smart-cities) and infrastructure (smart-grid).

Objects need to be smart, with enough intelligence and sensors to perform required operations. They must be able to wirelessly communicate with other nodes or remote centre in their network, exchanging information and receiving instructions in a reliable and secure way. They must be autonomous, capable of managing the energy resources in order to extend their lifetime span. Considered objects may include everything from lightweight sensors to smart-gadgets like smartphones and wearable devices.

The increased smartness of the participating objects is crucial to solve the issues derived from the required cooperation and possibly unpredictable and intense mobility. The objects can move in many different ways, covering transportation means from (i) terrestrial, like cars or trains, to (ii) aerial like drones or planes, and (iii) underwater ships. But even static objects should be flexible enough to efficiently handle on-off patterns imposed for energy savings.

The SMARTOBJECTS workshop focuses on experiences with the design, implementation, deployment, operation and evaluation of novel communication approaches and systems for smart objects in the emerging cooperative environments. We are therefore seeking original, previously unpublished papers empirically addressing key issues and challenges in the smart objects arena.

#### Topics

Topics of interest include, but are not limited to:

- App concepts and technologies for different mobile platforms
- Applications of Fog/Edge Computing
- Communication between mobile devices and cars
- Communication for drone coordination
- Content Distribution
- Data collection, organization and dissemination methods
- Data replication protocols in network partitions
- Delay-tolerant networks and ferrying approaches
- Deployment and field testing
- Experimental results of aerial communication testbeds
- Game, entertainment, and multimedia applications
- Human-object interaction
- Innovative services and applications for mobile devices in vehicles
- Location- and track-based services
- Middleware for Fog/Edge infrastructures
- Fog/Edge Computing applications
- Mobile service architectures and frameworks
- Mobility and handover management
- New application scenarios for vehicular communications
- Pervasive and ubiquitous services in cloud and IoT
- Platforms and frameworks for mobile devices
- Privacy issues and solutions
- Protocol design, testing and verification
- Security issues, architectures and solutions
- Sensors & Data Collection
- Smart cities and urban applications
- Solutions for sparse and dense fleets of drones/UAVs
- Swarm movement, coordination, and behaviour
- Wireless in-vehicle networks

<!-- #### Submission Instructions -->

{% include dates2.html dates=page.dates %}

<div class="row">
  <div class="col-sm-6 col-sm-offset-3">
    <a href="mailto:{% for person in page.committees[0].people %}{% if person.email and person.email != "" %}{% unless forloop.first %},{% endunless %}{{ person.email }}{% endif %}{% endfor %}?subject=[{{ page.short }}]" class="btn btn-primary btn-block" role="button">Contact Workshop Chairs</a>
  </div>
</div>

<!-- ### Committees -->

{% include committees.html committees=page.committees %}
