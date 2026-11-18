# Data provenance

Every published number in Around the World in 80 Integrals comes from one of the 61 sources below. Source pages were consulted in November 2026. Secondary sources are labeled in their notes. Assumed shapes, fields, and parameters appear only in each problem's "We assume" list, never here.

## NOAA Monterey Harbor tidal datums

[https://tidesandcurrents.noaa.gov/benchmarks/9413450.html](https://tidesandcurrents.noaa.gov/benchmarks/9413450.html) · `noaa.csv` · used in w03-p2

*Published observation-derived datums.* Station 9413450; epoch 1983–2001; benchmark sheet published October 12, 2011. Meters above MLLW. These are long-term reference levels, not successive tide readings or a forecast.

| Datum | Height above MLLW (m) |
| --- | --- |
| MHHW | 1.626 |
| MHW | 1.412 |
| MTL | 0.873 |
| MSL | 0.862 |
| MLW | 0.333 |
| MLLW | 0.000 |

## Monterey Bay Aquarium facts and figures

[https://www.montereybayaquarium.org/about-us/about-the-aquarium/newsroom/media-kits/facts-and-figures](https://www.montereybayaquarium.org/about-us/about-the-aquarium/newsroom/media-kits/facts-and-figures) · `aquarium.csv` · used in w03-p2

*Published dimensions and capacities.* Published exhibit dimensions and capacities, accessed November 17, 2026. They are not a survey of tank shape or a measured spatial velocity field.

| Exhibit | Published dimensions / capacity |
| --- | --- |
| Open Sea | 90 ft across; 52 ft front to back; 35 ft tall; 1,200,000 US gal |
| Kelp Forest | 28 ft tall; 343,000 US gal |
| Sea Otters | 15 ft tall; 55,000 US gal |

## IMD 0.25° gridded daily rainfall for India (Pai et al., 2014)

[https://mausamjournal.imd.gov.in/index.php/MAUSAM/article/view/851](https://mausamjournal.imd.gov.in/index.php/MAUSAM/article/view/851) · `imd_grid.csv` · used in w02-p1

*Peer-reviewed dataset description.* D. S. Pai, M. Rajeevan, O. P. Sreejith, B. Mukhopadhyay and N. S. Satbha, MAUSAM 65(1), 1–18, 2014, abstract. The rainfall pattern on the 2 × 2 block of cells used in the problem is a teaching model, not a day from the dataset.

| Quantity | Published value |
| --- | --- |
| Grid spacing | 0.25° latitude × 0.25° longitude |
| Rain-gauge stations used | 6955 |
| Period covered | 1901–2010 (110 years) |

## IMD terminology for heavy rainfall (Hazard Atlas)

[https://www.imdpune.gov.in/hazardatlas/extreme.pdf](https://www.imdpune.gov.in/hazardatlas/extreme.pdf) · `imd_terms.csv` · used in w02-p1

*Official classification.* India Meteorological Department, Pune, Hazard Atlas notes on extreme rainfall events, “terminologies used by the India Meteorological Department”. Amounts are 24-hour rainfall at a station.

| Term | 24-hour rainfall (mm) |
| --- | --- |
| Heavy rainfall | 64.5–115.5 |
| Very heavy rainfall | 115.6–204.4 |
| Extremely heavy rainfall | 204.5 or more |

## NOAA CPC Oceanic Niño Index (ERSST.v6)

[https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso/oni/v6/](https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso/oni/v6/) · `cpc_oni.csv` · used in w02-p2

*Published climate index.* NOAA Climate Prediction Center, accessed November 17, 2026. The ONI is the 3-month running mean of SST anomalies in the Niño 3.4 region; El Niño periods use a threshold of +0.5 °C met for at least five overlapping seasons. CPC now notes that the Relative ONI (RONI) is used for official monitoring. The anomaly maps in the problem are models, not observed fields.

| Quantity | Published value |
| --- | --- |
| Niño 3.4 region | 5°N–5°S, 120°–170°W |
| Warm/cold threshold | +0.5 °C (warm) and −0.5 °C (cold) |
| ONI, Nov–Jan 2015/16 | 2.6 °C |
| ONI, Nov–Jan 1997/98 | 2.4 °C |
| ONI, Nov–Jan 2023/24 | 2.0 °C |

## Sarabia González, “Los túneles arqueológicos en la pirámide del Sol de Teotihuacán”

[https://revistas.inah.gob.mx/index.php/arqueologia/article/download/18327/19713/39517](https://revistas.inah.gob.mx/index.php/arqueologia/article/download/18327/19713/39517) · `inah_sun.csv` · used in w02-p3

*Peer-reviewed archaeology journal (INAH).* Alejandro Sarabia González (Zona Arqueológica de Teotihuacán, INAH), Arqueología 61, July 2020, p. 1 (Spanish; translated). Other sources give heights from about 63 m to 75 m, partly because they measure different construction stages. The square base and smooth or stepped shapes in the problem are models.

| Quantity | Published value |
| --- | --- |
| Height today | 66.00 m |
| Base | 224.00 m |
| Architectural levels (cuerpos) | 4 |
| Solid volume | a little over 1,175,000 m³ |

## Civil Engineering (ASCE): Giant Ethiopian dam promises greater flood control

[https://www.asce.org/publications-and-news/civil-engineering-source/civil-engineering-magazine/issues/magazine-issue/article/2025/07/giant-ethiopian-dam-promises-greater-flood-control-and-water-management](https://www.asce.org/publications-and-news/civil-engineering-source/civil-engineering-magazine/issues/magazine-issue/article/2025/07/giant-ethiopian-dam-promises-greater-flood-control-and-water-management) · `asce_gerd.csv` · used in w02-p4

*Published engineering description.* ASCE Civil Engineering magazine, July 2025. The article also stresses the Blue Nile’s “substantial sediment load” but gives no number; the sediment profile in the problem is assumed.

| Quantity | Published value |
| --- | --- |
| Dam height and length | 145 m high, 1,780 m long |
| Storage at full capacity | 74 billion m³ |
| Reservoir area when full | about 1,874 km² |
| Full supply level | 640 m above mean sea level |
| Powerhouse capacity | 5,150 MW |

## Wikipedia: Grand Ethiopian Renaissance Dam (infobox)

[https://en.wikipedia.org/wiki/Grand_Ethiopian_Renaissance_Dam](https://en.wikipedia.org/wiki/Grand_Ethiopian_Renaissance_Dam) · `wiki_gerd.csv` · used in w02-p4

*Secondary source (encyclopedia).* Secondary, uncited infobox values, accessed November 17, 2026; used only for the depth at the dam and the reservoir length, which the ASCE article does not give.

| Quantity | Reported value |
| --- | --- |
| Maximum water depth | 140 m |
| Maximum reservoir length | 246 km |

## NASA Ozone Watch: annual records

[https://ozonewatch.gsfc.nasa.gov/meteorology/annual_data.html](https://ozonewatch.gsfc.nasa.gov/meteorology/annual_data.html) · `nasa_ozone.csv` · used in w02-p5

*Published observation-derived records.* NASA Goddard Ozone Watch, accessed November 17, 2026: maximum daily ozone-hole area and minimum daily ozone for each year. NASA’s facts page defines the hole as “the region over Antarctica with total ozone of 220 Dobson Units or lower.” The circular hole and the coarse square grid in the problem are models.

| Year | Max hole area (million km²), date |
| --- | --- |
| 2000 | 29.9, 9 Sep |
| 2006 | 29.6, 24 Sep |
| 2015 | 28.2, 2 Oct |
| 2022 | 26.5, 5 Oct |
| 2023 | 26.0, 21 Sep |

## Syndicat Mixte de la Grande Dune du Pilat: visitor brochure (2023)

[https://ladunedupilat.com/wp-content/uploads/2023/07/Dune_Pilat_depliant_HD_EN_2023.pdf](https://ladunedupilat.com/wp-content/uploads/2023/07/Dune_Pilat_depliant_HD_EN_2023.pdf) · `pilat.csv` · used in w03-p1

*Published site figures.* Official English brochure of the public body that manages the Grand Site de la Dune du Pilat. Figures are rounded; the height is given as about 110 m. The parabola-and-line cross-section in the problem is a model.

| Quantity | Published value |
| --- | --- |
| Width | 600 m |
| Length | 2,900 m |
| Height | about 110 m |
| Sand | 55 million m³ |
| Movement toward the forest | 1 to 5 m per year |

## Wikipedia: Khumbu Glacier

[https://en.wikipedia.org/wiki/Khumbu_Glacier](https://en.wikipedia.org/wiki/Khumbu_Glacier) · `khumbu.csv` · used in w03-p3

*Secondary source (encyclopedia).* Wikipedia, accessed November 17, 2026, citing an ASTER study of supraglacial lakes in the Everest region. Only the length and elevations are published here; the tongue length, width, thickness, and shape in the problem are assumptions for a model, not survey values.

| Quantity | Reported value |
| --- | --- |
| Length of the main glacier | about 17 km |
| Elevation of the terminus | 4,900 m |
| Elevation of the source | 7,600 m |

## Lake Turkana Wind Power Project: Updated ESIA Summary (EIB, 2011)

[https://www.eib.org/attachments/registers/53222536.pdf](https://www.eib.org/attachments/registers/53222536.pdf) · `turkana.csv` · used in w03-p4

*Published project summary.* European Investment Bank register, Updated Environmental and Social Impact Assessment Summary, November 2011. The wind farm was completed in 2018 with the same 365 V52 turbines. The Weibull wind model and the turbine power curve in the problem are assumptions.

| Quantity | Published value |
| --- | --- |
| Turbines | 365 Vestas V52, 0.850 MW each, hub height 44 m |
| Installed capacity | 310 MW |
| Average wind speed | 11 m/s (on-site measurements by DEWI) |
| Estimated average production | 1,440 GWh per year |

## Wikipedia: Three Gorges Dam (ship lift)

[https://en.wikipedia.org/wiki/Three_Gorges_Dam](https://en.wikipedia.org/wiki/Three_Gorges_Dam) · `threegorges.csv` · used in w03-p5

*Secondary source (encyclopedia).* Wikipedia, accessed November 17, 2026; the lift height is cited there to the China Three Gorges Project. The smooth-start motion in the problem is an assumption.

| Quantity | Reported value |
| --- | --- |
| Ship lift basin | 120 m × 18 m × 3.5 m |
| Vertical distance travelled | 113 m |
| Largest ships lifted | 3,000 tons |

## Considerations for Nozzle Package Selection for Center Pivots (K-State L908)

[https://bookstore.ksre.ksu.edu/download/considerations-for-nozzle-package-selection-for-center-pivots_L908](https://bookstore.ksre.ksu.edu/download/considerations-for-nozzle-package-selection-for-center-pivots_L908) · `kspivot.csv` · used in w04-p1

*Published extension guidance and worked example.* D. H. Rogers and M. Alam, Kansas State University Research and Extension publication L908, December 2008. The 128-acre, 650 gpm system is the publication’s worked example, not a particular farm. Treating the irrigated area as one full circle and the nozzle spacing are assumptions.

| Quantity | Published value |
| --- | --- |
| Share of Kansas irrigated acreage watered by center pivots | approximately 90 percent |
| Worked example: irrigated area | 128 acres |
| Worked example: system flow | 650 gpm |
| Worked example: system irrigation capacity | 0.27 in/day |
| Why nozzle rates rise outward | application rate increases with distance from the pivot point as more area is covered by the nozzle |

## Scientific Background on the Nobel Prize in Physics 2010: Graphene

[https://www.nobelprize.org/uploads/2018/06/advanced-physicsprize2010-1.pdf](https://www.nobelprize.org/uploads/2018/06/advanced-physicsprize2010-1.pdf) · `graphene.csv` · used in w04-p2

*Published physical constants of a material.* Class for Physics of the Royal Swedish Academy of Sciences, 2010. The lattice vectors used in the problem follow from the published carbon–carbon distance; the hammock is the document’s own illustration.

| Quantity | Published value |
| --- | --- |
| Carbon–carbon distance | 0.142 nm |
| Atoms per unit hexagonal cell | 2 |
| Area of the unit cell | 0.052 nm² |
| Density | 0.77 mg/m² |
| 1 m² hammock: load it could hold | approximately 4 kg (a cat) |

## JPL Small-Body Database and Horizons: comet C/2020 F3 (NEOWISE)

[https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=C%2F2020%20F3](https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=C%2F2020%20F3) · `neowise.csv` · used in w04-p3

*Published orbit solution and ephemeris.* NASA JPL Solar System Dynamics, orbit solution JPL#31 (epoch 2020-Jul-06), accessed November 17, 2026. Heliocentric distances are from a Horizons vector ephemeris (centre: Sun). 1 au = 149,597,870.7 km.

| Quantity | Published value |
| --- | --- |
| Perihelion distance q | 0.29465 au |
| Eccentricity e | 0.99918 |
| Time of perihelion | JD 2459034.179 TDB (2020 July 3.68) |
| Distance from Sun, 2020-Aug-09 00:00 TDB | 148,741,645 km |
| Distance from Sun, 2020-Aug-10 00:00 TDB | 151,791,397 km |

## Box–Muller Transformation (Wolfram MathWorld)

[https://mathworld.wolfram.com/Box-MullerTransformation.html](https://mathworld.wolfram.com/Box-MullerTransformation.html) · `boxmuller.csv` · used in w04-p4

*Published method (secondary reference).* E. W. Weisstein, MathWorld, accessed November 17, 2026; secondary source for the method of G. E. P. Box and M. E. Muller, Ann. Math. Statist. 29 (1958), 610–611. No measured data are involved.

| Item | Published form |
| --- | --- |
| Inputs | two independent uniform random numbers in (0, 1) |
| First output | $\sqrt{-2\ln x_1}\cos(2\pi x_2)$ |
| Second output | $\sqrt{-2\ln x_1}\sin(2\pi x_2)$ |
| Result | two independent standard normal numbers |

## Map Projections: A Working Manual (USGS Professional Paper 1395)

[https://pubs.usgs.gov/pp/1395/report.pdf](https://pubs.usgs.gov/pp/1395/report.pdf) · `snyder.csv` · used in w04-p5

*Published projection formulas.* J. P. Snyder, U.S. Geological Survey, 1987, chapter 7 (Mercator) and chapter 10 (cylindrical equal-area), spherical forms.

| Projection | Published formula |
| --- | --- |
| Mercator | $x=R(\lambda-\lambda_0)$, $y=R\ln\tan(\pi/4+\phi/2)$ |
| Mercator scale factor | $h=k=\sec\phi$ |
| Mercator areal scale factor | $\sec^2\phi$ |
| Cylindrical equal-area (standard parallel 0°) | $x=R(\lambda-\lambda_0)$, $y=R\sin\phi$ |

## UN Demographic Yearbook 2014, Table 3 (surface area)

[https://unstats.un.org/unsd/Demographic/products/dyb/dyb2014/Table03.pdf](https://unstats.un.org/unsd/Demographic/products/dyb/dyb2014/Table03.pdf) · `unareas.csv` · used in w04-p5

*Published national surface areas.* United Nations Statistics Division. Surface area includes land and inland waters.

| Country or area | Surface area (km²) |
| --- | --- |
| Greenland | 2,166,086 |
| Democratic Republic of the Congo | 2,344,858 |

## Gateway Arch Fact Sheet (National Park Service)

[https://www.nps.gov/jeff/planyourvisit/gateway-arch-fact-sheet.htm](https://www.nps.gov/jeff/planyourvisit/gateway-arch-fact-sheet.htm) · `gatewayarch.csv` · used in w05-p1

*Published structural dimensions.* Gateway Arch National Park, U.S. National Park Service, accessed November 17, 2026. The parabolic outlines and the thickness-based density in the problem are models, not the arch’s design curve.

| Quantity | Published value |
| --- | --- |
| Outer width (outside north leg to outside south leg) | 630 ft (192 m) |
| Maximum height | 630 ft (192 m) |
| Shape of arch section | equilateral triangle |
| Dimension of arch at base | 54 ft (16.46 m) |
| Dimension of arch at top | 17 ft (5.18 m) |
| Concrete between skins | to 300 ft (91 m) |

## NASA Earth Fact Sheet (bulk parameters)

[https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html](https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html) · `earthfacts.csv` · used in w05-p2

*Published planetary parameters.* NASA NSSDC, accessed November 17, 2026. The moment of inertia factor is measured from Earth’s response to the torques of the Sun and Moon; the quadratic density profile in the problem is a model.

| Quantity | Published value |
| --- | --- |
| Mass | 5.9722 × 10²⁴ kg |
| Volumetric mean radius | 6371.000 km |
| Mean density | 5513 kg/m³ |
| Moment of inertia (I/MR²) | 0.3308 |
| GM | 0.39860 × 10^6 km³/s² (398,600 km³/s²) |
| Escape velocity | 11.186 km/s |

## First experiences of operational use of a dual-polarisation weather radar in Finland

[https://ams.confex.com/ams/35Radar/webprogram/Manuscript/Paper191344/Manuscript.pdf](https://ams.confex.com/ams/35Radar/webprogram/Manuscript/Paper191344/Manuscript.pdf) · `fmiradar.csv` · used in w05-p3

*Published radar scan schedule.* L. Nevvonen and E. Saltikoff (Finnish Meteorological Institute), 35th AMS Conference on Radar Meteorology, 2011, Table 1. The schedule repeats every 15 minutes. The flat-Earth, straight-beam geometry in the problem is a simplification.

| Scan group | Elevation angles (deg) |
| --- | --- |
| A | 0.3, 1.5, 3, 5, 9 |
| B | 0.3, 2, 4 |
| C | 2, 7, 11, 15, 25, 45 |
| RHI | 0.0 to 60.0 |

## The effects of urban lighting on the brightness of the night sky

[https://articles.adsabs.harvard.edu/pdf/1977PASP...89..405W](https://articles.adsabs.harvard.edu/pdf/1977PASP...89..405W) · `walker1977.csv` · used in w05-p4

*Published observations and empirical law.* M. F. Walker (Lick Observatory, UC Santa Cruz), Publications of the Astronomical Society of the Pacific 89 (1977) 405–409, Table III, column (1). Sky brightness at 45° altitude toward Salinas, in units of the natural sky brightness. Uniformly spread lights in the problem are a model.

| Distance from Salinas (km) | Visual intensity |
| --- | --- |
| 8.0 | 2.41 |
| 10.5 | 1.91 |
| 14.2 | 1.23 |
| 16.9 | 0.59 |
| 18.7 | 0.68 |
| 24.5 | 0.27 |
| 32.2 | 0.14 |
| 35.7 | 0.09 |

## Guinness World Records: largest tuned mass damper

[https://www.guinnessworldrecords.com/world-records/774616-largest-tuned-mass-damper](https://www.guinnessworldrecords.com/world-records/774616-largest-tuned-mass-damper) · `taipeidamper.csv` · used in w05-p5

*Published record entry.* Guinness World Records, record dated December 31, 2004, accessed November 17, 2026. The damper is built of stacked steel plates; treating it as a solid ball of uniform steel is an assumption.

| Quantity | Published value |
| --- | --- |
| Mass of the pendulum weight | 660 tonnes |
| Hangs between floors | 87th and 92nd |
| Building height | 508 m |
| Maximum extension | 1.5 m |

## Golden Gate Bridge: design and construction statistics

[https://www.goldengate.org/bridge/history-research/statistics-data/design-construction-stats/](https://www.goldengate.org/bridge/history-research/statistics-data/design-construction-stats/) · `ggbridge.csv` · used in w06-p1

*Published structural statistics.* Golden Gate Bridge Highway and Transportation District, accessed November 17, 2026. The weight row covers both main cables plus the suspender cables and accessories.

| Quantity | Published value |
| --- | --- |
| Main span (distance between towers) | 4,200 ft (1,280 m) |
| Diameter of one main cable, with wrapping | 36 3/8 in (0.92 m) |
| Steel wires in one main cable | 27,572 |
| Length of one main cable (anchorage to anchorage) | 7,650 ft (2,332 m) |

## The Golden Gate Bridge (statics chapter), Table 3.2

[https://www.goldengate.org/assets/1/6/ggb-exhibit-chapter-statistics1.pdf](https://www.goldengate.org/assets/1/6/ggb-exhibit-chapter-statistics1.pdf) · `ggbstatics.csv` · used in w06-p1

*Published structural properties (textbook table).* Chapter by Thalia Anagnos in Sheppard and Tongue, Statics: Analysis and Design of Systems in Equilibrium (Wiley), hosted by the Bridge District. Its Table 3.2 cites the District and Abdel-Ghaffar and Scanlan (1985). The parabolic shape used in the problem is a model.

| Quantity | Published value |
| --- | --- |
| Length of main span | 1280 m |
| Maximum sag in main cable | 144 m |
| Weight of cable per one horizontal meter | 48.7 kN/m |
| Height of each tower | 227 m |

## WHOI Polar Discovery: Antarctic circulation

[https://polardiscovery.whoi.edu/antarctica/circulation-en2.html](https://polardiscovery.whoi.edu/antarctica/circulation-en2.html) · `acc.csv` · used in w06-p2

*Published typical current speeds.* Woods Hole Oceanographic Institution, Polar Discovery (2006), map caption. The companion WHOI page divediscover.whoi.edu/polar-regions/antarctic-ocean-circulation describes the current as the West Wind Drift, driven by strong westerly winds. The speed field in the problem is a model, not a measurement.

| Quantity | Published value |
| --- | --- |
| Average speed of the Antarctic Circumpolar Current | 50 cm/s (1 knot) |
| Range of speeds around Antarctica | about 10 to 100 cm/s |

## J. B. West, “Oxygenless” climbs and barometric pressure

[https://publications.americanalpineclub.org/articles/12198412600](https://publications.americanalpineclub.org/articles/12198412600) · `everest.csv` · used in w06-p3

*Published field measurement.* American Alpine Journal, 1984. The article reports the pressure Chris Pizzo measured on the summit of Mount Everest during the American Medical Research Expedition to Everest, October 1981, and notes it was 17 mm higher than the Standard Atmosphere predicts. 760 mm Hg is one standard atmosphere by definition.

| Quantity | Published value |
| --- | --- |
| Barometric pressure on the summit, October 1981 | 253 mm Hg |
| Standard sea-level pressure (definition of 1 atm) | 760 mm Hg |

## Südtirol tourism: Passo dello Stelvio

[https://www.suedtirol.info/it/it/informazioni/mobilita/passi-in-alto-adige/passo-dello-stelvio](https://www.suedtirol.info/it/it/informazioni/mobilita/passi-in-alto-adige/passo-dello-stelvio) · `stelvio.csv` · used in w06-p4

*Published elevations and route data.* Official South Tyrol tourism site, accessed November 17, 2026. The page gives 1838 m of climbing for the 25 km bike route; the endpoint elevations below differ by 1842 m.

| Quantity | Published value |
| --- | --- |
| Height of the Stelvio Pass | 2757 m |
| Height of Prato allo Stelvio | 915 m |
| Hairpin bends between Prato and the pass | 48 |
| Bike route length | 25 km |

## NASA Earth Fact Sheet (gravity parameters)

[https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html](https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html) · `earthgm.csv` · used in w06-p2, w06-p4

*Published planetary parameters.* NASA NSSDC, accessed November 17, 2026. GM is the product of the gravitational constant and Earth’s mass. The real Earth is slightly flattened and rotating; the problem uses a non-rotating sphere.

| Quantity | Published value |
| --- | --- |
| GM | 0.39860 million km³/s² |
| Volumetric mean radius | 6371.000 km |
| Mean surface gravity | 9.820 m/s² |

## National Weather Service: How powerful is lightning?

[https://www.weather.gov/safety/lightning-power](https://www.weather.gov/safety/lightning-power) · `lightning.csv` · used in w06-p5

*Published typical values.* NOAA National Weather Service, accessed November 17, 2026. The strike frequency is from the NWS page weather.gov/safety/lightning-myths. Real flashes vary widely; the straight, steady channel in the problem is a model.

| Quantity | Published value |
| --- | --- |
| Typical lightning flash current | about 30,000 A |
| Typical lightning flash voltage | about 300 million V |
| Strikes on the Empire State Building | about 23 per year on average |

## NASA Earth Fact Sheet

[https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html](https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html) · `earth.csv` · used in w07-p1, w08-p1, w10-p1, w10-p5

*Published planetary parameters.* NASA NSSDC Earth Fact Sheet, accessed November 17, 2026. The volumetric mean radius is the radius of a sphere with Earth’s volume; the real Earth is slightly flattened at the poles.

| Quantity | Published value |
| --- | --- |
| Volumetric mean radius | 6371.000 km |
| Obliquity to orbit (axial tilt) | 23.44° |

## ALMA Memo 574: 12 m antenna optics

[https://science.nrao.edu/facilities/alma/aboutALMA/Technology/ALMA_Memo_Series/alma574/memo574.pdf](https://science.nrao.edu/facilities/alma/aboutALMA/Technology/ALMA_Memo_Series/alma574/memo574.pdf) · `alma.csv` · used in w07-p2

*Published antenna design parameters.* Sugimoto et al. (NAOJ ALMA project office), ALMA Memo 574, 2007, Table 1. The memo states that the ACA 12 m antenna shares the optics parameters of the 12 m antennas used for ALMA. The tabulated values are for the 12 m prototype design.

| Quantity | Published value |
| --- | --- |
| Primary mirror diameter | 12 m |
| Primary focal length | 4800 mm |
| Primary focal ratio f/D | 0.4 |
| Vertex hole diameter | 750 mm |

## Niederaussem natural-draft cooling tower

[https://structurae.net/en/literature/journal-article/world-s-tallest-natural-draft-cooling-tower](https://structurae.net/en/literature/journal-article/world-s-tallest-natural-draft-cooling-tower) · `cooling.csv` · used in w07-p3

*Published structural dimensions.* Busch, Harte, Krätzig and Montag, Structural Engineering International 11(2), 2001, describe the 200 m tower. The 152 m base diameter and 0.24 m wall thickness come from co-author W. B. Krätzig’s summary on shellbuckling.com. The narrowest radius and exact shape in the problem are assumed.

| Quantity | Published value |
| --- | --- |
| Height | 200 m |
| Base diameter | 152 m |
| Shell wall thickness | about 0.24 m |

## Great Zimbabwe: the Conical Tower

[https://en.wikipedia.org/wiki/Great_Zimbabwe](https://en.wikipedia.org/wiki/Great_Zimbabwe) · `zimbabwe.csv` · used in w07-p4

*Published approximate dimensions (secondary source).* Wikipedia’s Great Zimbabwe article, citing P. Garlake, Great Zimbabwe (1973), p. 29, gives the dimensions below. Other descriptions differ by about a metre. The top radius used in the problem is assumed.

| Quantity | Reported value |
| --- | --- |
| Height | 30 ft (about 9 m) |
| Base diameter | 18 ft (about 5.5 m) |

## ITER EDA Newsletter (IAEA), October 2000

[https://www-pub.iaea.org/MTCD/Publications/PDF/Newsletters/ITER-NL-9-10.pdf](https://www-pub.iaea.org/MTCD/Publications/PDF/Newsletters/ITER-NL-9-10.pdf) · `iter.csv` · used in w07-p5

*Published design parameters.* International Atomic Energy Agency, ITER EDA Newsletter Vol. 9 No. 10, lists the plasma parameters below. The real plasma cross-section is D-shaped, not circular.

| Quantity | Published value |
| --- | --- |
| Plasma major radius | 6.2 m |
| Plasma minor radius | 2.0 m |
| Plasma volume | 837 m³ |

## A new, lower value of total solar irradiance (Kopp and Lean, 2011)

[https://espo.nasa.gov/node/30086](https://espo.nasa.gov/node/30086) · `tsi2011.csv` · used in w08-p1

*Published satellite measurement (peer-reviewed).* G. Kopp and J. Lean, Geophysical Research Letters 38 (2011), doi:10.1029/2010GL045777. Abstract hosted by NASA ESPO, accessed November 17, 2026: “The most accurate value of total solar irradiance during the 2008 solar minimum period is 1360.8 pm 0.5 W m^{-2}.” The irradiance varies by about 0.1% over a solar cycle.

| Quantity | Published value |
| --- | --- |
| Total solar irradiance at 1 au (2008 solar minimum) | 1360.8 $\pm$ 0.5 W/m² |

## NASA Sun Fact Sheet

[https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html](https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html) · `sunfacts.csv` · used in w08-p1

*Published solar parameters.* NASA NSSDC Sun Fact Sheet, accessed November 17, 2026. The luminosity is listed as 382.8times10^{24} J/s; it is used here only as a check on the flux computation.

| Quantity | Published value |
| --- | --- |
| Mean distance from Earth | $149.6\times10^{6}$ km |
| Luminosity | $382.8\times10^{24}$ J/s |

## NREL SolarPACES: NOOR I CSP Project

[https://solarpaces.nlr.gov/project/noor-i](https://solarpaces.nlr.gov/project/noor-i) · `noor1.csv` · used in w08-p2

*Published plant data.* NREL concentrating solar power project database (now hosted at solarpaces.nlr.gov), accessed November 17, 2026. SENER’s NOORo I fact sheet gives the matching figures 160 MWe and “1.3 Mm2 total reflective area.”

| Quantity | Published value |
| --- | --- |
| Location (lat, long) | 30.994, −6.863 |
| Turbine capacity | 160 MW |
| Solar-field aperture area | 1,308,000 m² |
| Collector | SenerTrough parabolic trough |
| Thermal storage | 3 h, molten salt |
| Expected generation | 370 GWh/year |

## Parabolic Trough Collector Overview (Kearney, NREL Parabolic Trough Workshop 2007)

[https://webarchive.library.unt.edu/eot2008/20081106024529/http://www.nrel.gov/csp/troughnet/pdfs/2007/kearney_collector_technology.pdf](https://webarchive.library.unt.edu/eot2008/20081106024529/http://www.nrel.gov/csp/troughnet/pdfs/2007/kearney_collector_technology.pdf) · `sentrough.csv` · used in w08-p2

*Published collector design data (workshop slides).* D. W. Kearney, NREL Parabolic Trough Workshop, March 2007, slide 11 (SENER collector), archived copy. These are SENER’s 2007 collector dimensions; that NOOR I uses exactly this geometry is an assumption.

| Quantity | Published value |
| --- | --- |
| Aperture width | 5.76 m |
| Focal length | 1.70 m |
| Length per collector module | 12 m |
| Length per collector assembly | 150 m |

## USGS Water Science School: Precipitation and the Water Cycle

[https://www.usgs.gov/water-science-school/science/precipitation-and-water-cycle](https://www.usgs.gov/water-science-school/science/precipitation-and-water-cycle) · `usgsrain.csv` · used in w08-p3

*Published typical values (secondary table).* USGS table of typical raindrop properties, which USGS credits to Lull (1959), USDA Forest Service Misc. Publication 768. Values are typical, not measurements of a particular storm.

| Precipitation type | Intensity |
| --- | --- |
| Moderate rain | 0.15 in/h (0.38 cm/h) |
| Heavy rain | 0.60 in/h (1.52 cm/h) |

## Whether or not to run in the rain (Bocci, 2012)

[https://iopscience.iop.org/article/10.1088/0143-0807/33/5/1321](https://iopscience.iop.org/article/10.1088/0143-0807/33/5/1321) · `bocci2012.csv` · used in w08-p3

*Peer-reviewed physics paper (abstract).* F. Bocci, European Journal of Physics 33 (2012) 1321. The abstract states that the best strategy depends on the shape and orientation of the moving body and on the wind. No numbers from the paper are used here.

| Item | Value |
| --- | --- |
| Journal | Eur. J. Phys. 33, 1321 (2012) |
| Main finding | Best strategy depends on body shape, orientation, and wind |

## Planck 2018 results VI: Cosmological parameters

[https://arxiv.org/abs/1807.06209](https://arxiv.org/abs/1807.06209) · `planck2018.csv` · used in w08-p4

*Published measurement (peer-reviewed).* Planck Collaboration, Astronomy and Astrophysics 641, A6 (2020). Abstract: “Hubble constant H0 = (67.4 pm 0.5) km/s/Mpc,” assuming the base Lambda-CDM model.

| Quantity | Published value |
| --- | --- |
| Hubble constant (from the cosmic microwave background) | 67.4 $\pm$ 0.5 km/s/Mpc |

## A comprehensive measurement of the local value of the Hubble constant (Riess et al., 2022)

[https://arxiv.org/abs/2112.04510](https://arxiv.org/abs/2112.04510) · `shoes2022.csv` · used in w08-p4

*Published measurement (peer-reviewed).* A. G. Riess et al. (SH0ES team), Astrophysical Journal Letters (2022), doi:10.3847/2041-8213/ac5c5b. Abstract: “Our baseline result from the Cepheid-SN sample is H0=73.04+-1.04 km/s/Mpc.”

| Quantity | Published value |
| --- | --- |
| Hubble constant (Cepheids and supernovae) | 73.04 $\pm$ 1.04 km/s/Mpc |

## Particle Data Group: Astrophysical constants and parameters (2016)

[https://ccwww.kek.jp/pdg/2017/reviews/rpp2016-rev-astrophysical-constants.pdf](https://ccwww.kek.jp/pdg/2017/reviews/rpp2016-rev-astrophysical-constants.pdf) · `pdgastro.csv` · used in w08-p4

*Published unit conversion.* Review of Particle Physics 2016 (mirror at KEK). Used only for the unit conversion of H0 to inverse gigayears.

| Quantity | Published value |
| --- | --- |
| Hubble rate conversion | $100h$ km/s/Mpc $= h\times(9.777752$ Gyr$)^{-1}$ |
| Parsec | $3.08567758149\times10^{16}$ m |

## NASA: Satellite reveals how much Saharan dust feeds Amazon’s plants

[https://www.nasa.gov/science-research/earth-science/nasa-satellite-reveals-how-much-saharan-dust-feeds-amazons-plants/](https://www.nasa.gov/science-research/earth-science/nasa-satellite-reveals-how-much-saharan-dust-feeds-amazons-plants/) · `saharadust.csv` · used in w08-p5

*Published satellite-based estimates (press release).* NASA, February 2015, describing H. Yu et al., Geophysical Research Letters (2015), doi:10.1002/2015GL063040, based on CALIPSO observations 2007–2013. Values are multi-year averages; the press release says “tons,” treated here as metric tonnes.

| Quantity | Published value |
| --- | --- |
| Dust carried past the western edge of the Sahara (15°W) | 182 million tons per year |
| Still airborne near South America’s east coast (35°W) | 132 million tons per year |
| Falling on the Amazon basin | 27.7 million tons per year |
| Travelling past 75°W to the Caribbean | about 43 million tons per year |

## NOAA CO-OPS tide station metadata

[https://api.tidesandcurrents.noaa.gov/mdapi/prod/webapi/stations/8723214.json](https://api.tidesandcurrents.noaa.gov/mdapi/prod/webapi/stations/8723214.json) · `noaastations.csv` · used in w09-p1

*Published station coordinates.* NOAA Center for Operational Oceanographic Products and Services metadata API, accessed November 17, 2026: stations 8723214, 2695540, and 9755371 (replace the station number in the link). The stations stand in for the three cities; a flat chart and rounded vertices are modeling choices.

| Station | Latitude |
| --- | --- |
| Virginia Key (Miami), FL | 25.7314° N |
| Bermuda, St. Georges Island | 32.3734° N |
| San Juan, La Puntilla, PR | 18.4589° N |

## NOAA Ocean Service: What is the Bermuda Triangle?

[https://oceanservice.noaa.gov/facts/bermudatri.html](https://oceanservice.noaa.gov/facts/bermudatri.html) · `bermuda.csv` · used in w09-p1

*Published agency statement.* NOAA National Ocean Service. The vertices Miami, San Juan, and Bermuda come from Vincent Gaddis’s 1964 Argosy article, as summarized in Wikipedia’s article on the Bermuda Triangle (a secondary source), which notes that later writers used other boundaries enclosing 1.3 to 3.9 million km².

| Item | Published statement |
| --- | --- |
| Location | A region in the western part of the North Atlantic Ocean |
| Official status | The U.S. Board on Geographic Names keeps no official file on the area |
| Disappearances | No evidence that they occur there with any greater frequency than elsewhere |

## The Ancient Theatre Archive: Theatre at Orange (Arausio)

[https://www.whitman.edu/theatre/theatretour/Orange/Orange.home.htm](https://www.whitman.edu/theatre/theatretour/Orange/Orange.home.htm) · `orange.csv` · used in w09-p2

*Published dimensions (academic archive).* Thomas G. Hines, Department of Theatre, Whitman College (2009). The page gives no measurement method; other descriptions give a cavea about 104 m across and an orchestra about 27 m across. The half-ring shape is a model.

| Quantity | Published value |
| --- | --- |
| Seating diameter | 103.63 m |
| Orchestra diameter | 29.9 m |
| Seating capacity | 5,850 / 7,300 |

## JMA position table for Typhoon Haiyan (1330)

[https://www.data.jma.go.jp/typhoon/data/T1330.pdf](https://www.data.jma.go.jp/typhoon/data/T1330.pdf) · `haiyan.csv` · used in w09-p3

*Published best-track values (Regional Specialized Meteorological Center Tokyo).* Japan Meteorological Agency. Winds are 10-minute averages. JMA defines the storm-force wind area as winds of 25 m/s or more and the gale area as 15 m/s or more (jma.go.jp/jma/kishou/know/typhoon/1-3.html). Agencies that use 1-minute averages reported higher peak winds.

| Quantity (peak, Nov. 7, 21 JST to Nov. 8, 03 JST) | Published value |
| --- | --- |
| Central pressure | 895 hPa |
| Maximum 10-minute wind | 65 m/s |
| Storm-force (25 m/s) wind radius | 150 km |
| Gale (15 m/s) wind radius | 460 km north, 330 km south |

## IMOS Deep Water Arrays: the East Australian Current (EAC) array

[https://imos.org.au/facility/deep-water-moorings/deep-water-arrays](https://imos.org.au/facility/deep-water-moorings/deep-water-arrays) · `imoseac.csv` · used in w09-p4

*Published program description (Integrated Marine Observing System, operated by CSIRO).* Integrated Marine Observing System (Australia), accessed November 18, 2026. Water depths and float clusters come from the IMOS 2015 deployment drawings, data.aodn.org.au/IMOS/DWM/Deployments/Schematic_EAC_array.pdf (drawing titles and the M4 sheet).

| Item | Published value |
| --- | --- |
| Moorings in the EAC array | 6, from the continental slope to the abyssal waters off Brisbane |
| Status | The array ceased in 2023 |
| 2015 drawings, water depth of M1 to M6 | 500, 2000, 3200, 4200, 4700, 4800 m |
| Mooring M4 design depth | 4259 m |
| M4 float cluster near the top | 16 glass floats, 17-inch |

## VITROVEX glass floatation spheres (Nautilus Marine Service)

[https://www.vitrovex.com/en/overview-flotation-housings-spheres](https://www.vitrovex.com/en/overview-flotation-housings-spheres) · `vitrovex.csv` · used in w09-p4

*Published manufacturer specifications.* Nautilus Marine Service GmbH, overview page and datasheet (last update 03/2020); the datasheet states that its figures are based on seawater of 1.025 g/cm³. The IMOS drawings say only “glass floats 17-inch” without naming a maker, so this model stands in as a representative 17-inch deep-sea sphere.

| Quantity (model FS-6700-17) | Published value |
| --- | --- |
| Depth rating | 6700 m |
| Outer diameter | 17 in (432 mm) |
| Wall thickness | 14 mm |
| Weight in air | 17 kg |
| Net buoyancy | 26 kg |
| Density basis | seawater 1.025 g/cm³ |

## CFOO Sea Atlas: Agulhas rings

[https://cfoo.co.za/seaatlas/agulhasring.php](https://cfoo.co.za/seaatlas/agulhasring.php) · `agulhas.csv` · used in w09-p5

*Published typical properties.* Centre for in situ Observational Oceanography (South Africa), Sea Atlas education pages, citing Pichevin, Nof and Lutjeharms (1999) for the drift speed. The swirl profile in the problem is a model.

| Quantity | Published value |
| --- | --- |
| Rings shed per year | about six |
| Diameter | 200 to 280 km |
| Depth reached | about 1100 m |
| Sense of rotation | anticyclonic |
| Drift speed | about 5 to 8 km per day |

## IERS useful constants

[https://hpiers.obspm.fr/eop-pc/models/constants.html](https://hpiers.obspm.fr/eop-pc/models/constants.html) · `iersconst.csv` · used in w10-p1

*Published geodetic constants.* International Earth Rotation and Reference Systems Service (Paris Observatory), accessed November 17, 2026. The nominal angular velocity is exact by definition; the measured mean value agrees to the digits shown.

| Quantity | Published value |
| --- | --- |
| Nominal angular velocity of the Earth | $7.292115146706\times10^{-5}$ rad/s |
| Earth’s equatorial radius | 6,378,136.6 m |

## NOAA station 9413450, Monterey Harbor: location

[https://tidesandcurrents.noaa.gov/benchmarks/9413450.html](https://tidesandcurrents.noaa.gov/benchmarks/9413450.html) · `montereylat.csv` · used in w10-p1

*Published station coordinates.* NOAA Tides and Currents benchmark sheet for station 9413450 (the same page as the shared tidal-datum source), accessed November 17, 2026.

| Quantity | Published value |
| --- | --- |
| Station | MONTEREY, MONTEREY HARBOR CA |
| Latitude | 36° 36.3′ N (36.60500) |
| Longitude | 121° 53.3′ W (−121.88800) |

## The Qi Wireless Power Transfer System, Power Class 0, Part 4: Reference Designs (v1.2.3)

[https://faculty-web.msoe.edu/johnsontimoj/EE4980/files4980/Qi-PC0-part4-v1.2.3.pdf](https://faculty-web.msoe.edu/johnsontimoj/EE4980/files4980/Qi-PC0-part4-v1.2.3.pdf) · `qispec.csv` · used in w10-p2

*Published industry specification.* Wireless Power Consortium, February 2017, Section 2.2.2 (Power Transmitter design A2), Table 1; copy hosted on a Milwaukee School of Engineering course page. Other Qi designs use other coils and frequencies.

| Quantity (design A2 primary coil) | Published value |
| --- | --- |
| Outer diameter | 40 $\pm$ 1 mm |
| Inner diameter | 19 $\pm$ 1 mm |
| Turns | 10 per layer, 2 layers |
| Operating frequency | fixed, 140 kHz |

## LHC Design Report, Volume I, Chapter 2: Beam parameters and definitions

[https://indico.cern.ch/event/1001431/contributions/4205544/attachments/2183624/3689221/Vol_1_Chapter_2.pdf](https://indico.cern.ch/event/1001431/contributions/4205544/attachments/2183624/3689221/Vol_1_Chapter_2.pdf) · `lhcdesign.csv` · used in w10-p3

*Published design parameters.* CERN, LHC Design Report Vol. I (2004), Tables 2.1 and 2.4 (copy on CERN Indico). Collision values for 7 TeV protons.

| Quantity | Published value |
| --- | --- |
| Ring circumference | 26,658.883 m |
| Number of main bends (dipoles) | 1232 |
| Field of main bends | 8.33 T |
| Circulating beam current | 0.582 A |
| Bare inner vacuum screen in arcs | 36.9 mm wide, 46.5 mm high |

## Performance of the LHC arc superconducting quadrupoles (EPAC 2006)

[https://proceedings.jacow.org/e06/PAPERS/WEPLS105.PDF](https://proceedings.jacow.org/e06/PAPERS/WEPLS105.PDF) · `lhcquad.csv` · used in w10-p3

*Published magnet parameters (conference paper).* T. Tortschanoff et al. (CERN, CEA Saclay, ACCEL Instruments), Proceedings of EPAC 2006, Edinburgh, paper WEPLS105.

| Quantity | Published value |
| --- | --- |
| Main arc quadrupoles fabricated | 408 |
| Nominal gradient | 223 T/m |

## ESA Cluster: Electrifying aurorae

[https://sci.esa.int/web/cluster/-/29108-electrifying-aurorae](https://sci.esa.int/web/cluster/-/29108-electrifying-aurorae) · `esacluster.csv` · used in w10-p4

*Published research summary.* European Space Agency science pages (last updated September 1, 2019), describing Cluster satellite observations of the regions that accelerate auroral electrons.

| Quantity | Published description |
| --- | --- |
| Electron energies after acceleration | several keV (thousand electronvolts) |
| Acceleration structures | narrow, U-shaped, starting several thousand kilometres up |

## Alaska Science Forum: Auroral electrojets

[https://gi.alaska.edu/alaska-science-forum/auroral-electrojets](https://gi.alaska.edu/alaska-science-forum/auroral-electrojets) · `uafelectrojet.csv` · used in w10-p4

*Published typical values (science column).* University of Alaska Fairbanks Geophysical Institute. Typical, storm-dependent values; the current’s geometry is far more complex than a straight line.

| Quantity | Published description |
| --- | --- |
| Direction and altitude | mostly east–west, near 100 km |
| Current | as large as half a million amperes |

## Earth’s surface heat flux (Davies and Davies, 2010)

[https://se.copernicus.org/articles/1/5/2010/](https://se.copernicus.org/articles/1/5/2010/) · `earthheat.csv` · used in w10-p5

*Published global estimate (peer-reviewed).* J. H. Davies and D. R. Davies, Solid Earth 1, 5–24 (2010). Abstract: “Our final preferred estimate is 47pm2 TW.” The continental figures are from their preferred analysis (Section 5).

| Quantity | Published value |
| --- | --- |
| Total surface heat flow | 47 $\pm$ 2 TW |
| Continents (preferred analysis) | 13.8 TW, mean 73 mW/m² |
