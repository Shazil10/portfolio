---
date: '2025-11-18'
title: 'Hierarchical Negative Binomial Modeling for Sports Attendance'
github: 'https://github.com/Shazil10/Discrete-and-Multilevel-Models'
external: '/cs146-discrete-multilevel-models.pdf'
tech:
  - Python
  - Jupyter Notebook
  - Bayesian Hierarchical Modeling
  - Negative Binomial Regression
  - WAIC / LOO Cross-Validation
company: 'Minerva University'
showInProjects: true
---

A Bayesian count-modeling project that analyzes attendance for 12 professional sports teams (218 observed games) and predicts 22 missing attendance values from ticket-scanner failures. Compares a complete-pooling baseline against a hierarchical model with team and day-of-week effects using a Negative Binomial likelihood for overdispersion, and selects the better specification via WAIC and LOO cross-validation before generating posterior predictive estimates for the missing games.
