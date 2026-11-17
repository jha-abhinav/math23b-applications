# Data provenance

Primary source pages were consulted November 17, 2026. Small CSV tables transcribe factual values used in the workbook; no live data feed or unobserved spatial field is represented as a measurement.

## NOAA Monterey Harbor tidal datums

[NOAA Monterey Harbor tidal datums](https://tidesandcurrents.noaa.gov/benchmarks/9413450.html) · [noaa.csv](dist/downloads/data/noaa.csv)

Station 9413450; epoch 1983–2001; benchmark sheet published October 12, 2011. Meters above MLLW. These are long-term reference levels, not successive tide readings or a forecast.

## USGS San Lorenzo River at Santa Cruz

[USGS San Lorenzo River at Santa Cruz](https://pubs.usgs.gov/wdr/WDR-CA-00-2/pdf/WRD.CA.00.Vol2.pdf) · [river.csv](dist/downloads/data/river.csv)

Station 11161000; Water Resources Data—California, water year 2000, Volume 2, printed page 101. Daily mean discharge; not instantaneous velocity. March 1–4, 2000.

## UCSC Younger Lagoon Reserve

[UCSC Younger Lagoon Reserve](https://youngerlagoonreserve.ucsc.edu/about-us/) · [reserve.csv](dist/downloads/data/reserve.csv)

Reserve website reports the areas below. An equal-area ellipse, rectangle, or polygon in a problem is a teaching model, not a surveyed reserve boundary.

## Monterey Bay Aquarium facts and figures

[Monterey Bay Aquarium facts and figures](https://www.montereybayaquarium.org/about-us/about-the-aquarium/newsroom/media-kits/facts-and-figures) · [aquarium.csv](dist/downloads/data/aquarium.csv)

Published exhibit dimensions and capacities, accessed November 17, 2026. They are not a survey of tank shape or a measured spatial velocity field.

## Monterey Bay Aquarium Kelp Forest

[Monterey Bay Aquarium Kelp Forest](https://www.montereybayaquarium.org/visit/exhibits/kelp-forest/) · [pump.csv](dist/downloads/data/pump.csv)

The exhibit page describes pumps pushing up to 2,000 US gallons per minute. Use this as a stated upper rate, not as a measurement at a particular moment. Any pipe radius or velocity profile below is assumed.

## MBARI Benthic Rover II

[MBARI Benthic Rover II](https://www.mbari.org/news/autonomous-robotic-rover-helps-scientists-with-long-term-monitoring-of-deep-sea-carbon-cycle-and-climate-change/) · [rover.csv](dist/downloads/data/rover.csv)

MBARI article, November 2021. These are overall dimensions. Boxes, panels, housings, and paths used here are hypothetical models, not the rover’s actual shape or route.

## MBARI Monterey Accelerated Research System

[MBARI Monterey Accelerated Research System](https://www.mbari.org/technology/monterey-accelerated-research-system-mars/) · [mars.csv](dist/downloads/data/mars.csv)

MBARI reports its MARS node at 891 m depth. A straight path or force field in this workbook is hypothetical; it is not a reconstruction of the actual cable.

## Interpretation and conversions

- NOAA’s tidal epoch is 1983–2001. Differences between MHW and MLW are differences of statistical datums, not successive observations or an observed flood event. Treating a datum-derived height as a model water depth requires the explicitly stated assumed bed.
- The San Lorenzo values are daily means from station 11161000, March 1–4, 2000, Water Resources Data—California, Volume 2, printed page 101. Multiplying a daily mean discharge by one day gives that day’s transported volume; calculating a speed additionally requires an assumed cross-section.
- The 72-acre reserve number supports equal-area models and comparison percentages; no actual parcel vertices are supplied.
- Aquarium capacities and equipment envelope dimensions do not specify tank or vehicle geometry. The Kelp Forest rate is “up to” 2,000 US gal/min. Pipe radius and profile are hypothetical.
- MARS contributes its published 891 m node depth only. A toy straight descent is not the actual cable route or length.
- Conversions used: 1 foot = 0.3048 m; 1 cubic foot = 0.028316846592 m³; 1 US gallon = 0.003785411784 m³; 1 acre = 4046.8564224 m²; 1 day = 86,400 s.
- A reported measurement or published dimension has finite precision. Exact answers in these exercises are exact for the stated model and adopted constants, not exact real-world predictions.
