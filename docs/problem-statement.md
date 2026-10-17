# Sangam — HackShift 2026 PS 2

## Verification status

- Source verified from `Sangam_HackShift2026_PS2.pptx` and matching PDF.
- Deck contains 7 slides.
- Source copies and SHA-256 hashes are preserved in this folder.
- This document is an implementation summary, not a replacement for the official deck.

## Official problem statement

“Create a platform that connects entrepreneurs, job seekers, startups, mentors and recruiters, helping them discover opportunities, build skills and turn ideas into ventures.”

## Product concept

Sangam is a verified network connecting five participant groups:

1. Job seekers and fresh graduates
2. Entrepreneurs/student founders
3. Startups and recruiters
4. Mentors and alumni
5. T&P cells, E-cells and incubators

Core promise: “Where talent, ideas and opportunities meet. Proof, not promises.”

## Problems identified in the deck

- Opportunities are scattered across multiple platforms.
- Hiring claims, paid internships and recruiter identities are difficult to verify.
- Students cannot see the exact skill gap for an opportunity.
- Student ideas lack fast validation, co-founders and mentors.
- Reviews often lack proof that the reviewer actually applied, interviewed or worked there.

## Proposed MVP capabilities

### Connect

- One profile with a selected role: job seeker, founder, mentor, recruiter or startup.
- Verified college/company email badge.
- Guest mode for browsing, questions and voting.

### Discover opportunities

- Jobs, internships, gigs, hackathons, co-founder calls and schemes.
- Match percentage with explainable reasons.
- Recruiter Reality Check and Hire-Proof Score.

### Build skills

- Compare profile skills with a target role.
- Show missing skills.
- Provide a free two-week learning path and proof task.

### Ideas to ventures

- Post an idea with problem, users and model.
- Community polls for “would use” and “would pay”.
- Idea Pulse score.
- AI critique, co-founder matching and mentor matching.

### Trust and community

- Q&A and feedback.
- Verified reviews only after an application/interview/internship event.
- Scam and fee-asking listing flags.
- Candidate-confirmed hiring outcomes.

## Explicit business rules from the deck

- Unverified users: browse, ask and vote only.
- Skill match >= 70%: direct application path.
- Skill match < 70%: show Skill-Gap Coach path.
- Idea Pulse >= 60: unlock venture track.
- Idea Pulse < 60: provide pivot hints and re-poll.
- Fee/scam signs: block and report the listing.
- Candidate confirms hire: mark verified and increase score.
- No confirmation or no hire within 60 days: mark unproven and reduce score.
- Reviews are allowed only after an interview or equivalent verified interaction.

## Proposed score model from the deck

Hire-Proof Score, 0–100:

- 35% candidate-confirmed hires
- 20% applicants who received a reply
- 15% stipend paid as promised
- 15% verified reviews using Bayesian treatment
- 10% identity verification: domain, CIN or GSTIN
- 5% recent activity

## Hackathon MVP scope stated in the deck

0–3 hours: schema, RLS, authentication, profile and roles

3–7 hours: opportunity feed, opportunity pages, search and filters

7–11 hours: Q&A, live polls, Idea Lab and application flow

11–15 hours: matching, Skill-Gap Coach, idea critique and scam filter

15–19 hours: Recruiter Reality Check and Hire-Proof engine

19–22 hours: seed data, end-to-end tests and deployment

22–24 hours: UI polish, demo and pitch

## Source note

The deck contains illustrative/sample data such as Pixel Labs, ₹15,000/month, 92% match and 6/6 confirmed hires. These must not be presented as real platform data.

The deck references external statistics and future-dated sources. Before using those numbers in the final pitch, verify each citation independently or label it as supplied deck material.
