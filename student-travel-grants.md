---
layout: default
title: <b>Student Travel Grants</b>

dates:
    - info: Application submission deadline
      date: May 24, 2018
    - info: Award notification
      date: May 25, 2018

committees:
    - role: Student Travel Grant Chair
      people:
      - name:        Mario Gerla
        affiliation: UCLA
        email:       gerla@cs.ucla.edu
        homepage:    http://web.cs.ucla.edu/~gerla/

---

# Student Travel Grant

ACM MobiHoc 2018, along with NSF would like to encourage student participation at the conference.
With the support of ACM and NSF, MobiHoc 2018 will be able to partially support (based on need) the travel, accommodation, and registration costs of student registrants who might otherwise be unable to attend the conference.

## Eligibility Requirements

All full-time computer science and engineering undergraduate or graduate students may apply, regardless of their citizenship/visa status.
We also encourage those who do not have a paper in the conference, but wish to attend, to submit a travel grant application.
We anticipate funding approximately 25 students at a rate of up to $1,000 per student.
NSF offers 15 of these grants and places the additional requirement that eligible students must be based on a US University or are US citizens attending international universities.
ACM Sigmobile offers the remaining 10 grants, which are open to all students.
At least 25% of the grants will be reserved for female students and minorities.
Travel for invited speakers (unless they are students) or post doctoral researchers will **not** be supported through these funds.

## Submission Instructions

An application for a travel grant should be submitted electronically to HotCRP as a single PDF file, including all requested information: [TBD](https://TBD).

The submission site will ask whether the application is only for the ACM program or for both ACM and NSF programs (if the student qualifies also for the NSF program).
To increase your chance, applications for funding should be submitted before  **May 24, 2018**.

## Application Materials

Every application should include the following materials:

- The applicant's vita

- A letter from the student including the following information.

  * (1) A brief summary of research interests and accomplishments to date; students should demonstrate a serious interest in networking, through their course work and projects.

  * (2) A description of areas reflected in the MobiHoc 2018 program that would impact the student's research.

  * (3) A statement about why the conference attendance is important to the student.

  The paper title should be included in the letter if the student is the presenting author of a paper that has been accepted by MobiHoc 2018. Student authors from accepted posters, demos, and workshop papers are also encouraged to apply.

- A recommendation letter from the student's advisor including the following.

  * (1) Confirmation that the student is a Ph.D. candidate in good academic standing.

  * (2) The suitability of the MobiHoc 2016 program material to the student's research area.

  * (3) Ways this particular person would benefit from attendance at the conference.

  * (4) The strengths and potential contributions of the applicant.

  * (5) Committing to covering the cost of travel in excess of the travel grant.

**NOTE:** Incomplete applications will not be considered.

If an advisor prefers to submit the recommendation letter separately, please ask him/her to email it (pdf file) to the Student Travel Grant Chair by **May 24, 2018** with the subject line **[MobiHoc Student Travel Grant]**.

## Important dates

{% include dates2.html dates=page.dates %}

Applications received after this date may still be considered.

Recipients are required to accept or reject the travel grant before **May 29, 2018**, so that alternates can be notified in the event that a recipient declines.


{% include committees.html committees=page.committees %}

If you have any question, please contact the Student Travel Grant Chair with the subject line **[MobiHoc Student Travel Grant]**.

<div class="row">
  <div class="col-sm-6 col-sm-offset-3">
    <a href="mailto:{% for person in page.committees[0].people %}{% if person.email and person.email != "" %}{% unless forloop.first %},{% endunless %}{{ person.email }}{% endif %}{% endfor %}?subject=[MobiHoc Student Travel Grant]" class="btn btn-primary btn-block" role="button">Student Travel Grant Chair</a>
  </div>
</div>

## Awards

Student travel grant awardees are required to provide taxpayer information (e.g., SSNs in the US) if applicable.
