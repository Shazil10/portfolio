---
date: '2026-02-17'
title: 'Voice-Based Code-Switching Detection with MFCCs'
github: 'https://github.com/Shazil10/Voice-Codeswitching-ML-Pipeline'
external: '/voice-codeswitching-ml-pipeline.pdf'
tech:
  - MFCC Feature Extraction
  - 1D Convolutional Neural Network
  - Softmax Regression
  - librosa
  - TensorFlow / Keras
company: 'Minerva University'
showInProjects: true
---

An end-to-end audio ML pipeline testing whether a classifier trained only on Mel-Frequency Cepstral Coefficients (MFCCs) can detect code-switching across three social contexts (family, close friend, professional) from personal WhatsApp voice notes. Compares a from-scratch Multinomial Softmax Regression model against a 1D CNN (Keras) and evaluates with confusion matrices, ROC curves, and per-class F1 scores.
